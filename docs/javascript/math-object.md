# 数学对象

## Math.round()

`Math.round()` 取整，四舍五入

```js
console.log(Math.round(2.4)) // 2
console.log(Math.round(2.5)) // 3
```

## Math.max()

`Math.max()` 获取最大值

```js
console.log(Math.max(12, 3, 56))
// 56
```

## Math.min()

`Math.min()` 获取最小值

```js
console.log(Math.min(12, 3, 56))
// 3
```

## Math.ceil()

`Math.ceil()`向上取整

```js
console.log(Math.ceil(3.5655))
// 4
```

## Math.floor()

`Math.floor()`向下取整

```js
console.log(Math.floor(3.5655))
// 3
```

## Math.random()

`Math.random()` 随机数

```js
console.log(Math.random())
```

> 随机数是 >=0 ~ <1 之间是数

- 要获取一个 1 ~ x 的一个整数随机数，可以通过下面公式直接获取

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
  const arr = ['小张', '小李', '小明', '小红', '小强', '小周']

  const name = document.querySelector('.name')

  const length = arr.length // 获取数组的长度
  const num = Math.floor(Math.random() * length)
  name.innerHTML = arr[num]
</script>
```

## Math.abs()

`Math.abs()` 返回指定数字的绝对值

什么是绝对值？正数的绝对值是它本身，负数的绝对值是去掉负号

```js
console.log(Math.abs(-12)) // 12
console.log(Math.abs(22)) // 22
```

## Math.PI

`Math.PI` 获取圆周率

```js
console.log(Math.PI) // 3.141592653589793
```

## Math.sin / Math.cos

正弦 余弦

## Math.sqrt()

返回一个数的平方根
