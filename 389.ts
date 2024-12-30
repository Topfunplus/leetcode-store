// 这样做会有重复的问题
// function findTheDifference(s: string, t: string): string {
//   if (s.length > t.length) {
//     for (let i = 0; i < s.length; i++) {
//       if (t.indexOf(s[i]) === -1) {
//         return t[i]
//       }
//     }
//   } else {
//     for (let i = 0; i < t.length; i++) {
//       if (s.indexOf(t[i]) === -1) {
//         return s[i]
//       }
//     }
//   }
//   return ''
// }

// 也有问题 ， 复杂 且不清晰
// function getDiff(map1: Map<string, number>, map2: Map<string, number>) {
//   let diff = new Set<string>()

//   for (let [key, value] of map1) {
//     if (map2.get(key) !== value || value > 1) {
//       diff.add(key)
//     }
//   }

//   for (let [key, value] of map2) {
//     if (map1.get(key) !== value || value > 1) {
//       diff.add(key)
//     }
//   }

//   return Array.from(diff)
// }
// function findTheDifference(s: string, t: string): string {
//   let hash_s = new Map()
//   let hash_t = new Map()
//   let len = Math.max(s.length, t.length)

//   for (let i = 0; i < len; i++) {
//     let item_s = s[i]
//     let item_t = t[i]
//     if (item_s) {
//       hash_s.set(item_s, (hash_s.get(item_s) || 0) + 1)
//     }
//     if (item_t) {
//       hash_t.set(item_t, (hash_t.get(item_t) || 0) + 1)
//     }
//   }

//   return getDiff(hash_s, hash_t).join('')
// }

// console.log(findTheDifference('abcd', 'abcde'))

// console.log('a'.charCodeAt(0))  这个方法可以返回一个字母的ASCII码
// console.log(Number('z'.charCodeAt(0) - 'a'.charCodeAt(0)))

// 对每一个字符串进行计数操作 利用字母的ASCII码进行计数

// function findTheDifference(s: string, t: string): string {
//   let hash: number[] = Array(26).fill(0)
//   for (let i = 0; i < s.length; i++) {
//     hash[s[i].charCodeAt(0) - 'a'.charCodeAt(0)]++
//   }

//   for (let j = 0; j < t.length; j++) {
//     hash[t[j].charCodeAt(0) - 'a'.charCodeAt(0)]--
//     if (hash[t[j].charCodeAt(0) - 'a'.charCodeAt(0)] < 0) {
//       return t[j]
//     }
//   }

//   return ''
// }

// console.log(findTheDifference('abcd', 'abcde')) // success

// 异或操作 两个不一样的时候返回1 一样的时候返回0
// console.log(1 ^ 1)
// console.log(1 ^ 0)
// console.log(0 ^ 0)
// console.log(0 ^ 1)

// console.log('a ^ c=>', 'a'.charCodeAt(0) ^ 'c'.charCodeAt(0))
// console.log(2 ^ 12)
// console.log(2 ^ 2)

// // 如果一个数组中，只有一个元素出现一次，其他元素都出现两次，找出这个元素
// let list = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9]
// const res = list.reduce((prev, cur, index) => {
//   console.log('----------------------')
//   console.log('index', index)
//   console.log('pre,cur', prev, cur)
//   console.log('prev ^ cur', prev ^ cur)

//   return prev ^ cur
// }, 0)

// console.log('res=>', res)

// 用异或来解决
function findTheDifference(s: string, t: string): string {
  let res = 0
  for (let item_s of s) {
    res ^= item_s.charCodeAt(0)
  }
  for (let item_t of t) {
    res ^= item_t.charCodeAt(0)
  }

  return String.fromCharCode(res)
}

console.log(findTheDifference('abcd', 'abcde'))
