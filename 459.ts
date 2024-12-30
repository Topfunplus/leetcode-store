// function repeatedSubstringPattern(s: string): boolean {
//   let res: string[] = []
//   let index = 0
//   while (index < s.length) {
//     let subStr: string[] = []
//     for (let i = 0; i < s.length; i++) {
//       if (subStr.indexOf(s[i]) !== -1 ) {
//         subStr.push(s[i])
//       } else {
//         if (
//           res.length !== 0 &&
//           !res.every((item, index) => item === subStr[index])
//         ) {
//           return false
//         }
//         res = subStr
//         subStr = []
//       }
//     }
//     index++
//   }

//   return true
// }

// 思路是，如果一个字符串 sn 重复多次是另一个字符串 ln 的子串，那么这个字符串一定是由这个子串重复n次构成的

// 满足一个两个条件：一个是这个长字符串一定是由子串重复n次，也就是说，长字符串的长度一定是子串的整数倍

// 对于任意的 l 属于 [sn,ln] l ， s[l] = s[l - n] ，也就是说，长字符串的第 l 个字符一定和第 l - n 个字符相等

// 循环枚举的是子串的长度

function repeatedSubstringPattern(s: string): boolean {
  let len = s.length
  for (let i = 0; i < len; i++) {
    // 如果是整数倍 这个整数倍的意思是 当前循环的i是子串的长度 如果整个字符串的长度是当子串的整数倍
    if (len % i === 0) {
      let match = true
      // 那么从i开始 循环到n个字符 并且，对于从 j 开始 到 len 个 字符 s[j] 是等于 s[len - j]的  因为j是子串的长度， 此时的子串已经是整数倍

      // 例如 abcabcabcabc 长度为12  这个时候 我们循环到3，12是他的整数倍，这时候的子串为从3开始到12结束 也就是abc，这个abc满足 s[3(j)] (a)  === s[9(len - j)] (a)
      for (let j = i; j < len; j++) {
        // 因为j 的开始是 i (定住在3这个位置) 所以j - i 一定是从0开始的
        if (s[j] !== s[j - i]) {
          match = false
          break
        }
      }
      if (match) {
        return true
      }
    }
  }
  return false
}
