// 三数之和 立方级别的时间复杂度 超时

function threeSum(nums: number[]): number[][] {
  let result = new Map()
  nums = nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      for (let k = 0; k < j; k++) {
        if (i != j && j != k && i != k) {
          if (nums[i] + nums[j] === -nums[k]) {
            let arr = [nums[i], nums[j], nums[k]].sort()
            result.set(arr.toString(), arr)
          }
        }
      }
    }
  }
  return Array.from(result.values())
}

function getThreeNum(nums: number[]): number[][] {
  let result: number[][] = []

  nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue

    let left = i + 1,
      right = nums.length - 1
    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right]
      let item = [nums[i], nums[left], nums[right]]
      if (sum === 0) {
        result.push(item)
        left++
        right--

        while (left < right && nums[left] === nums[left - 1]) left++
        while (left < right && nums[right] === nums[right + 1]) right--
      } else if (sum < 0) {
        left++
      } else {
        right--
      }
    }
  }

  return Array.from(result.values())
}
