const parse = require('./index')

const test1 = 'app.exe --load abc.com --save ~/Documents/out.txt'
const result1 = parse(test1)
console.log(`\nTest1: ${test1}\nResult1: ${JSON.stringify(result1, null, 2)}`)
if (result1._ != 'app.exe') throw 'Error'
if (result1.load != 'abc.com') throw 'Error'
if (result1.save != '~/Documents/out.txt') throw 'Error'

const test2 = 'yikes at root -abim here --root --force --max 3 --min 1'
const result2 = parse(test2)
console.log(`\nTest2: ${test2}\nResult2: ${JSON.stringify(result2, null, 2)}`)
if (result2._ != 'yikes at root') throw 'Error'
if (!result2.a) throw 'Error'
if (!result2.b) throw 'Error'
if (!result2.i) throw 'Error'
if (result2.m != 'here') throw 'Error'
if (!result2.root) throw 'Error'
if (!result2.force) throw 'Error'
if (result2.max != '3') throw 'Error'
if (result2.min != '1') throw 'Error'

const test3 = [ 'hello', 'world', '--test' ]
const result3 = parse(test3)
console.log(`\nTest3: ${test3}\nResult3: ${JSON.stringify(result3, null, 2)}`)
if (result3._ != 'hello world') throw 'Error'
if (!result3.test) throw 'Error'

console.log('\n= ALL TESTS PASSED SUCCESSFULLY =')
