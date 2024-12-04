export type Style = {
  colors: {
    foreground: string;
    background: string;
    card: string;
  };
  font: {
    family: string;
    size: string;
  };
  reader: {
    font: {
      family: string;
      size: string;
    };
    width: string;
  };
};

export const style = {
  default: {
    colors: {
      foreground: '#121212',
      background: '#fbf0d9',
      card: '#e3d9c3',
    },
    font: {
      family: "'Inter', system-ui, sans-serif",
      size: '16px',
    },
    reader: {
      font: {
        family: "'Times New Roman', serif",
        size: '18px',
      },
      width: '800px',
    },
  },
  set: (style: Style) => {
    localStorage.setItem('style', JSON.stringify(style));

    const root = document.documentElement;
    root.style.setProperty('--foreground', style.colors.foreground);
    root.style.setProperty('--background', style.colors.background);
    root.style.setProperty('--card', style.colors.card);
    root.style.setProperty('--font-family', style.font.family);
    root.style.setProperty('--font-size', style.font.size);
    root.style.setProperty('--reader-font-family', style.reader.font.family);
    root.style.setProperty('--reader-font-size', style.reader.font.size);
    root.style.setProperty('--reader-width', style.reader.width);
  },
  get: () => {
    const saved = localStorage.getItem('style');
    return saved ? JSON.parse(saved) : style.default;
  },
  reload: () => style.set(style.get()),
  reset: () => {
    localStorage.removeItem('style');
    style.reload();
  },
};
