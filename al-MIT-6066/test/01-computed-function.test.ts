import { findDuplicateBirthday } from '../01/01-computed-function'

test('查找生日相同的学生', () => {
  const students = ['1999-01-01', '1999-02-02', '1999-01-01', '1999-03-03']
  expect(findDuplicateBirthday(students)).toBe('1999-01-01')
})



describe('查找生日相同的学生', () => {
  test.each([
    { students: ['1999-01-01', '1999-02-02', '1999-01-01', '1999-03-03'], expected: '1999-01-01' },
    { students: ['2000-05-05', '2001-06-06', '2000-05-05', '2002-07-07'], expected: '2000-05-05' },
    { students: ['1998-08-08', '1998-08-08', '1999-09-09', '2000-10-10'], expected: '1998-08-08' },
    { students: ['2001-11-11', '2002-12-12', '2003-01-01', '2004-02-02'], expected: null },
  ])('测试用例 %#', ({ students, expected }) => {
    expect(findDuplicateBirthday(students)).toBe(expected)
  })
})