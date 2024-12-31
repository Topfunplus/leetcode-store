// 先扫一遍， 然后把每两个的元素差记录下来 ，然后用every函数判断是否每一个都为负数或者正数

function isMonotonic(nums: number[]): boolean {
  let arr = []
  for (let i = 0; i < nums.length - 1; i++) {
    let d = nums[i + 1] - nums[i]
    arr.push(d)
  }
  console.log(arr)

  if (arr.some((item) => item < 0)) return arr.every((item, index) => item <= 0)
  else return arr.every((item, index) => item >= 0)
}

// console.log(isMonotonic([1, 2, 2, 3])) // true
// console.log(isMonotonic([6, 5, 4, 4]))

console.log(isMonotonic([1, 1, 0]))
