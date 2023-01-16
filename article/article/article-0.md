# 记事本

## Npm 设置代理

```shell
# 设置代理
npm config set proxy xxxx

# 关闭代理
npm config set strict-ssl false
```

## 文案

季军是赢来的，亚军是输来的！

## 链接记录

[fighting-design 下载量](https://npmtrends.com/fighting-design)
[大师课](https://ke.qq.com/course/5892689#term_id=106109971)

## 判断两个值是否想等

```ts
function hasChanged(x, y) {
  if (x === y) {
    return x === 0 && 1 / x !== 1 / y
  } else {
    return X === X || y === y
  }
}
```

## Npm 发布组织包

```shell
npm publish --access public
```
