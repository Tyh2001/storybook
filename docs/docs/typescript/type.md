# 数据类型

## number

```ts
const num: number = 12
```

## string

```ts
const text: string = 'hello'
```

但是有些情况下，类型不一定是 `string`，也可以是指定的某些值

```ts
let admin: '张三' | '小明'
admin = '张三'

console.log(admin)
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

type 可以合并多个

```ts
type Name = {
  name: string
}
type Age = {
  age: number
}

type User = Name & Age

const user = {
  name: '张三',
  age: 12
}
```

或者可以指定一个类型满足即可

```ts
type Name = {
  name: string
}
type Age = {
  age: number
}

type User = Name | Age

const user = {
  name: '张三'
}
```

## 元组

元组用于定义一个已知数量和数据类型的数组

```ts
const arr: [number, string, number] = [1, '123', 3]
```

## enum 枚举

可以使用 `enum` 去定义枚举类型，这样可以把类型限制在指定的场景之内

```ts
enum isType {
  type1 = '男',
  type2 = '女'
}

const res: isType = isType.type1
console.log(res)
```

## as 断言

普通断言，规定类型

```ts
let res = 123 as number
res = 999
console.log(res)
```

`const` 断言

比如使用 `let` 的时候声明一个变量，只要是字符串就可以随便修改

```ts
let a = '哈哈哈'
a = '你好'
console.log(a) // 你好
```

但是使用了 `const` 断言情况如下

```ts
let a = 'hello' as const
```

这样使用 const 断言之后，`a` 就不能随意赋值了，就只能赋值为 `hello`

也就相当于下面写法，`a` 只能是两个值其中的一个

```ts
const a: 'hello' | 'world' = 'hello'
```

断言数组

断言数组之后就会被转换为元组

```ts
const arr = ['123', 89, true] as const
```

定义的方式也可以像下面这样

```ts
const arr = <const>['123', 89, true]
```

> as const 就是根据具体的值转换类型

如果明确某个变量是存在的，可以使用 `!` 来表示非空断言，下面两种写法相等

```ts
const el1: HTMLDivElement = document.querySelector('.app') as const

const el: HTMLDivElement = document.querySelector('.app')!
```

## generics 泛型

泛型代表的是不确定的类型，宽泛的类型，比如下面例子中：

```ts
function msg(num) {
  return num
}

console.log(msg('hello'))
console.log(msg(true))
```

上面代码中，无论函数传入什么类型，都会直接返回指定的类型，但是这些类型都是 `any`，大多数时候我们并不希望是 `any` 所以这里就需要使用到了泛型。

所以就需要传递不同的参数的时候，动态的传递指定的类型。类型也是可以类型函数接收参数一样：

```ts
function msg<type>(num: type): type {
  return num
}

console.log(msg<string>('hello'))
console.log(msg<boolean>(true))
```

## 类型的继承

使用 `extends` 可以继承一个属性

```ts
// 这里让 t 继承一个 { length: number }
function getLength<t extends { length: number }>(target: t): number {
  // 类型 t 里面没用任何规范 可能不存在 length 属性
  return target.length
}

console.log(getLength('setting'))
console.log(getLength([1, 2, 3, 4]))
```

或者也可以继承一个有长度的类型，比如 `string`，或者联合类型

```ts
function getLength<t extends string>(target: t): number {
  return target.length
}

function getLength2<t2 extends string | any[]>(target: t2): number {
  return target.length
}
```

## interface

- 在类中使用

定义一个类型的接口，比如下面类的定义，使用 `implements` 定义接口

```ts
interface AdminInterface {
  name: string
  age: number
}

class Admin implements AdminInterface {
  name: string = '张三'
  age: number = 12
}
```

如果类中没有定义接口中约束的数据的话，就会报错

- 在对象中使用

```ts
interface UserInterface {
  name: string
  age: number
  sayName(): string
  [key: string]: any
}

const user: UserInterface = {
  name: 'admin',
  age: 12,
  sayName(): string {
    return this.name
  },
  sex: '男'
}
```

- 接口继承

```ts
interface UserName {
  name: string
}
interface UserAge extends UserName {
  age: number
}

const user: UserAge = {
  name: 'admin',
  age: 12
}
```

- 多接口

```ts
interface UserName {
  name: string
}
interface UserAge {
  age: number
}

class Admin implements UserName, UserAge {
  name: string = '张三'
  age: number = 12
}
```

- 定义数组

下面使用枚举和接口同时限定

```ts
enum SexType {
  GIRL,
  BOY
}

interface User {
  name: string
  age: Number
  sex: SexType
}

const user1: User = { name: '1', age: 12, sex: SexType.BOY }
const user2: User = { name: '211', age: 122, sex: SexType.GIRL }

const arr: User[] = [user1, user2]
```

- 定义函数

```ts
interface Pay {
  (num: number): boolean
}

const pay: Pay = (num: number): boolean => true
```

- 接口声明合并

接口重复声明最终会合并

```ts
interface User {
  num: number
}
interface User {
  name: string
}

const pay: User = {
  num: 123,
  name: '张三'
}
```
