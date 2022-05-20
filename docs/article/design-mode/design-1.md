# 高阶函数

## 前言

高阶函数至少要满足下面条件之一的

- 函数可以作为参数被传递
- 函数可以作为返回值输出

## 回调函数

下面例子中使用回调函数给新建的每个 `div` 设置样式，如果全部都在一个函数里，显然是不合理的，这样可以将创建 `div` 和设置样式的两个逻辑进行分离

其实设置样式可能是用户发起的，所以这样就完美了进行了分离

```js
function renderDiv(callback) {
  for (let i = 0; i < 10; i++) {
    const div = document.createElement('div')
    div.innerText = i
    document.body.appendChild(div)
    if (typeof callback === 'function') {
      callback(div)
    }
  }
}

renderDiv((node) => {
  node.style.color = 'red'
})
```
