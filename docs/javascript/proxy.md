# proxy 代理

## 创建空代理

使用 `Proxy()` 构造函数可以创建一个空代理，它需要接收两个参数：

- 需要代理的目标对象
- 处理程序对象

```js
const foo = {
  id: 123,
}
const proxy = new Proxy(foo, {})

// id 会得到同一个值
console.log(proxy.id) // 123
console.log(foo.id) // 123

// 重新赋值也会共同反映到两个对象上
foo.id = 666
console.log(proxy.id) // 666
console.log(foo.id) // 666

proxy.id = 987
console.log(proxy.id) // 987
console.log(foo.id) // 987
```

## 定义捕获器

当每次在代理对象上进行操作时，会首先触发捕获器函数，从而拦截或修改相应的行为。

下面定义了一个 `get` 捕获器，当调用 `get()` 的时候触发

```js
const foo = {
  id: 123,
}
const proxy = new Proxy(foo, {
  get() {
    return 'hello'
  },
})

console.log(foo.id) // 123
console.log(proxy.id) // hello
```

> 注意：捕获器获取函数的函数名必须是 get，其他名称不会触发捕获器效果

## 捕获器参数和反射 API

定义的捕获器函数可以接收三个参数：

- 代理的目标对象
- 要查询的属性
- 代理对象

```js
const foo = {
  id: 123,
}
const proxy = new Proxy(foo, {
  get(targe, property, receiver) {
    console.log(targe) // {id: 123}
    console.log(property) // id
    console.log(receiver) // Proxy {id: 123}
  },
})

console.log(proxy.id)
```
