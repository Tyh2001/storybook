# API

## URL.createObjectURL()

该方法多数用于图片预览

参考文档：[URL.createObjectURL() ](https://developer.mozilla.org/zh-CN/search?q=URL.createObjectURL%28%29)

实例，通过 input 上传图片预览出上传的图片：

```html
<input type="file" accept="image/*" />
<img src="" alt="" />

<script>
  const inp = document.querySelector('input')
  const img = document.querySelector('img')
  inp.onchange = function () {
    const blob = URL.createObjectURL(inp.files[0])
    img.setAttribute('src', blob)
  }
</script>
```
