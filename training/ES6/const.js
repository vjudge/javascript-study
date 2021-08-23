
const PI = 3.1415
console.log('PI = ', PI)
// PI = 3.14
// // TypeError: Assignment to constant variable.



// 作用域
if (true) {
  const MAX = 5
}
// console.log('MAX = ', MAX)
// // ReferenceError: MAX is not defined



// // 暂时性死区
// if (true) {
//   console.log(MAX)
//   // ReferenceError: MAX is not defined
//   const MAX = 5
// }



// // 不能重复定义
// var str = 'abc'
// let a = 1
// 
// // 以下两行都会报错
// const str = 'asd'
// const a = 2



// // 变量的本质
// const people = {};
// people.name = 'Rose'
// people = {}
// // TypeError: Assignment to constant variable.


// 冻结对象
const people = Object.freeze({})
people.name = 'Rose'
// 严格模式时，该行会报错















