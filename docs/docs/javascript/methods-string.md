# 字符串方法

## toString()

转换为字符串

```js
const a = 12
console.log(a.toString()) // '12'
```

## concat()

字符串拼接

```js
const a = '1121'
const b = '哈哈哈'

const c = a.concat(b)
console.log(c) // 1121哈哈哈
```

## slice()

字符串截取，可接收两个参数

- 字符串开始的位置
- 字符串结束的位置

```js
const a = 'hello world'
console.log(a.slice(2)) // llo world
console.log(a.slice(2, 5)) // llo
```

## substring()

字符串截取，可接收两个参数

- 字符串开始的位置
- 字符串结束的位置

```js
const a = 'hello world'
console.log(a.substring(2)) // llo world
console.log(a.substring(2, 5)) // llo
```

## substr()

字符串截取，可接收两个参数

- 字符串开始的位置
- 截取长度

```js
const a = 'hello world'
console.log(a.substr(3)) // hello world
console.log(a.substr(3, 7)) // lo worl
```

## startsWith()

检测一个字符串是否包含某个参数，它检查的是开始于索引 0 的匹配项，返回布尔值，可接收两个参数

- 要搜索的字符串
- 字符串开始的位置

```js
const a = 'hello world'
console.log(a.startsWith('hel')) // true
console.log(a.startsWith('llo')) // false
```

## startsWith()

检测一个字符串是否包含某个参数，它检查的是开始于索引末尾的匹配项，返回布尔值，可接收两个参数

- 要搜索的字符串
- 字符串开始的位置

```js
const a = 'hello world'
console.log(a.endsWith('rld')) // true
console.log(a.endsWith('llo')) // false
```

## includes()

可以在整个字符串中进行搜索

```js
const a = 'hello world'
console.log(a.includes('rld')) // true
console.log(a.includes('llo')) // true
```

## trim()

可以删除字符串前后的空格

```js
const a = ' hello world '
console.log(a.trim()) // hello world
```

## repeat()

用于字符串复制，接受一个参数

- 要复制的次数

```js
const a = 'hello world'
console.log(a.repeat(2)) // hello worldhello world
```

## padStart()

可以复制字符串，给出指定的长度进行填充，默认在字符串`前面`填充空格，接收两个参数

- 指定长度
- 填充字符串

```js
const a = 'hello'
console.log(a.padStart(10)) //      hello
console.log(a.padStart(10, '-')) // -----hello
```

## padStart()

可以复制字符串，给出指定的长度进行填充，默认在字符串`后面`填充空格，接收两个参数

- 指定长度
- 填充字符串

```js
const a = 'hello'
console.log(a.padEnd(10)) // hello
console.log(a.padEnd(10, '-')) // hello-----
```

## match()

可以匹配字符串，接收一个正则表达式的参数进行匹配

```js
const a = 'hello'
console.log(a.match(/.lo/)) // ['llo', index: 2, input: 'hello', groups: undefined]
```

## localeCompare()

可以用于比较两个字符串，会返回 `-1、0、1` 等值

- 要比较的字符串和原始字符串相等，返回 0
- 按照字母表检测，如果参数字符串的第一个字母在原始字符串之前，就返回正值
- 按照字母表检测，如果参数字符串的第一个字母在原始字符串之后，就返回负值
