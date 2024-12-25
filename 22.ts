let log = console.log;

function generateParenthesis(n: number): string[] {
  const res: string[] = [];

  // 校验当前字符串是否合法
  const isValid = (str: string) => { 
    let arr = str.split('');
    let stack = [];
    // 遍历字符串中每一个item
    for (const item of arr) {
      if (item === '(') {
        stack.push(item);
      } else if (item === ')') {
        if (stack.length === 0 || stack.pop() !== '(') {
          return false;
        }
      }
    }
    if (stack.length === 0) {
      return true;
    }

    return false;
  }
  const findAll = (subStr: string) => {
    const len = subStr.length;

    // 如果长度为n 那么就推入结果数组
    if (len === 2 * n) {
      // 判断是否满足要求
      // isValid(subStr);
      if (isValid(subStr)) { 
        res.push(subStr);
      }
      // res.push(subStr);
      return 1;
    }
    findAll(subStr + '('); 
    findAll(subStr + ')');
  }

  findAll('');
  return res;
};


// console.log(generateParenthesis(1));
console.log(generateParenthesis(3));