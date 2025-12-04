/**
 * A flatMap callback function that turns an array [ a, b, c, d, e ] into an array of pairs of elements [ [ a, b ], [ c, d ], [ e ] ]
 * @param value the current element
 * @param index the index
 * @param array the entire array
 * @returns the next pair
 */
export const mapToPairs = <T>(value: T, index: number, array: T[]): [ T, T | undefined ][] => {
  // skip odd elements
  if (index % 2 !== 0) {
    return [];
  }
  // include this element in the pair
  const nextElement: [ T, T | undefined ] = [ value, undefined ];
  // include the next element if it exists
  if (typeof array[index + 1] !== 'undefined') {
    nextElement[1] = array[index + 1];
  }
  return [ nextElement ];
};
