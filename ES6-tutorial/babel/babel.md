# Babel

Babel 是一个广泛使用的 ES6 转码器，可以将 ES6 代码转为 ES5 代码，从而在老版本的浏览器执行。


### 安装Babel
```
npm install --save-dev @babel/core
```


### 配置文件 .babelrc

```javascript
// 设置转码规则和插件
{
  "presets": [],
  "plugins": []
}
```

#### presets
presets 字段设定转码规则，官方提供以下的规则集
```
# 最新转码规则
$ npm install --save-dev @babel/preset-env

# react 转码规则
$ npm install --save-dev @babel/preset-react
```


### Babel 命令行

#### 安装
```
npm install --save-dev @babel/cli
```

#### 用法
```
# 转码结果输出到标准输出
npx babel example.js

# 转码结果写入一个文件
# --out-file 或 -o 参数指定输出文件
npx babel example.js --out-file compiled.js
# 或者
$ npx babel example.js -o compiled.js

# 整个目录转码
# --out-dir 或 -d 参数指定输出目录
npx babel src --out-dir lib
# 或者
npx babel src -d lib

# -s 参数生成source map文件
npx babel src -d lib -s
```


### babel-node

#### 安装
```
npm install --save-dev @babel/node
```

#### 用法
```
# 进入 REPL 环境
npx babel-node
# 直接运行 ES6 脚本
npx babel-node example.js
```



### @babel/register 

#### 安装
```
npm install --save-dev @babel/register
```

#### 用法
```
// 必须首先加载 @babel/register，就不需要手动对 example.js 转码了
// 实时转码，只适合在开发环境使用
require('@babel/register');
require('./example.js');
```


### polyfill
Babel 默认只转换新的 JavaScript 句法（syntax），而不转换新的 API，比如 Iterator、Generator、Set、Map、Proxy、Reflect、Symbol、Promise 等全局对象，以及一些定义在全局对象上的方法（比如Object.assign）都不会转码。可以使用core-js和regenerator-runtime(后者提供generator函数的转码)，为当前环境提供一个垫片。
```
npm install --save-dev core-js regenerator-runtime
# 引入包
require('core-js');
require('regenerator-runtime/runtime);
```






















