// 算法 是一种 输入输出的映射关系
// 输入 -> 算法 -> 输出

// 比如 一个函数 f(x) = x + 1
// 输入是 x 输出是 x + 1

// 如何实现算法？
// 例如 现在一个教室中，我要找到生日相同的那一对人 我该怎么做?
// 我们可以先把所有人的生日都列出来，然后记录在一个本子上，或者一个record上
// 在我查找的过程中，如果我发现，我的本子上记录了这个生日，并且我现在要问的这个学生生日就是我记录的，那么我就找到了 return
// 如果我找了半天下来， 没找到，那么我就返回一个空值

/**
 * 算法：找到两个人生日相同的学生
 * 输入：学生的数组
 * 输出：两个人生日相同的 那一对学生
 * 算法步骤：
 *  1.在输入的学生数组中，一个一个访问，然后记录
 * @param students 学生的数组
 * @returns 两个人生日相同的学生
 */
function findDuplicateBirthday(students: string[]): string | null {
  const record: Record<string, number> = {}

  for (const student of students) {
    if (record[student] >= 1) {
      return student
    }
    record[student] = (record[student] || 0) + 1
  }

  return null
}

// AI:
function findSameBirthday(students: string[]): string | undefined {
  const record: Record<string, boolean> = {}
  for (const student of students) {
    if (record[student]) {
      return student
    }
    record[student] = true
  }
  return undefined
}

// console.log(
//   getSameStudentBirthday([
//     '1999-01-01',
//     '1999-02-02',
//     '1999-01-01',
//     '1999-03-03',
//   ])
// )

export {
  findDuplicateBirthday,
  findSameBirthday
}
