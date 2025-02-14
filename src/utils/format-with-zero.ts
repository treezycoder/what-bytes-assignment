export const formatWithZero = (num: number): string => {
  return num > 0 && num < 10 ? `0${num}` : `${num}`;
};
