export type ProjectItem = {
  number: string;
  title: string;
  panel: 'book' | 'slider2' | 'slider3' | 'single';
};

export type Sheet = { front: string; back: string | null };
