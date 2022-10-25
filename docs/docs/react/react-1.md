# 基础

## 组件

新建一个函数，首字母大写，即是一个组件

```tsx
const Button = (props) => {
  console.log(props)
  return (
    <>
      <button className="f-button">
        <span>{props.src}</span>
      </button>
    </>
  )
}
```
