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
