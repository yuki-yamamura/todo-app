export const toUpperCaseFirstCharacter = (str: string): string => {
  return `${str.slice(0, 1).toUpperCase()}${str.slice(1)}`;
};
