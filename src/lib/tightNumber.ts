export const tightNumber = (num: number): boolean => {
  const firstDigit = num.toString().substring(0, 1);
  return firstDigit === '2' || firstDigit === '3' || firstDigit === '4' || firstDigit === '5' || firstDigit === '6' || firstDigit === '8';
};
