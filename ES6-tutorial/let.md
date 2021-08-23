# let

声明变量，所声明的变量，只在 let 命令所在的代码块内有效。
```
{
  let a = 1
  var b = 2
}

// a // ReferenceError: a is not defined.
b // 1
```

let所声明的变量一定要在声明后使用，否则报错。
```
console.log(a) // 报错：ReferenceError
let a = 2
```


### 暂时性死区 (temporal dead zone，简称 TDZ)
ES6 明确规定，如果区块中存在 let 和 const 命令，这个区块对这些命令声明的变量，从一开始就形成了封闭作用域。凡是在声明之前就使用这些变量，就会报错。这在语法上，称为“暂时性死区”（temporal dead zone，简称 TDZ）。
```
var a = 123

if (true) {
  a = 'abc' // ReferenceError
  let a
}
```


### 不允许重复声明
```
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
```













