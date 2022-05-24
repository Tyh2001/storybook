# 策略模式

## 策略模式定义

策略模式的定义是：`定义一些列的算法，把它们一个个封装起来，并且可以使它们可以相互替换`。

## 使用策略模式计算奖金

比如年终分发给员工的奖金根据评价等级来定：S 级可以得到 4 倍奖金，A 级可以拿 3 倍奖金，B 级可以拿 2 倍奖金

那么我们定义一个基本的函数来计算

```js
function computed(grade, bonus) {
  if (grade === 'S') {
    return bonus * 4
  }
  if (grade === 'A') {
    return bonus * 3
  }
  if (grade === 'B') {
    return bonus * 2
  }
}

console.log(computed('S', 3000)) // 12000
console.log(computed('A', 2000)) // 6000
```

但是这个函数看起来比较挫，内部包含了很多的 `if else` 语句，而且如果后期新增了一个其它的等级，还需要修改原函数，这个对于编写代码来说是非常不友好的

## 使用策略模式封装

接下来将上面的例子使用策略模式进行封装，会议一下策略模式的定义：

`定义一些列的算法，把它们一个个封装起来，并且可以使它们可以相互替换`

```js
class GradeS {
  computed(bonus) {
    return bonus * 4
  }
}

class GradeA {
  computed(bonus) {
    return bonus * 3
  }
}

class GradeB {
  computed(bonus) {
    return bonus * 2
  }
}

class ComputedBonus {
  constructor(salary, strategy) {
    this.salary = salary
    this.strategy = strategy
  }
  getBonus() {
    return this.strategy.computed(this.salary)
  }
}

const computedBonus1 = new ComputedBonus(3000, new GradeS())
const computedBonus2 = new ComputedBonus(2000, new GradeA())

console.log(computedBonus1.getBonus()) // 12000
console.log(computedBonus2.getBonus()) // 6000
```
