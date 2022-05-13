# 别再写循环套循环了

## 前言

在一些根据数组的查找中，可能会很常见类似下面的代码段：

```js
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    // ....
  }
}
```

也就是循环里面再嵌套一个循环，然后里面可能还会有一些其他的逻辑等。

但是你要知道的是：这样的代码只是一种暴力解决的方式，也就是最 low、性能最差的代码逻辑。所以，我写这篇文章的目的就是：**不要再写循环套循环的代码了**。

接下来呢，通过一个算法来介绍一下～

## 两数之和

[两数之和](https://leetcode-cn.com/problems/two-sum/)（two-sum），是 `leetCode` 中算法题库的第一道题，这道题就可以让你告别嵌套循环。

它的解题描述是：

给定一个整数数组 `nums` 和一个整数目标值 `target`，请你在该数组中找出**和为目标值 target** 的那**两个**整数，并返回它们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。

- 示例 1：

```js
输入：nums = [2,7,11,15], target = 9
输出：[0, 1]
解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1]
```

- 示例 2：

```js
输入：nums = [3, 2, 4], target = 6
输出：[1,2]
```

- 示例 3：

```js
输入：nums = [3, 3], target = 6
输出：[0,1]
```

## 暴力解决

通过上述，可以直接通过嵌套循环直接暴露解题：

```js
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] + nums[j] === target && nums[i] !== nums[j]) {
        return [i, j]
      }
    }
  }
}

twoSum([2, 6, 11, 15, 3], 9)
```

上面解题中，直接嵌套循环，无脑解题，虽完成效果，但是需要的是只循环一次。

## 正确算法

- 首先，先定义一个用来存放数据的对象

```js
var twoSum = function (nums, target) {
  const keys = {} // 定义一个存储数据的对象
}
```

- 接下来循环，并获取到数组中每一项的值

```js
var twoSum = function (nums, target) {
  const keys = {}
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i] // 获取到数组中每一项的值
  }
}
```

- 再定义一个常量 `diff` 为我们另一个需要的值，也就是加上当前循环的 `num` 之后等于 `target` 的值，那么 `diff`的定义方式就是：

```js
var twoSum = function (nums, target) {
  const keys = {}
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    const diff = target - num // 定义 diff
    console.log(num, diff) // 打印目前两个常量来看一下
  }
}

twoSum([2, 6, 11, 15, 3], 9)
```

输出日志：

```
2      7
6      3
11    -2
15    -6
3      6
```

根据打印日志就可以推断出：

在 `num = 2` 的时候，就需要在数组中找到 `7`
在 `num = 6` 的时候，就需要在数组中找到 `3`
在 `num = 11` 的时候，就需要在数组中找到 `-2`
在 `num = 15` 的时候，就需要在数组中找到 `-6`
在 `num = 3` 的时候，就需要在数组中找到 `6`

- 所以就需要将每次循环的数字放到我们之前定义好的对象中进行存储

```js
var twoSum = function (nums, target) {
  const keys = {}
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    const diff = target - num
    // 判断 num 是否在数组中
    if (num in keys) {
      // 找到就返回对象中 num 的值，和当前的循环索引
      return [keys[num], i]
    }
    // 如果没有，就用要找的值为键，索引为值，添加到对象中
    keys[diff] = i
  }
}

twoSum([2, 6, 11, 15, 3], 9)
```

这里需要慢慢琢磨一下，因为核心点就在这里

| 循环次数 | num 的值 | diff 的值 | 是否找到 |
| -------- | -------- | --------- | -------- |
| 1        | 2        | 7         | 未找到   |
| 2        | 6        | 3         | 未找到   |
| 3        | 11       | -2        | 未找到   |
| 4        | 15       | -6        | 未找到   |
| 5        | 3        | 7         | 找到 num |

```js
const keys = {
  7: 0, // 第一次插入的值
  3: 1, // 第二次插入的值
  -2: 2, // 第三次插入的值
  -6: 3 // 第四次插入的值
}
```

所以这样，也就是完成了利用一次循环的查找。
