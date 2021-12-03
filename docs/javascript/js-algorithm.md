# 算法

## 冒泡排序

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
