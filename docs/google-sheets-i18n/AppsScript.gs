// Google Apps Script: i18next JSON endpoint for Google Sheets
// Configure SPREADSHEET_ID below, then Deploy -> New deployment -> Web app
// Access: "Anyone, even anonymous" for public use, or restrict and use server-side proxy.

const SPREADSHEET_ID = 'PUT_SPREADSHEET_ID_HERE';

function doGet(e) {
  const params = e.parameter || {};
  const lang = params.lang || 'en';
  const ns = params.ns || 'translation';
  const all = params.all === 'true';
  const callback = params.callback; // optional JSONP

  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);

  let payload;
  try {
    if (all) {
      const sheets = ss.getSheets();
      const res = {};
      sheets.forEach(function(sheet){
        const name = sheet.getName();
        // skip hidden/system sheets if needed
        res[name] = readSheetTranslations(sheet, lang);
      });
      payload = res;
    } else {
      // Try to find a sheet named as namespace, else read a default sheet and filter by column 'ns'
      const sheetByName = ss.getSheetByName(ns);
      if (sheetByName) {
        payload = readSheetTranslations(sheetByName, lang);
      } else {
        // Fallback: use first sheet named 'Translations' or first sheet
        const defaultSheet = ss.getSheetByName('Translations') || ss.getSheets()[0];
        payload = readSheetTranslations(defaultSheet, lang, ns);
      }
    }
  } catch (err) {
    payload = { error: String(err) };
  }

  const out = JSON.stringify(payload);
  if (callback) {
    return ContentService.createTextOutput(callback + '(' + out + ')').setMimeType(ContentService.MimeType.JAVASCRIPT);
  }
  return ContentService.createTextOutput(out).setMimeType(ContentService.MimeType.JSON);
}

function readSheetTranslations(sheet, lang, nsFilter) {
  const data = sheet.getDataRange().getValues();
  if (!data || data.length < 2) return {};
  const headers = data[0].map(h => String(h).trim());
  const rows = data.slice(1);

  const keyIdx = headers.indexOf('key');
  const nsIdx = headers.indexOf('ns');
  const langIdx = headers.indexOf(lang);

  if (keyIdx === -1) throw new Error('Sheet must have a "key" column');
  if (langIdx === -1) {
    // try to find language column by lowercase match
    const lc = headers.map(h => h.toLowerCase());
    const alt = lc.indexOf(String(lang).toLowerCase());
    if (alt !== -1) {
      langIdx = alt;
    } else {
      throw new Error('Language column "' + lang + '" not found');
    }
  }

  const res = {};
  rows.forEach(function(row){
    const key = row[keyIdx];
    if (!key) return;
    if (nsFilter && nsIdx !== -1) {
      const rowNs = row[nsIdx];
      if (String(rowNs) !== String(nsFilter)) return;
    }
    const val = row[langIdx] || '';
    setNested(res, String(key), val);
  });
  return res;
}

function setNested(obj, path, value) {
  const parts = path.split('.');
  let cur = obj;
  for (let i = 0; i < parts.length; i++) {
    const p = parts[i];
    if (i === parts.length - 1) {
      cur[p] = value;
    } else {
      if (!cur[p] || typeof cur[p] !== 'object') cur[p] = {};
      cur = cur[p];
    }
  }
}
