export const getHexAlpha = (percentage) => {
  const hex = Math.round((percentage / 100) * 255).toString(16);
  return hex.length === 1 ? `0${hex}` : hex;
};
