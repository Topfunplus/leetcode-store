function lengthOfLongestSubstring(s: string): number {

  let res:string[] = []
  let cur = 0;
  let maxLen = 0
  while (cur < s.length) { 
    let temp:string[] = []
    for (let i = cur; i < s.length; i++){
      if (temp.indexOf(s.charAt(i)) === -1) {
        temp.push(s.charAt(i))
      } else {
        break
      }
    }
    
    res = temp;
    cur++;

    maxLen = Math.max(maxLen, res.length)
  }
  return maxLen;
};


// 滑动窗口解法

// var lengthOfLongestSubstring = function(s) {
//   // 哈希集合，记录每个字符是否出现过
//   const occ = new Set();
//   const n = s.length;
//   // 右指针，初始值为 -1，相当于我们在字符串的左边界的左侧，还没有开始移动
//   let rk = -1, ans = 0;
//   for (let i = 0; i < n; ++i) {
//       if (i != 0) {
//           // 左指针向右移动一格，移除一个字符
//           occ.delete(s.charAt(i - 1));
//       }
//       while (rk + 1 < n && !occ.has(s.charAt(rk + 1))) {
//           // 不断地移动右指针
//           occ.add(s.charAt(rk + 1));
//           ++rk;
//       }
//       // 第 i 到 rk 个字符是一个极长的无重复字符子串
//       ans = Math.max(ans, rk - i + 1);
//   }
//   return ans;
// };

// 作者：力扣官方题解
// 链接：https://leetcode.cn/problems/longest-substring-without-repeating-characters/solutions/227999/wu-zhong-fu-zi-fu-de-zui-chang-zi-chuan-by-leetc-2/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。