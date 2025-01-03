function canMakeArithmeticProgression(arr: number[]): boolean {
  arr.sort((a, b) => a - b)

  let d = arr[1] - arr[0]

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] - arr[i] !== d) {
      return false
    }
  }

  return true
}
