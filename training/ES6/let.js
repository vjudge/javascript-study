{
  let a = 1
  var b = 2
}

// a // ReferenceError: a is not defined.
b // 1



for (var i = 1; i <= 10; i ++) {
  console.log('i = ', i)
}
console.log('i finally: ', i)


for (let j = 1; j <= 10; j ++) {
  console.log('j = ', j)
}
console.log('j finally: ', j)



// --- let所声明的变量一定要在声明后使用，否则报错。 ---
// var 的情况
console.log(a) // 输出：undefined
var a = 2

// let 的情况
console.log(a) // 报错：ReferenceError
let a = 2



// --- 暂时性死区 (temporal dead zone，简称 TDZ) ---
var a = 123
if (true) {
  a = 'abc' // ReferenceError
  let a
}



// --- 重复声明 ----
// 报错
function func() {
  let a = 1
  var a = 2
}

// 报错
function func() {
  let a = 1
  let a = 2
}






