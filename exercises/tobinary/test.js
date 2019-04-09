const toBinary = require('./index')

test('ToBinary function exists', () => {
  expect(toBinary).toBeDefined()
})

test('ToBinary correctly converts number', () => {
  expect(toBinary(0)).toEqual('0')
  expect(toBinary(1)).toEqual('1')
  expect(toBinary(2)).toEqual('10')
  expect(toBinary(3)).toEqual('11')
  expect(toBinary(15)).toEqual('1111')
  expect(toBinary(313)).toEqual('100111001')
  expect(toBinary(4357)).toEqual('1000100000101')
})
