function calPoints(operations: string[]): number {
  let res: string[] = []
  for (let i = 0; i < operations.length; i++) {
    const item = operations[i]

    if (!Number.isNaN(Number(item))) {
      res.push(item)
    } else {
      let score: number = 0
      switch (item) {
        case '+': {
          let one = res[res.length - 1]
          let two = res[res.length - 2]
          score =
            Number(one === undefined ? 0 : one) +
            Number(two === undefined ? 0 : two)
          res.push(score + '')
          break
        }
        case 'D': {
          score = Number(res[res.length - 1]) * 2
          res.push(score + '')
          break
        }
        case 'C': {
          res.pop()
          break
        }
      }
    }
  }

  return res.reduce((pre, cur) => {
    return Number(pre) + Number(cur)
  }, 0)
}

calPoints(['5', '-2', '4', 'C', 'D', '9', '+', '+']) // 30
