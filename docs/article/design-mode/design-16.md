# 适配器模式

## 了解适配器

下面以一个例子了解适配器模式，通过一个渲染地图的例子

```js
const googleMap = {
  show() {
    console.log('渲染谷歌地图')
  }
}

const baiduMap = {
  show() {
    console.log('渲染百度地图')
  }
}

function renderMap(target) {
  if (target.show instanceof Function) {
    target.show()
  }
}

renderMap(googleMap) // 渲染谷歌地图
renderMap(baiduMap) // 渲染百度地图
```

上面例子中，每个接口都提供了一致的 `show` 方法，但是第三方的接口并不在我们控制的方位只能，加入接口不是 `show`，而是 `display` 呢？下面解决方案：

```js
const googleMap = {
  show() {
    console.log('渲染谷歌地图')
  }
}

const baiduMap = {
  display() {
    console.log('渲染百度地图')
  }
}

// 适配器接口
const baiduMapInterface = {
  show() {
    return baiduMap.display()
  }
}

function renderMap(target) {
  if (target.show instanceof Function) {
    target.show()
  }
}

renderMap(googleMap) // 渲染谷歌地图
renderMap(baiduMapInterface) // 渲染百度地图
```

## 第二个例子

接下来看下第二个例子，比如我们需要渲染地图，目前从第三方的资源中获取了城市和对应的 `id`，是一个数组中包含了对象，代码如下：

```js
function getList() {
  const res = [
    { name: 'tianjin', id: 1 },
    { name: 'hangzhou', id: 2 },
    { name: 'fujian', id: 3 }
  ]
  return res
}

function render(fn) {
  document.write(JSON.stringify(fn()))
}

render(getList)
```

但是后来因为数据不全，我们又在第三方找到了一些其他的数据，但是数据结构不同，新的数据结构为：

```js
const newList = {
  guangzhou: 4,
  beijing: 5
}
```

接下来又需要一个适配器来解决了：

```js
const newList = {
  guangzhou: 4,
  beijing: 5
}

function getList() {
  const res = [
    { name: 'tianjin', id: 1 },
    { name: 'hangzhou', id: 2 },
    { name: 'fujian', id: 3 }
  ]
  return res
}

// 新增适配器接口
function newListInterface(list) {
  const arr = [...getList()]

  for (const key in list) {
    const obj = {}
    obj.name = key
    obj.id = list[key]
    arr.push(obj)
  }
  return arr
}

function render(fn) {
  document.write(JSON.stringify(fn))
}

render(newListInterface(newList))
```
