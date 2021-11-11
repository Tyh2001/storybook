# 内置函数

## 数学对象

1.  `Math.max()` 获取最大值

```js
console.log(Math.max(12, 3, 56))
// 56
```

2. `Math.min()` 获取最小值

```js
console.log(Math.min(12, 3, 56))
// 3
```

3. `Math.ceil()`向上取整

```js
console.log(Math.ceil(3.5655))
// 4
```

4. `Math.floor()`向下取整

```js
console.log(Math.floor(3.5655))
// 3
```

5. `Math.random()` 随机数

```js
console.log(Math.random())
```

> 随机数是 >=0  ~ <1 之间是数

- 要获取一个  1 ~ x 的一个整数随机数，可以通过下面公式直接获取

```js
// 这里想获取一个 1 ~ 10 的随机数
console.log(Math.ceil(Math.random() * 10))
```
公式为：`Math.ceil(Math.random() * 最大值)`


- 要获取一个区间的随机数，可以通过下面公式直接获取

```js
// 这里想取到 2 - 5 直接是随机数
console.log(2 + Math.ceil(Math.random() * (5 - 2)))
```

公式为：`最小值 + Math.ceil(Math.random() * (最大值 - 最小值))`

那么通过上面的随机数方法，我们可以做一个简易的点名系统

```html
<p class="name"></p>
<script>
    const arr = ["小张", "小李", "小明", "小红", "小强", "小周"]

    const name = document.querySelector(".name")

    const length = arr.length // 获取数组的长度
    const num = Math.floor(Math.random() * length)
    name.innerHTML = arr[num]
</script>
```



## 日期对象

可以通过 `new Date()` 获取当前时间

```js
const date = new Date()
console.log(date)
```



- `Date.now()` 获取当前时间戳

```js
console.log(Date.now())
```

通过时间戳，我们可以计算程序执行所用的时间，下面以 for 循环举例

```js
const a = Date.now() // 开始执行 for 循环的时间戳
for (i = 0; i < 22222220; i++) { } // 执行 for 循环
const b = Date.now() // 结束 for 循环的时间戳
console.log(b - a) // 两个时间戳相减 = for 循环所用的时间(毫秒)
```



- 获取指定日期的时间戳 `getTime()`

```js
const time = new Date("2000-10-1 12:23:11") // 获取目标时间
console.log(time.getTime()) // 使用 getTime() 方法将时间转换为时间戳
// 下面三种方法也可以转换
console.log(time * 1)
console.log(Number(time))
console.log(time.valueOf())
```

> 以上转换的4种方法都可以使用



- 将时间戳转换为时间对象

```js
const time = new Date("2000-10-1 12:23:11")
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
function dateFormat (date, format = 'YYYY-MM-DD HH:mm:ss') {
  // 定义对象处理转换时间的格式
  const config = {
    'YYYY': date.getFullYear(),
    'MM': date.getMonth() + 1,
    'DD': date.getDate(),
    'HH': date.getHours(),
    'mm': date.getMinutes(),
    'ss': date.getMinutes()
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
