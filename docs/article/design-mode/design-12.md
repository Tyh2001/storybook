# 职责链模式

## 定义

职责链模式的定义是：使用多个对象都可以处理请求，而避免请求的发送者和接收者之间的耦合关系，将这些对象连成一条链，并沿着这条链传递请求，直到有一个对象能够处理为止。

## 第一个例子

一个卖手机网站，警告缴纳 500 定金和 200 定金后，200 定金会得到 100 元优惠券，200 定金会得到 50 优惠券。在没用定金的人进入普通购买模式，在库存有限的情况下不一定能买到。

会使用到下面几个字段：

- `code` 订单类型，1 为支付 500 定金用户，2 为支付 200 定金用户，1 代表没用交定金
- `pay` 是否支付定金，如果下了订单但是并没有缴纳的则按照没有缴纳处理
- `stock` 库存数量，交付了定金不受限制

未使用职责链模式写法；

```js
function order(code, pay, stock) {
  if (code === 1) {
    // 500 定金模式
    if (pay) {
      // 已支付
      console.log('500 定金已经缴纳，得到 100 优惠券')
    } else {
      if (stock > 0) {
        // 普通购买，还有库存
        console.log('普通购买，无优惠券')
      } else {
        console.log('手机库存不足')
      }
    }
  } else if (code === 2) {
    // 200 定金模式
    if (pay) {
      // 已支付
      console.log('200 定金已经缴纳，得到 50 优惠券')
    } else {
      if (stock > 0) {
        // 普通购买，还有库存
        console.log('普通购买，无优惠券')
      } else {
        console.log('手机库存不足')
      }
    }
  } else if (code === 3) {
    // 没有定金模式
    if (stock > 0) {
      // 普通购买，还有库存
      console.log('普通购买，无优惠券')
    } else {
      console.log('手机库存不足')
    }
  }
}

order(1, true, 500) // 500 定金已经缴纳，得到 100 优惠券
```

使用职责链模式写法：

```js
function order500(code, pay, stock) {
  if (code === 1 && pay) {
    // 500 定金模式
    console.log('500 定金已经缴纳，得到 100 优惠券')
  } else {
    order200(code, pay, stock)
  }
}

function order200(code, pay, stock) {
  if (code === 2 && pay) {
    console.log('200 定金已经缴纳，得到 50 优惠券')
  } else {
    orderNormal(code, pay, stock)
  }
}

function orderNormal(code, pay, stock) {
  if (stock > 0) {
    console.log('普通购买，无优惠券')
  } else {
    console.log('手机库存不足')
  }
}

order500(1, true, 500) // 500 定金已经缴纳，得到 100 优惠券
```

## 灵活可拆分职责链
