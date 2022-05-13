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

`protected` 是受保护的数据类型，就只能在类的内部进行使用，在类的外部不能进行方法。

但是可以通过类的继承进行访问

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

// console.log(user.name) 不能访问
```

## private

`private` 修饰符仅限于当前构造函数使用，就算是继承的类也不能进行使用

```ts
class User {
  private name: string
  constructor(n: string) {
    this.name = n
  }
}

class Admin extends User {
  constructor(name) {
    super(name)
    // console.log(this.name) // 不能访问
  }
}
```

## readonly

`readonly` 修饰的熟悉是不能更改的，也就是说这个熟悉是只读的

```ts
class Axios {
  readonly url: string = 'www.baidu.con'
}

const axios = new Axios()
console.log(axios.url)

// axios.url = 'http://localhost' // 不能进行更改
```

但也不一定是绝对不能更改的，比如下面例子，类在初始化的时候，也是可以进行更改的

```ts
class Axios {
  readonly url: string = 'www.baidu.con'
  public constructor(url) {
    this.url = url
  }
}

const axios = new Axios('github.com')
console.log(axios.url)
```

## static

`static` 方法可以定义静态熟悉和方法，只能在类中进行访问

和原生是一样的

```ts
class User {
  static url: string = 'baidu.com'
}

const user = new User()

// console.log(user.url) // 获取不到

console.log(User.url)
```

## 单例模式

单利模式中，希望无论调用多少次的构造函数，它只执行一次，这样可以节约资源

```ts
class Axios {
  private static instance: Axios | null = null
  private constructor() {}

  static mark() {
    if (Axios.instance === null) {
      console.log('创建实例')

      Axios.instance = new Axios()
    }
    return Axios.instance
  }
}

Axios.mark()
Axios.mark()
Axios.mark()
Axios.mark()
Axios.mark()
// 创建实例
```

## get 和 set

```ts
class Article {
  private _article: any[] = []

  public get article(): any[] {
    return this._article
  }

  public set article(list: any[]) {
    this._article = list
  }
}

const art = new Article()
console.log(art.article)

art.article = [{ title: 'hello', name: 'http权威指南' }]
console.log(art.article)
```
