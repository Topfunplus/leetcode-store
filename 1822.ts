function signFunc(num: number): number {
  return num === 0 ? 0 : num > 0 ? 1 : -1
}

function arraySign(nums: number[]): number {
  return signFunc(
    nums.reduce((pre, cur) => {
      if (cur === 0) {
        return 0
      }
      return pre * cur
    })
  )
}
