export default function flatten (array) {
  return [].concat.apply([], array)
}
