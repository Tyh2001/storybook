# 数据类型

## number

```ts
const num: number = 12
```

## string

```ts
const text: string = 'hello'
```

## boolean

```ts
const bol: boolean = true
```

## object

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

## array

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

## any

可以用 `any` 标记任何类型

```js
let num: any

num = 1
num = true
num = '123'
```

## unknown

`unknown` 为不知道是什么类型，但是其实是有类型的

```ts
let num: unknown // 一个变成设置 unknown 类型代表不确定
num = '这是一个文字' // 给变量赋值了字符串，现在知道类型了

let res: string = num as string // 给 res 赋值 num 并通过关键字 as 告诉赋值的是什么类型

console.log(res) // 这是一个文字
```

`unknown` 在有些时候还是很有意思的，比如在想将一个字符串赋值给一个数字的时候，这显然是不可以的，那么可以先使用 `as` 关键字赋值为 `unknown` 类型，再使用 `as` 转换为像要的类型

```ts
let num: string = '1213'

let res: number = num as unknown as number

console.log(res) // 1213
```

> 尽量少使用 any 类型

## void

`void` 类型也就是 `undefined` 类型

```ts
let v1: void = undefined
```

比如一个函数，可能返回字符串，也有可能不返回值

```ts
function fun(): string | void {}
```

如果是 `void` 类型返回值的函数返回值也就是 `undefined`

## never

`never` 和 `void` 不同，`never` 是什么结果都没有，比如下面函数就是什么结果都没有

```ts
function fun(): never {
  throw new Error('err')
}
```

## null

```ts
const n: null = null
```

## undefined

```ts
const n: undefined = undefined
```

## 多类型

因为一个值可能会存在多种类型的时候，所以不能直接将某个值限定为一个类型

```ts
let text: number | string
text = '123'
text = 6666
```

## Function

`Function` 类型的 `F` 必须要大写

函数参数也是可以限制类型的

如果某个参数的可选的，可以添加 `?` 标识符

```ts
function fun(a: number, b: number, c?: number) {
  return a + b
}
```

也可以定于函数的返回值类型

```ts
const add = (a: number, b: number = 12): string => {
  return `幸运数字是${a + b}`
}

const res: string = add(10)
console.log(res)
```

如果函数没有返回值，简直将返回值定义为 `void` 类型，方便一眼就可以看出来

```ts
function fun(): void {
  console.log('hello')
}
```

## type

`type` 关键字可以将反复使用的类型以相当于定义变量的形式反复使用

比如下面两个函数都接受一个对象，是两个类型相同的对象，就可以使用 `type` 定义的类型进行约束

```ts
type userType = { name: String; age: number }

function add(user: userType): void {}
function change(user: userType): void {}
```

## 元组

元组用于定义一个已知数量和数据类型的数组

```ts
const arr: [number, string, number] = [1, '123', 3]
```
