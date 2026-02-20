# Google Sheets → i18next (Apps Script)

This guide shows how to serve translations from Google Sheets to `i18next` using a small Google Apps Script web app. The script supports nested keys (dot notation) and simple namespace handling.

## Sheet layout (recommended)

- Option A — One sheet per namespace
  - Sheet name: `common`, `translation`, `home`, etc.
  - Columns: `key`, `en`, `ru`, `kk`, ...
  - Example row: `home.title` | `Welcome` | `Добро пожаловать`

- Option B — Single sheet with `ns` column
  - Columns: `key`, `ns`, `en`, `ru`, `kk`
  - Example row: `title` | `home` | `Welcome` | `Добро пожаловать`

Nested keys: use dot notation in the `key` column, e.g. `home.header.title`.

## Deploy Apps Script

1. Open Google Sheets with your translations.
2. Extensions → Apps Script.
3. Create a new script file and paste the contents of `AppsScript.gs`.
4. Replace `SPREADSHEET_ID` constant with your spreadsheet ID (from the URL).
5. Save.
6. Deploy → New deployment → Select `Web app`:
   - Description: `i18next translations`
   - Execute as: `Me` (or choose appropriately)
   - Who has access: `Anyone` **(for public)** or choose restricted access.
7. Click `Deploy` and copy the web app URL.

If you set restricted access, you'll need a proxy or server-side component to authenticate and fetch the translations for your frontend.

## API usage

- Single namespace (sheet named `common` or `translation`):
  - GET: `https://script.google.com/macros/s/XXX/exec?lang=ru&ns=common`

- Single sheet with `ns` column (default sheet name `Translations` or first sheet):
  - GET: `...?lang=ru&ns=home`

- All namespaces (returns an object with sheet names as keys):
  - GET: `...?lang=ru&all=true`

- JSONP fallback (if you have CORS issues):
  - GET: `...?lang=ru&ns=common&callback=cb` → returns `cb({ ... })` with JS mime type.

## i18next config example

In your `src/i18n.ts` set backend `loadPath` to the script URL, e.g.:

```
backend: {
  loadPath: 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec?lang={{lng}}&ns={{ns}}'
}
```

Use `ns` query param — `i18next` will request each namespace separately.

If you see CORS errors in the browser, either:

- Use the `callback` (JSONP) parameter and adapt your http backend to fetch JSONP, or
- Deploy a tiny server-side proxy (recommended for private sheets), or
- Make the web app public (`Anyone, even anonymous`) — in many setups this is sufficient.

## Notes & recommendations

- For private content use a server-side fetch with a service account to avoid exposing your sheet.
- For production, consider exporting JSON files during CI (via Sheets API) and bundling them or hosting on a CDN.
- The script expects a `key` column. Language columns must match language codes (`en`, `ru`, `kk`).
