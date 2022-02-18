# 算法

## 1. 二分查找

```js
/**
 * https://leetcode-cn.com/problems/binary-search/
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let firstIndex = 0,
    lastIndex = nums.length - 1

  while (firstIndex <= lastIndex) {
    if (nums[middleIndex] === target) {
      return middleIndex
    } else if (nums[middleIndex] > target) {
      lastIndex = middleIndex - 1
    } else {
      firstIndex = middleIndex + 1
    }
  }
  return -1
}
```

## 2.搜索插入位置

```js
/**
 * https://leetcode-cn.com/problems/search-insert-position/
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var searchInsert = function (nums, target) {
  let firstIndex = 0,
    lastIndex = nums.length - 1,
    res = nums.length

  while (firstIndex <= lastIndex) {
    const middleIndex = Math.floor((firstIndex + lastIndex) / 2)
    if (nums[middleIndex] === target) {
      return middleIndex
    } else if (nums[middleIndex] > target) {
      res = middleIndex
      lastIndex = middleIndex - 1
    } else {
      firstIndex = middleIndex + 1
    }
  }
  return res
}
```

## 3.两数之和

```js
/**
 * https://leetcode-cn.com/problems/two-sum/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let keys = {}
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i]
    let diff = target - num
    if (num in keys) {
      return [keys[num], i]
    }
    keys[diff] = i
  }
}
```

## 4.回文数

```js
/**
 * https://leetcode-cn.com/problems/palindrome-number/
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  const str = new String(x).split('')
  const res = []
  for (let i = 0; i < str.length; i++) {
    res[i] = str[str.length - 1 - i]
  }
  return res.join('') == x
}
```

## 5.罗马数字转整数

```js
/**
 * https://leetcode-cn.com/problems/roman-to-integer/
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const list = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }
  const arr = []
  let result = 0

  for (let i = 0; i < s.length; i++) {
    const tmp = list[s[i]]
    if (arr[arr.length - 1] < tmp) {
      result += tmp - arr.pop()
    } else {
      arr.push(tmp)
    }
  }
  const res = arr.reduce((pre, cur) => {
    return pre + cur
  }, 0)
  return res + result
}
```
