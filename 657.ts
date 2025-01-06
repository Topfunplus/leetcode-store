function judgeCircle(moves: string): boolean {
  let origin = [0, 0]

  for (let move of moves) {
    switch (move) {
      case 'U': {
        origin[1] += 1
        break
      }
      case 'D': {
        origin[1] -= 1
        break
      }
      case 'L': {
        origin[0] -= 1
        break
      }
      case 'R': {
        origin[0] += 1
        break
      }
    }
  }

  return origin[0] === 0 && origin[1] === 0
}
