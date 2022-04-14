# 其它

## 生成 ts 配置文件

```shell
tsc --init
```

## 在 ts 中定义类

```ts
class User {
  name: string
  age: number
  constructor(n: string, a: number) {
    this.name = n
    this.age = a
  }
  info(): string {
    return `${this.name} 的年龄是 ${this.age}`
  }
}

const user: User = new User('张三', 12)

console.log(user.info())
```

## public 修饰符

`public` 修饰符可以定义某些变量是公开的，那上面的例子来举例：

```ts
class User {
  public name: string
  public age: number
  constructor(n: string, a: number) {
    this.name = n
    this.age = a
  }
  public info(): string {
    return `${this.name} 的年龄是 ${this.age}`
  }
}

const user: User = new User('张三', 12)

console.log(user.name) // 张三
console.log(user.age) // 12
console.log(user.info) // [Function: info]
```

## protected 修饰符

`protected` 是受保护的数据类型，就只能在类的内部进行使用

```ts
class User {
  protected name: string
  protected age: number
  constructor(n: string, a: number) {
    this.name = n
    this.age = a
  }
  protected info(): string {
    return `${this.name} 的年龄是 ${this.age}`
  }
}
```
