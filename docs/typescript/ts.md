# TypeScript 基础

## 数据类型

### 基本类型

TypeScript 中最基本的数据类型包括布尔、数字、字符串、null、undefined

```ts
const a: number = 123
const b: string = '这是一段文字'
const c: null = null
const d: boolean = false
const e: undefined = undefined
```

### 数组

定于数组分为数字数组和字符串数组，分别使用 `string[]`和`number[]` 来定义

```ts
const numberArr: number[] = [1, 2, 3, 4]
const stringArr: string[] = ['1', '2', '3']
```

### 元组

元组用于定义一个已知数量和数据类型的数组

```ts
const arr: [number, string, number] = [1, '123', 3]
```

### any 任意

当不确定某个变量是什么类型时，可以使用 `any` 作为这个变量的类型。你可以用 `any` 标记任何属性，可以修改任何数据，访问任何方法也不会报错。也就是说，在 TypeScript 中，当你把变量的类型标记为 any 后，这个变量的使用就和 JavaScript 没啥区别了，错误只会在浏览器里运行的时候才会提示，但是大多数并不建议这么做

```ts
let zz: any = 123
zz = '121'
```

### enum 枚举

可以使用 `enum` 去定义枚举类型，这样可以把类型限制在指定的场景之内

```ts
enum isType {
  type1 = '男',
  type2 = '女',
}

const res: isType = isType.type1
console.log(res)
```

### 类型联合

可以使用 `|` 来实现类型联合，可以规定一个变量可以赋值为多个类型

```ts
let course1 : string|number = '玩转vue 3'
course1 = 1
course1 = true // 报错
```

### type

`type` 可以规定一个变量可以赋哪些值

```ts
type courseScore = '好' | '非常好' | '嘎嘎好'
let score1 :courseScore = '好'
let score2 :courseScore = '一般好' // 报错
```

### interface

通过` interface` 可以定义对象的类型限制

```ts
// 定义课程对象类型限制
interface curriculum {
  name: string, // 名称为字符串
  price: number[], // 价格为数字的数组
  audience: string, // 受众是字符串
  avatar?: string | boolean, // 头像通过? 设置可选属性是字符串或者布尔值
  readonly url: string // 课程地址是一个只读的字符串，不能修改
}

let vueCourse: curriculum = {
  name: '玩转Vue 3全家桶',
  price: [59],
  audience: '学生',
  avatar: false,
  url: "time.geekbang.org"
}

console.log(vueCourse)
```

### 函数

其实函数的定义，参数和返回值本质上也是变量的概念，都可以进行类型的定义。下面的代码中我们定义了参数 x 和 y 是数字，返回值也是数字的 add 函数，定义好参数和返回值类型

```ts
function add(x: number, y: number): number {
  return x + y
}
add(1, 2)
```





