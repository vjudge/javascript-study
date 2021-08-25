var a = {}
a.x = a = {n:2}
console.log('a: ', a)
console.log('a.x: ', a.x)


var c = {}
c.x = c = []
console.log('c: ', c)
console.log('c.x: ', c.x)


var m = {n: 1}
m.x = m = {n: 2}
console.log('m: ', m)
console.log('m.x: ', m.x)


var x = y = 100
console.log('x: ', x)
// 100
console.log('y: ', y)
// 100

