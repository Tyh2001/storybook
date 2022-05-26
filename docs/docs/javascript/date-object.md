# 日期对象

## new Date()

可以通过 `new Date()` 获取当前时间

```js
const date = new Date()
console.log(date)
```

## getTime()

获取指定日期的时间戳 `getTime()`

```js
const time = new Date('2000-10-1 12:23:11') // 获取目标时间
console.log(time.getTime()) // 使用 getTime() 方法将时间转换为时间戳
// 下面三种方法也可以转换
console.log(time * 1)
console.log(Number(time))
console.log(time.valueOf())
```

> 以上转换的 4 种方法都可以使用

- 将时间戳转换为时间对象

```js
const time = new Date('2000-10-1 12:23:11')
const timeList = time.getTime()
console.log(new Date(timeList))
```

将时间戳转换为时间对象的方法也很简单，只有 `new` 一个新的日期对象，再把时间戳扔到括号里面即可

> new Date(时间戳)

- 获取当前时间的年月日时分秒

```js
const time = new Date() // 获取当前时间
const year = time.getFullYear() // 获取年份
const month = time.getMonth() + 1 // 获取月份
const day = time.getDate() // 获取日
const hour = time.getHours() // 获取小时
const minute = time.getMinutes() // 获取分钟
const res = `${year}-${month}-${day} ${hour}:${minute}`
console.log(res)
```

这么的写法比较麻烦，我们可以通过封装函数的方法，来实现上面代码段的重复利用

```js
// 获取到当前的时间
const time = new Date()

// 封装函数
// date 是当前的时间
// format 处理转换时间的格式
function dateFormat(date, format = 'YYYY-MM-DD HH:mm:ss') {
  // 定义对象处理转换时间的格式
  const config = {
    YYYY: date.getFullYear(),
    MM: date.getMonth() + 1,
    DD: date.getDate(),
    HH: date.getHours(),
    mm: date.getMinutes(),
    ss: date.getMinutes()
  }
  // 用 for in 遍历出对象中的每一项 并使用 replace 替换
  for (const key in config) {
    format = format.replace(key, config[key])
  }
  return format
}

console.log(dateFormat(time, 'YYYY年-MM月-DD日'))
// 2021年-4月-3日

console.log(dateFormat(time, 'YYYY^MM^DD HH^mm^ss'))
// 2021^4^3 20^41^41
```

## toLocaleDateString()

`toLocaleDateString()` 方法可将 Date 对象的时间转换为字符串

```js
const date = new Date()
const res = date.toLocaleDateString()
console.log(res)
// 2021/4/23
```

## Date.now()

`Date.now()` 获取当前时间戳

```js
console.log(Date.now())
```

通过时间戳，我们可以计算程序执行所用的时间，下面以 for 循环举例

```js
const a = Date.now() // 开始执行 for 循环的时间戳
for (i = 0; i < 22222220; i++) {} // 执行 for 循环
const b = Date.now() // 结束 for 循环的时间戳
console.log(b - a) // 两个时间戳相减 = for 循环所用的时间(毫秒)
```
