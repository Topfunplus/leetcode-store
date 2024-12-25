function convert(s: string, numRows: number): string {
  let newStr: string[] = [];

  for (let i = 0; i < numRows; i++)
      newStr[i] = '';


  let flag = -1;
  let index = 0;
  for (let i = 0; i < s.length; i++) {
      // 如果到头了 就换行
      if (index === 0 || index === numRows - 1) {
          flag = -flag;
      }
    newStr[index] += s.charAt(i);
    index += flag;
  }
  return newStr.join('');
};

console.log(convert('PAYPALISHIRING', 3))
// convert('PAYPALISHIRING', 3)