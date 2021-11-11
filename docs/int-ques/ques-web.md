# Web 综合问题

## 前端需要注意哪些SEO

> SEO 是什么？
>
> 全称：Search Engine Optimization  翻译是：搜索引擎优化
>
> 网站进行合理的SEO优化是你的网站在搜索引擎的排名提高，从而利用搜索引擎给自己带来客户

1. 合理的 title 、 description 、 keywords ：搜索对着三项的权重逐个减小

   - `title`值强调重点即可，重要关键词出现不要超过2次，而且要靠前，不同前面 title 有所不同

   -  `description` 把页面内容高度概括，长度合适，不可过分堆砌关键词，不同页面

   description 有所不同
   
   - `keywords` 列举出重要关键词即可

代码例子：

```html
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="Keywords" content="搜狐,门户网站,新媒体,网络媒体,新闻,财经,体育,娱乐,时尚,汽车,房产,科技,图片,论坛,微博,博客,视频,电影,电视剧"/>
  <meta name="description" content="这里填写描述内容">
  <title>这里填写网页标题</title>
</head>
```



2. 语义化的 HTML 代码，符合`W3C`规范：语义化代码让搜索引擎容易理解网页

> W3C规范是什么？
>
> 标签闭合、标签⼩写、不乱嵌套、使⽤外链 css 和 js 、结构⾏为表现的分离



3. 重要内容 HTML 代码放在最前：搜索引擎抓取 HTML 顺序是从上到下，有的搜索引擎对抓 

   取⻓度有限制，保证重要内容⼀定会被抓取



4. 重要内容不要用 js 输出：爬虫不会执行js获取内容



5. 少用 iframe ：搜索引擎不会抓取 iframe 中的内容 

> iframe  是什么？
>
> iframe标签是一个内联框架，即用来在当前HTML页面中嵌入另一个文档的

例如：

```html
<iframe src="../图片/GetImage.jpg">
    <p>您的浏览器不支持iframe</p>
</iframe>
```



6. ⾮装饰性图⽚必须加 alt

```html
<img src="../图片/GetImage.jpg" alt="图片">
```


7. 提⾼⽹站速度：⽹站速度是搜索引擎排序的⼀个重要指标


## img 标签的 title 和 alt 有什么区别

- title属性是鼠标滑动到图片上显示的内容

- alt 是 <img> 的特有属性，是图⽚内容的等价描述，⽤于图⽚⽆法加载时显示、读屏器 阅读图⽚。可提图⽚⾼可访问性，除了纯装饰图⽚外都必须设置有意义的值，搜索引擎会 重点分析。

```html
<img src="../图片/GetImage.jpg" title="图片" alt="图片">
```

## HTTP 的几种请求方法用途

- GET 方法：发送一个请求，得到服务器上的某一资源，一般用于查询
- POST 方法：向 URL 指定的资源提交数据或者附加新的数据，一般用于添加或者提交
- PUT 方法：跟 POST 很像，也是向服务器提交数据，但是 PUT 指定了资源在服务器上的位置，而 POST没有，一般用于修改或完整替换
- PATCH 方法：跟 PUT  很像，但是一般用于修改操作、局部修改
- DELETE 方法：删除服务器上的某资源

> 注意：这些请求方法不是绝对，它只是一种参考，如果做接口的后端比较专业的话，会遵循这些规矩，但是从我们前端的使用角度，都是一样的，根据接口人家让你传用什么方法就用什么方法就可以了
>
> 比如：DELETE 方法 是用来删除的，那么用 GET或者 POST 能删除吗？当然是也可以的，但是从专业角度，都是要遵循这些规则的，该是什么样是请求，就使用什么方法

## 如何进行网站性能优化

1. content 方面

- 减少 HTTP 请求：合并文件、CSS 精灵、inline Image

> CSS 精灵：俗称叫：精灵图，是一种网页图片应用处理方式，当一个页面上有很多小图标的情况下，这样每次都去分别加载小图标会对性能有损耗，那么精灵图就是指，这些所有的小图标全部都在一张图上，那么只需要请求一次即可，然后再利用CSS的“background-image”，“background- repeat”，“background-position”的组合进行背景定位，background-position可以用数字精确的定位出背景图片的位置

- 减少 DNS 查询：DNS 缓存、将资源分别到恰当数量的主机名

> DNS（Domain Name System，域名系统）

- 减少 DOM 元素数量（减少不必要的标签）



2. Server 方面

- 使用 CDN
- 配置 ETag
- 对组件使用 Gzip 压缩



3. Cookie 方面

- 减小 cookie 大小



4. Css 方面

- 将样式表放到顶部
- 不使用 Css 表达式
- 使用 <link> 引入样式  不使用 @import

> 为什么要使用 <link>引入？
>
> 当页面被加载的时候，link引用的CSS会同时被加载
>
> @import 引用是等页面加载完成之后再加载样式


5. JavaScript 方面

- 将脚本放到页面底部
- 将 Javascript 和 Css 从外部引入
- 压缩  Javascript 和 Css
- 删除不需要的脚本
- 减少 DOM 访问



6. 图片方面

- 优化图片：根据实际颜色需要选择色深、压缩
- 优化 Css 精灵
- 不要在 HTML 中拉伸图片

