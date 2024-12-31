function moveZeroes(nums: number[]): void {
  let index = 0
  let cur = 0
  while (index < nums.length) {
    let item = nums[cur]

    if (item === 0) {
      nums.splice(index, 1)
      nums.push(0)
    } else {
      cur++
    }

    index++
  }
}
