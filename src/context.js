import { palette } from './palette.js';
import { colorScopes } from './scopes.js';

export const createThemeContext = () => {
  return {
    palette: palette,
    scopes: colorScopes,
  };
};
