export default function appendToEachArrayValue(array, appendString) {
  // eslint-disable-next-line
  for (let value of array) {
    // eslint-disable-next-line
    array[array.indexOf(value)] = appendString + value;
  }

  return array;
}