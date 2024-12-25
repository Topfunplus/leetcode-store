let hash: Record<number, string> = {
  1: 'I',
  5: 'V',
  10: 'X',
  50: 'L',
  100: 'C',
  500: 'D',
  1000: 'M',
}

function intToRoman(num: number): string {
  let str: string = num.toString()
  let newStr: string = ''

  let len: number = str.length

  for (let i = 0; i < len; i++) {
    let bit: number = Math.pow(10, len - i - 1)
    let number = Number(str.charAt(i)) * bit
    let high = number / bit

    console.log('number:', number)
    const [maxValue, secondValue, highValue] = findMax(number)
    console.log('maxValue:', maxValue)
    console.log('secondValue:', secondValue)
    console.log('highValue:', highValue)
    console.log('high:', high)
    if (high !== 4 && high !== 9) {
      if (hash[number]) {
        newStr += hash[number]
      } else {
        if (high && high <= 3) {
          for (let j = 0; j < high; j++) {
            newStr += hash[maxValue]
          }
        } else {
          newStr += hash[maxValue]
          for (let j = 0; j < high - maxValue / bit; j++) {
            newStr += hash[secondValue]
          }
        }
      }
    } else {
      // 处理个位数为4或9的情况
      if (number === 4) {
        newStr += hash[maxValue] + hash[highValue]
      } else if (number === 9) {
        newStr += hash[secondValue] + hash[highValue]
      } else {
        if (high === 4) {
          newStr += hash[secondValue] + hash[highValue]
        } else {
          // 处理减法
          newStr += hash[maxValue] + hash[highValue]
        }
      }
    }

    console.log('newStr:', newStr)
    console.log('-------------------')
  }

  return newStr
}

function findMax(num: number) {
  let keys: string[] = Object.keys(hash)
  let max = 0
  let index = 0
  for (let i = 0; i < keys.length; i++) {
    if (Number(keys[i]) <= num) {
      max = Number(keys[i])
      index = i
    }
  }

  return [max, Number(keys[index - 1]), Number(keys[index + 1])]
}

// const [maxValue, secondValue, highValue] = findMax(700)

// console.log(maxValue, secondValue, highValue)

// console.log(intToRoman(3794))
intToRoman(1994)
