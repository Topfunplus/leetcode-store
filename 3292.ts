function minValidStrings(words: string[], target: string): number {
  // 可以把target想象成一个拼图 words里面的字符串可以拼成target
  let number = 0
  // 用一个hashMap来存储target中每个字符出现的次数
  let targetMap = target.split('')
  let resultMap: number[] = Array(target.length).fill(0)

  // 对一个word进行遍历，把每个字符出现的次数存储到targetMap中
  words.forEach((word) => {
    let flag = false
    word.split('').forEach((char) => {
      

      flag = true
    })

    if (flag) {
      number++
    }
  })
  console.log(targetMap)
  console.log(number)
  return number
}

minValidStrings(['abc', 'aaaaa', 'bcdef'], 'aabcdabc') // 2
