export default function squish (string) {
  return string.replace(/\s{2,}/, ' ').trim()
}
