# 基础知识

## 基础多态

多态的定义是：`同一操作，作用在不同的对象上面，可以产生不同的解释和不同的执行结果`

比如想要通过一个类，来描述不同动物的叫声，可以使用下面写法：

```js
function makeSound(anima) {
  if (anima instanceof Duck) {
    console.log('嘎嘎嘎')
  } else if (anima instanceof Chicken) {
    console.log('咯咯咯')
  }
}

class Duck {}
class Chicken {}

makeSound(new Duck()) // 嘎嘎嘎
makeSound(new Chicken()) // 咯咯咯
```

但是这里如果后面要新增一个动物的叫声，就需要改变 `makeSound` 函数，修改代码总是危险的，后续如果增加的动物越多，可能会导致 `makeSound` 函数变得巨大。

所以我们要将 `做什么` 和 `谁去做` 分开来，因为动物会叫，这是不变的，但是不同的动物怎么叫是变化的。把不变的部分分离出来，把可变的部分封装起来，这样就可以让我们的程序是一个可生长的状态。

## 封装多态

下面将上面的例子进行封装：

```js
// 通用函数
function makeSound(anima) {
  anima.sound()
}

class Duck {
  sound() {
    console.log('嘎嘎嘎')
  }
}

class Chicken {
  sound() {
    console.log('咯咯咯')
  }
}

makeSound(new Duck()) // 嘎嘎嘎
makeSound(new Chicken()) // 咯咯咯
```

这样，如果后续还需要再新增一个狗的叫声，就直接新增一个 `Dog` 类即可，而不需要去改变原始代码

```js
class Dog {
  sound() {
    console.log('汪汪汪')
  }
}
```
