import * as fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { createTheme, getThemeStyles } from './theme.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const writeThemeFile = (themePath, themeObject) => {
  return fs.writeFile(themePath, JSON.stringify(themeObject, null, 2), (err) => {
    if (err) {
      showErrorNotification(err.message, null, null);
    }
  });
};

const createThemePath = (style) => {
  return join(__dirname, '..', 'themes', `BuenosAires-${style}-color-theme.json`);
};

export const buildTheme = () => {
  getThemeStyles().forEach((style) => {
    const theme = createTheme(style);
    const themePath = createThemePath(style);
    writeThemeFile(themePath, theme);
  });
};

buildTheme();
