let str = '';
let line = 1;
const switcher = -1;

for (let i = 1; i <= 64; i++) {
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

  if (i % 8 === 0) {
    console.log(str)
    str = ''
    line ++
  }
}
