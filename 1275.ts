function isWin(map: number[][], sign: number): string {
  let flag = false
  for (let i = 0; i < 3; i++) {
    if (map[i][0] === sign && map[i][1] === sign && map[i][2] === sign)
      flag = true
    if (map[0][i] === sign && map[1][i] === sign && map[2][i] === sign)
      flag = true
  }

  // 交叉情况
  if (map[0][0] === sign && map[1][1] === sign && map[2][2] === sign)
    flag = true
  if (map[0][2] === sign && map[1][1] === sign && map[2][0] === sign)
    flag = true

  if (sign === 1) {
    return flag ? 'A' : 'Pending'
  }
  if (sign === -1) {
    return flag ? 'B' : 'Pending'
  }
  return 'Pending'
}

function tictactoe(moves: number[][]): string {
  let map: number[][] = Array(3)
    .fill(0)
    .map(() => Array(3).fill(0))
  for (let i = 0; i < moves.length; i++) {
    let move = moves[i]
    const [x, y] = move
    if (i % 2 === 0) map[x][y] = 1
    else map[x][y] = -1
  }

  console.log(map)
  if (isWin(map, 1) === 'Pending' && isWin(map, -1) === 'Pending') {
    if (moves.length === 9) return 'Draw'
    return 'Pending'
  } else {
    if (isWin(map, 1) === 'A') {
      return 'A'
    }
    if (isWin(map, -1) === 'B') {
      return 'B'
    }
    return 'Draw'
  }
}

console.log(
  tictactoe([
    [0, 0],
    [1, 1],
    [2, 0],
    [1, 0],
    [1, 2],
    [2, 1],
    [0, 1],
    [0, 2],
    [2, 2],
  ])
)
