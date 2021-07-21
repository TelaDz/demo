/**
 * @param {number} x
 * @return {number}
 */
var romanToInt = function (s) {
  let obj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }
  let x, y, z, t
  y = s.split('')
  z = y.map(item => obj[item])

  return t
}

// console.log('', romanToInt('MCMXCIV'))
console.log('', romanToInt('CMXCIX'))
// console.log('', romanToInt('DCXXI'))
