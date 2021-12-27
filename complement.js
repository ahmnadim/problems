const findComplement = (num) => {
  const binNum = num
    .toString(2)
    .replace(/1/g, 'x')
    .replace(/0/g, '1')
    .replace(/x/g, '0')

  return parseInt(binNum, 2)
}

const complementNumber = findComplement(10)

console.log('Complement number: ', complementNumber)
