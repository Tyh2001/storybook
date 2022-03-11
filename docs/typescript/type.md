# 数据类型

## 数字

```ts
const num: number = 12
```

## 字符串

```ts
const text: string = 'hello'
```

## 布尔

```ts
const bol: boolean = true
```

## 对象

```js
const obj: object = {}
```

那么使用下面方式可以限定对象中每个属性的类型

```ts
let obj: { name: string; age: number }
obj = { name: 'admin', age: 12 }
```

如果有些参数是可选的，那么可以使用 `?` 来标识

```ts
let obj: { name: string; age: number; url?: string }
obj = { name: 'admin', age: 12 }
```

## 数组

数字或字符串的数组

```ts
const numArr: number[] = [1, 2, 3, 4]
const strArr: string[] = ['1', '2', '3']
```

多类型数组

```ts
const arr: (string | number | object)[] = ['12121', 121, {}]
```

数组还有另一种编写的格式

```ts
const arr: Array<string | number> = ['1', '2']
```

## 多类型

因为一个值可能会存在多种类型的时候，所以不能直接将某个值限定为一个类型

```ts
let text: number | string
text = '123'
text = 6666
```
