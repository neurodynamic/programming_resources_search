export default function flatten2d (array) {
  return array.reduce(function (totalArray, thisArray) { return totalArray.concat(thisArray) }, [])
}
