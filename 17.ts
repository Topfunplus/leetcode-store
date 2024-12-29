let hashMap = {
  '1': '',
  '2': 'abc',
  '3': 'def',
  '4': 'ghi',
  '5': 'jkl',
  '6': 'mno',
  '7': 'pqrs',
  '8': 'tuv',
  '9': 'wxyz',
}
let result = new Set()
function dfs(str1: string, str2: string) {
  if (str1.length === 0 || str2.length === 0) return
  result.add(str1[str1.length - 1] + str2[str2.length - 1])
  console.log('strs:', str1, str2)
  console.log('result:', result)
  dfs(str1.slice(0, -1), str2)
  dfs(str1, str2.slice(0, -1))
}

function dfa(str: string[], result: Set<string>, current: string) {
  if (str.some((item) => item.length === 0)) return

  const lastChars = str.map((str) => str[str.length - 1])
  const combination = current + lastChars.join('')
  result.add(combination)

  console.log('str:', str)
  console.log('Result:', result)

  // 遍历每个字符串，分别减少长度，并继续递归
  for (let i = 0; i < str.length; i++) {
    const newstr = str.slice() // 创建一个新的字符串数组副本
    newstr[i] = newstr[i].slice(0, -1) // 当前字符串去掉最后一个字符
    dfa(newstr, result, current) // 递归调用
  }
}

// dfs(hashMap['2'], hashMap['3'])
dfa(['abc', 'def', 'gh'], new Set(), '')
