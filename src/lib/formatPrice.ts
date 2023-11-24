export const formatPrice = (price: number): string => {
  if (Math.floor(price) === price) {
    return price.toString();
  }
  return price.toFixed(2);
};
