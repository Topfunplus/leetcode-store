function lengthOfLastWord(s: string): number {
  s = s.split('').reverse().join('')

  let newString = ''
  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) !== ' ') {
      newString += s.charAt(i)
    } else {
      if (newString) {
        break
      }
    }
  }

  return newString.length
}
