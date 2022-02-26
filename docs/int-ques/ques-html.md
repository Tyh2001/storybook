# Html 相关

## HTML5 有哪些新特性

> 详细参考：[html5 新特性](https://www.runoob.com/w3cnote/html5-canvas-intro.html)

1. 绘画：canvas 标签

```html
<canvas width="200" height="100" style="border:1px solid #000000;">
  您的浏览器不支持 HTML5 canvas 标签。
</canvas>
```

2. 用于媒体的 video 和 audio 标签

> 分别是 视频 和 音频 标签

```html
<!-- 视频 -->
<video width="320" height="240" controls loop>
  <source src="movie.mp4" type="video/mp4" />
</video>

<!-- 音频 -->
<audio controls loop>
  <source src="horse.ogg" type="audio/ogg" />
</audio>
```

3. 本地存储 localStorage

- 添加本地存储

> 里面包含两个参数 1 是本地存储名称 2 是本地存储内容

```html
window.localStorage.setItem('user', data)
```

- 获取本地存储

> 直接获取本地存储的名称 user

```html
window.localStorage.getItem('user')
```

- 删除本地存储

```html
window.localStorage.removeItem('user')
```

4. sessionStorage 本地存储

> 使用 sessionStorage 存储的数据在浏览器关闭后自动删除
>
> 用法和上述基本一致

5. 语义化更好的内容元素，比如：article 、 footer 、 header 、 nav 、 section

6. 表单控件：calendar 、 date 、 time 、 email 、 url 、 search

7. 新的技术：`webworker`、`websocket`、`Geolocation` 详细链接：

> [webworker](http://www.ruanyifeng.com/blog/2018/07/web-worker.html)
>
> [websocket](http://www.ruanyifeng.com/blog/2017/05/websocket.html)
>
> [Geolocation](https://www.runoob.com/html/html5-geolocation.html)

## xhtml 和 html 有什么区别

- ⼀个是功能上的差别
  - 主要是 XHTML 可兼容各⼤浏览器、⼿机以及 PDA ，并且浏览器也能快速正确地编译网页
- 另外是书写习惯的差别
  - XHTML 元素必须被正确地嵌套，闭合，区分⼤小写，⽂档必须拥有根元素

## Canvas 和 SVG 有什么区别

- SVG 是矢量图形，矢量图形不管怎么放大缩小都不会失真或模糊，通过 AI 绘制出
- canvas 输出标量画布，就像⼀张图⽚⼀样，放⼤会失真或者锯齿

## HTML5 为什么只需要写 !DOCTYPE HTML

- HTML5 不基于 SGML ，因此不需要对 DTD 进⾏引⽤，但是需要 doctype 来规范浏览器 的行为

- ⽽ HTML4.01 基于 SGML ,所以需要对 DTD 进⾏引⽤，才能告知浏览器⽂档所使⽤的⽂档 类型

> SGML：标准通用置标语言 [SGML](https://zhidao.baidu.com/question/572835808.html)

> DTD：是一套关于标记符的语法规则 [DTD](https://zhidao.baidu.com/question/49423873.html)

## div+css 的布局较 table 布局有什么优点

> table 布局是什么？
>
> 即为表格布局

例如：

```html
<table border="1" cellspacing="0" cellpadding="0">
  <caption>
    这是表格的标题
  </caption>
  <tr>
    <th>111</th>
    <th>222</th>
    <th>333</th>
  </tr>
  <tr>
    <td>Monday</td>
    <td>Tuesday</td>
    <td>Wensday</td>
  </tr>
  <tr>
    <td>1</td>
    <td>2</td>
    <td>3</td>
  </tr>
</table>
```

> div+css 的布局较 table 布局有什么优点？

- 改版的时候更⽅便 只要改 css ⽂件
- 页面加载速度更快、结构化清晰、⻚⾯显示简洁
- 表现与结构相分离
- 易于优化（ seo ）搜索引擎更友好，排名更容易靠前

## strong 与 em 的异同

- strong：粗体强调标签，强调，表示内容的重要性
- em：斜体强调标签，更强烈强调，表示内容的强调点

```html
<strong>这是一段文字</strong>

<em>这是一段文字</em>
```
