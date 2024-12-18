function canJump(nums: number[]): boolean {
  // dp数组的定义 dp[i][j] 表示到达i位置时，还剩下j步可以跳
  let dp: number[][] = Array(nums.length)
  dp = dp.map((item: number[]) => {
    item = Array(2).fill(0)
    return item
  })
  // 每次到达一个数组的元素 数组的元素可以确定跳多少步  也可以少跳

  // 不能跳最大跳跃长度为0的，以为这样会跳不动了
}
