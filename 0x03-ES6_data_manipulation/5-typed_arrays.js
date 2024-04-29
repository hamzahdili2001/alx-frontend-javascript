export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  if (position > length - 1) throw Error('Position outside range');

  const int8View = new Int8Array(buffer);

  int8View[position] = value;

  return buffer;
}
