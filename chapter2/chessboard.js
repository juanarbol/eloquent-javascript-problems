let str = ''
let line = 1
const switcher = -1

const binding = 8
const squareArea = Math.pow(binding, 2)

for (let i = 1; i <= squareArea; i++) {
  const isHash = Math.pow(switcher, i) < 0 
  if (line % 2 === 0) {
    if (isHash) {
      str += ' '
    } else {
      str += '#'
    }
  } else {
    if (!isHash) {
      str += ' '
    } else {
      str += '#'
    }
  }

  if (i % binding === 0) {
    console.log(str)
    str = ''
    line ++
  }
}
