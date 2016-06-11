export default function removeExactWord (wordToRemove, string) {
  const words = string.split(' ')
  const filteredWords = words.filter(function (word) { return word !== wordToRemove })
  return filteredWords.join(' ')
}
