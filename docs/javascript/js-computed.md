# 算法

更多算法参考[这里](https://github.com/Tyh2001/leetcode-sprint)

## 冒泡排序

基础算法

```js
const arr = [30, 42, 12, 4, 13, 54, 13, 11]

function BubblingSort(arr) {
  let item
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[i] > arr[j]) {
        item = arr[i]
        arr[i] = arr[j]
        arr[j] = item
      }
    }
  }
  return arr
}

console.log(BubblingSort(arr))
```

ES6 新增 `sort()` 方法

```js
const arr = [30, 42, 12, 4, 13, 54, 13, 11]
const res = arr.sort((a, b) => a - b)
console.log(res)
```

## 求 n 个自然数的和

```js
function add(n) {
  if (n == 1) {
    return 1
  } else {
    return add(n - 1) + n
  }
}

console.log(add(5))
```

## 斐波那契数列

```js
// 斐波那契数列
// 1、1、2、3、5、8、13、21、34
// 计算公式：
// F(0)=0, F(1)=1, F(n)=F(n - 1)+F(n - 2)
function fibonacci(n) {
  if (n <= 2 && n !== 0) return 1
  return fibonacci(n - 1) + fibonacci(n - 2)
}

console.log(fibonacci(6))
```
