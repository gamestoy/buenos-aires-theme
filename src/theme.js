import { createThemeContext } from './context.js';
import { getEditorColors } from './editor.js';
import { getExtensionsColors } from './extensions.js';
import { getSemanticTokenColors } from './semantics.js';
import { getTokenColors } from './syntax.js';
import { template } from './template.js';

export const getThemeStyles = () => ['dark'];

export const createTheme = (style) => {
  const themeContext = createThemeContext();
  const ideColors = { ...getEditorColors(themeContext), ...getExtensionsColors(themeContext) };
  return {
    ...template,
    colors: ideColors,
    tokenColors: getTokenColors(themeContext),
    semanticTokenColors: getSemanticTokenColors(themeContext),
  };
};
