# const

const 声明一个只读的常量。一旦声明，常量的值就不能改变，必须立即初始化。
```
const PI = 3.1415
console.log('PI = ', PI)
PI = 3.14
// TypeError: Assignment to constant variable.
```


只在声明所在的块级作用域内有效。
```
if (true) {
  const MAX = 5
}
console.log('MAX = ', MAX)
// ReferenceError: MAX is not defined
```


const，并不是变量的值不得改动，而是变量指向的那个内存地址所保存的数据不得改动。对于简单类型的数据（数值、字符串、布尔值），值就保存在变量指向的那个内存地址，因此等同于常量。但对于复合类型的数据（主要是对象和数组），变量指向的内存地址，保存的只是一个指向实际数据的指针，const只能保证这个指针是固定的（即总是指向另一个固定的地址），至于它指向的数据结构是不是可变的，就完全不能控制了。















