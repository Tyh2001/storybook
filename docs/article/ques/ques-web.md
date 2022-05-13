# Web 相关

## 前端需要注意哪些 SEO

> SEO 是什么？
> 全称：Search Engine Optimization 翻译是：搜索引擎优化
> 网站进行合理的 SEO 优化是你的网站在搜索引擎的排名提高，从而利用搜索引擎给自己带来客户

1. 合理的 title 、 description 、 keywords ：搜索对着三项的权重逐个减小

   - `title`值强调重点即可，重要关键词出现不要超过 2 次，而且要靠前，不同前面 title 有所不同

   - `description` 把页面内容高度概括，长度合适，不可过分堆砌关键词，不同页面

   description 有所不同

   - `keywords` 列举出重要关键词即可

代码例子：

```html
<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta
    name="Keywords"
    content="搜狐,门户网站,新媒体,网络媒体,新闻,财经,体育,娱乐,时尚,汽车,房产,科技,图片,论坛,微博,博客,视频,电影,电视剧"
  />
  <meta name="description" content="这里填写描述内容" />
  <title>这里填写网页标题</title>
</head>
```

2. 语义化的 HTML 代码，符合`W3C`规范：语义化代码让搜索引擎容易理解网页

> W3C 规范是什么？
>
> 标签闭合、标签⼩写、不乱嵌套、使⽤外链 css 和 js 、结构⾏为表现的分离

3. 重要内容 HTML 代码放在最前：搜索引擎抓取 HTML 顺序是从上到下，有的搜索引擎对抓取⻓度有限制，保证重要内容⼀定会被抓取

4. 重要内容不要用 js 输出：爬虫不会执行 js 获取内容

5. 少用 iframe ：搜索引擎不会抓取 iframe 中的内容

> iframe 是什么？
>
> iframe 标签是一个内联框架，即用来在当前 HTML 页面中嵌入另一个文档的

例如：

```html
<iframe src="../图片/GetImage.jpg">
  <p>您的浏览器不支持iframe</p>
</iframe>
```

6. ⾮装饰性图⽚必须加 alt

```html
src="../图片/GetImage.jpg" alt="图片"
```

7. 提⾼⽹站速度：⽹站速度是搜索引擎排序的⼀个重要指标

## HTTP 的几种请求方法用途

- GET 方法：发送一个请求，得到服务器上的某一资源，一般用于查询
- POST 方法：向 URL 指定的资源提交数据或者附加新的数据，一般用于添加或者提交
- PUT 方法：跟 POST 很像，也是向服务器提交数据，但是 PUT 指定了资源在服务器上的位置，而 POST 没有，一般用于修改或完整替换
- PATCH 方法：跟 PUT 很像，但是一般用于修改操作、局部修改
- DELETE 方法：删除服务器上的某资源

> 注意：这些请求方法不是绝对，它只是一种参考，如果做接口的后端比较专业的话，会遵循这些规矩，但是从我们前端的使用角度，都是一样的，根据接口人家让你传用什么方法就用什么方法就可以了
>
> 比如：DELETE 方法 是用来删除的，那么用 GET 或者 POST 能删除吗？当然是也可以的，但是从专业角度，都是要遵循这些规则的，该是什么样是请求，就使用什么方法

## 如何进行网站性能优化

1. content 方面

- 减少 HTTP 请求：合并文件、CSS 精灵、inline Image

> CSS 精灵：俗称叫：精灵图，是一种网页图片应用处理方式，当一个页面上有很多小图标的情况下，这样每次都去分别加载小图标会对性能有损耗，那么精灵图就是指，这些所有的小图标全部都在一张图上，那么只需要请求一次即可，然后再利用 CSS 的“background-image”，“background- repeat”，“background-position”的组合进行背景定位，background-position 可以用数字精确的定位出背景图片的位置

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
- 使用 link 引入样式 不使用 @import

> 为什么要使用 link 引入？
> 当页面被加载的时候，link 引用的 CSS 会同时被加载
> @import 引用是等页面加载完成之后再加载样式

5. JavaScript 方面

- 将脚本放到页面底部
- 将 Javascript 和 Css 从外部引入
- 压缩 Javascript 和 Css
- 删除不需要的脚本
- 减少 DOM 访问

6. 图片方面

- 优化图片：根据实际颜色需要选择色深、压缩
- 优化 Css 精灵
- 不要在 HTML 中拉伸图片

## 状态码的含义

- 1XX ：信息状态码

100 Continue 继续，⼀般在发送 post 请求时，已发送了 http header 之后服务端 将返回此信息，表示确认，之后发送具体参数信息

- 2XX ：成功状态码

200 OK 正常返回信息
201 Created 请求成功并且服务器创建了新的资源
202 Accepted 服务器已接受请求，但尚未处理

- 3XX ：重定向

301 Moved Permanently 请求的⽹⻚已永久移动到新位置。
302 Found 临时性重定向。
303 See Other 临时性重定向，且总是使⽤ GET 请求新的 URI 。
304 Not Modified ⾃从上次请求后，请求的⽹⻚未修改过。

- 4XX ：客户端错误

400 Bad Request 服务器⽆法理解请求的格式，客户端不应当尝试再次使⽤相同的内 容发起请求。
401 Unauthorized 请求未授权。
403 Forbidden 禁⽌访问。
404 Not Found 找不到如何与 URI 相匹配的资源。

- 5XX: 服务器错误

500 Internal Server Error 最常⻅的服务器端错误。
503 Service Unavailable 服务器端暂时⽆法处理请求（可能是过载或维护）

## 语义化的理解

简单一句话：**用正确的标签做正确的事！**

HTML 语义化就是让⻚⾯的内容结构化，便于对浏览器、搜索引擎解析，

在没有样式 CSS 情况下也以⼀种⽂档格式显示，并且是容易阅读的。

搜索引擎的爬⾍依赖于标记来确定上下⽂和各个关键字的权重，利于 SEO 。

使阅读源代码的⼈对⽹站更容易将⽹站分块，便于阅读维护理。

## 描述下 Cookies、SessionStorage 和 LocalStorage 区别

- Cookies

Cookies 是⽹站为了标示⽤户身份⽽储存在⽤户本地终端上的数据，通常经过加密

Cookies 大小不能超过 4K

Cookie 过期时间之前⼀直有效，即使窗⼝或浏览器关闭

Cookie 数据始终在同源的 http 请求中携带

- SessionStorage 和 localStorage

SessionStorage 和 localStorage 不会把数据发送给服务器，仅仅保存在本地

虽然也有存储大小的限制，可达 5M 或更大

localStorage 存储持久数据，浏览器关闭后数据不丢失除⾮主动删除数据

sessionStorage 数据在当前浏览器窗⼝关闭后⾃动删除

## WEB 标准以及 W3C 标准是什么

标签闭合、标签⼩写、不乱嵌套、使⽤外链 css 和 js 、结构行为表现的分离

## DOCTYPE 作用? 严格模式与混杂模式如何区分？它们有何意义

> DOCTYPE 是什么？

在 html 中第一行的标签

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Document</title>
  </head>
  <body></body>
</html>
```

- DOCTYPE 的作用是什么？

`DOCTYPE` 声明位于⽂档中的最前⾯，处于 `html` 标签之前。告知浏览器的解析 器， ⽤什么⽂档类型 规范来解析这个⽂档

> 严格模式是什么？

```js
<script>"user strict"</script>
```

- 严格模式与混杂模式如何区分？

JavaScript 代码中第一行加入`"user strict"` 即为严格模式

- 它们有何意义?

严格模式的排版和 JS 运作模式是 以该浏览器⽀持的最高标准运行

模拟老式浏览器的行为以防止站点无法⼯作。 DOCTYPE 不存在或格式不正确会导致文档以混杂模式呈现

## 网页验证码是干嘛的，是为了解决什么安全问题

- 区分⽤户是计算机还是⼈的公共全⾃动程序。可以防⽌恶意破解密码、刷票、论坛灌⽔。
- 有效防⽌⿊客对某⼀个特定注册⽤户⽤特定程序暴⼒破解⽅式进⾏不断的登陆尝试

## viewport

viewport 是什么？

通俗的讲，移动设备上的 viewport 就是设备的屏幕上能用来显示我们的网页的那一块区域

详见：[viewport 深入理解](https://www.runoob.com/w3cnote/viewport-deep-understanding.html)

这个通过一个标签来设定的：

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

> 通常都可以自动生成的

## 渲染优化

- 禁⽌使⽤ iframe （阻塞⽗⽂档 onload 事件）

> iframe：是 HTML 标签，作用是文档中的文档，或者浮动的框架(FRAME)
> onload ：加载

- 禁⽌使⽤ gif 图⽚实现 loading 效果（降低 CPU 消耗，提升渲染性能）
- 使⽤ CSS3 代码代替 JS 动画（尽可能避免重绘重排以及回流）
- 对于⼀些⼩图标，可以使⽤ base64 位编码，以减少⽹络请求。但不建议⼤图使⽤，⽐较耗费 CPU
- ⻚⾯头部的 `<style></style> 和 <script></script>` 会阻塞⻚⾯；(因为 Renderer 进程中 JS 线程和渲染线程是互斥的)
- ⻚⾯中空的 href 和 src 会阻塞⻚⾯其他资源的加载 (阻塞下载进程)
- 前端模板 JS+数据，减少由于 HTML 标签导致的带宽浪费，前端⽤变量保存 AJAX 请求结果，每次操作本地变量，不⽤请求，减少请求次数
- ⽤ innerHTML 代替 DOM 操作，减少 DOM 操作次数，优化 javascript 性能
- 当需要设置的样式很多时设置 className ⽽不是直接操作 style
- 少⽤全局变量、缓存 DOM 节点查找的结果。减少 IO 读取操作
- 图⽚预加载，将样式表放在顶部，将脚本放在底部 加上时间戳
- 对普通的⽹站有⼀个统⼀的思路，就是尽量向前端优化、减少数据库操作、减少磁盘 IO

## meta 标签相关

直接上代码，举出部分例子：

```html
<!DOCTYPE html>
<!--H5标准声明，使⽤ HTML5 doctype，不区分⼤⼩写-->

<head lang="en">
  <!--标准的 lang 属性写法-->

  <meta charset="utf-8" />
  <!--声明⽂档使⽤的字符编码-->

  <meta name="description" content="不超过150个字符" />
  <!--⻚⾯描述-->

  <meta name="keywords" content="" />
  <!-- ⻚⾯关键词-->

  <meta name="author" content="name, email@gmail.com" />
  <!--⽹⻚作者-->

  <meta name="robots" content="index,follow" />
  <!--搜索引擎抓取-->
</head>
```

> 更多请参照网上 [meta 标签大全](https://blog.csdn.net/qq_16559905/article/details/51182085)

## 页面在哪些流览器测试过？这些浏览器的内核分别是什么

- IE（IE 浏览器）:trident 内核
- Firefox（火狐浏览器）：gecko 内核
- Safari （苹果公司研发浏览器）： webkit 内核
- Opera（欧朋浏览器）以前是 presto 内核， Opera 现已改⽤ Google - Chrome 的 Blink 内核
- Chrome（谷歌浏览器）：Blink (基于 webkit ，Google 与 Opera Software 共同开发)

## 你能描述⼀下渐进增强和优雅降级之间的不同吗

- 渐进增强：针对低版本浏览器进行构建页面，保证最基本的功能，然后再针对⾼级浏览器 进行效果、交互等改进和追加功能达到更好的⽤户体验。
- 优雅降级：⼀开始就构建完整的功能，然后再针对低版本浏览器进行兼容。

区别：优雅降级是从复杂的现状开始，并试图减少⽤户体验的供给。而渐进增强则是从⼀个⾮常基础的，能够起作⽤的版本开始，并不断扩充，以适应未来环境的需要。降级（功能衰减）意味着往回看；⽽渐进增强则意味着朝前看， 同时保证其根基处于安全地带。

## 为什么利用多个域名来存储网站资源会更有效

- CDN 缓存更方便
- 突破浏览器并发限制
- 节约 cookie 带宽
- 节约主域名的连接数，优化⻚⾯响应速度
- 防⽌不必要的安全问题

## 简述⼀下 src 与 href 的区别

- src ⽤于替换当前元素，href ⽤于在当前⽂档和引⽤资源之间确立联系
- src 是 source 的缩写（来源），指向外部资源的位置，指向的内容将会嵌⼊到⽂档中当前标签所 在位置；在请求 src 资源时会将其指向的资源下载并应用到⽂档内，例如 js 脚本， img 图⽚和 frame 等元素

[frame（框架）](https://zhidao.baidu.com/question/434825402.html)

```html
<script src="js.js></script>
```

> 当浏览器解析到该元素时，会暂停其他 资源的下载和处理，直到将该资源加载、编译、执⾏完毕，图⽚和框架等元素也如此，类似于将所指向资源嵌⼊当前标签内。这也是为什么将 js 脚本放在底 部⽽不是头部

- href 是 Hypertext Reference（超文本引用） 的缩写，指向⽹络资源所在位置，建⽴和当前元素（锚点）或当前⽂档（链接）之间的链接，如果我们在⽂档中添加

```html
<link rel="stylesheet" href="./index.css" />
```

## 网页制作会用到的图片格式有哪些

网页中用到的图片格式常见的有：

- .jpg
- .jpge

jpg 和 JPEG 两种图片格式有什么区别？详见：[jpg 和 JPEG 的区别](https://zhidao.baidu.com/question/1497075542190008939.html)

- .png
- .gif
- .svg

> 但是上⾯的那些都不是⾯试官想要的最后答案。⾯试官希望听到是：
> Webp，Apng （是否有关注新技术，新鲜事物）

- Webp： WebP 格式，谷歌（google）开发的⼀种旨在加快图⽚加载速度的图⽚格式。图 片压缩体积⼤约只有 JPEG 的 2/3 ，并能节省⼤量的服务器带宽资源和数据空间 **Facebook、Ebay** 等知名网站已经开始测试并使用 WebP 格式。在质量相同的情况下，WebP 格式图像的体积要比 JPEG 格式图像小 40% 。

Facebook：世界排名领先的照片分享站点

[百科](https://baike.baidu.com/item/Facebook/7449587?fr=aladdin)

[官网](https://www.facebook.com/)（需加速）

Ebay：一个管理可让全球民众上网买卖物品的线上拍卖及购物网站

[百科](https://baike.baidu.com/item/eBay/288333?fr=aladdin)

[中国官网](https://www.ebay.cn/)

- Apng：全称是 Animated Portable Network Graphics（便携式网络动画） , 是 PNG 的位图动画扩展，可 以实现 png 格式的动态图⽚效果。04 年诞⽣，但⼀直得不到各⼤浏览器⼚商的⽀持，直到目前得到 iOS safari 8 的⽀持，有望代替 GIF 成为下⼀代动态图标准

> iOS safari 8：苹果系统 8 浏览器

## ⼀次 js 请求⼀般情况下有哪些地方会有缓存处理

- DNS 缓存

DNS：一般指域名系统，全称：Domain Name System（域名系统），缩写：DNS
详见：https://baike.baidu.com/item/%E5%9F%9F%E5%90%8D%E7%B3%BB%E7%BB%9F/2251573?fromtitle=DNS&fromid=427444&fr=aladdin

- CDN 缓存

CDN：内容分发网络，全称：Content Delivery Network（内容交付网络），缩写：CDN

详见：https://baike.baidu.com/item/CDN/420951?fr=aladdin

- 浏览器缓存

浏览器缓存（Browser Caching）是为了节约网络的资源加速浏览，浏览器在用户磁盘上对最近请求过的文档进行存储，当访问者再次请求这个页面时，浏览器就可以从本地磁盘本地磁盘显示文档，这样就可以加速页面的阅览。

- 服务器缓存

缓存指的是将需要频繁访问的网络内容存放在离用户较近、访问速度更快的系统中，以提高内容访问速度的一种技术。缓存服务器就是存放频繁访问内容的服务器

## 如何优化图片的加载

- 图⽚懒加载，在⻚⾯上的未可视区域可以添加⼀个滚动事件，判断图⽚位置与浏览器顶端的距离与⻚⾯的距离，如果前者⼩于后者，优先加载。
- 如果为幻灯⽚、相册等，可以使⽤图⽚预加载技术，将当前展示图⽚的前⼀张和后⼀张优先下载。
- 如果图⽚过⼤，可以使⽤特殊编码的图⽚，加载时会先加载⼀张压缩的特别厉害的缩略图，以提⾼⽤户体验。
- 如果图⽚展示区域⼩于图⽚的真实⼤⼩，则因在服务器端根据业务需要先⾏进⾏图⽚压缩，图⽚压缩后⼤⼩与展示⼀致。
- 如果图⽚为 css 图⽚，可以使⽤ CSSsprite，SVGsprite， Iconfont、 Base64 等技术。

  - CSSsprite：俗称精灵图
  - SVGsprite：资源暂未找到
  - Iconfont：[阿里图标库](https://www.iconfont.cn/)
  - Base64：将图片使用编码格式存储

## web 开发中会话跟踪的方法有哪些

- cookie
- session
- url 重写
- 隐藏 input
- ip 地址

## 什么是 FOUC？如何避免

- Flash Of Unstyled Content ：用户定义样式表加载之前浏览器使⽤默认样式显示文档，用户样式加载渲染之后再从新显示⽂档，造成页面闪烁。
- 解决方法：把样式表放到⽂档的 `<head>`标签中

## 如何创建块级格式化上下文，BFC 有什么用

块级格式化上下文 是什么？

块格式上下文即为：Block formatting context（简称 BFC）

块格式上下文是布局过程中生成块级盒子的区域，也是浮动元素与其他元素的交互限定区域。

BFC 是一个独立的区域，让 BFC 内部的元素与外部的元素相互隔离也就是内外元素互不影响

- BFC 如何创建（如何创建块级格式化上下文）

**一、触发条件：**

1. 定位触发：

通过 `position: fixed;` 和 `position: absolute;` 属性可以触发

> 注：`position: relative;` 不会触发！

2. display 触发

通过 `display: inline-block;` 和 `display: table;` 属性可以触发

3. overflow 触发

overflow 的值只要不是 `visible` 都可以触发

例如：`overflow: hidden;` 、 `overflow: auto;` 等等

**二、规则**

1. 属于同一个 BFC 的两个相邻的盒子（垂直排列）
2. 属于同一个 BFC 的两个相邻盒子的 margin 会发生重叠
3. BFC 的区域不会 与 float 的元素区域发生重叠
4. 文字不会被浮动覆盖，会环绕与周围
5. BFC 中的子元素 的 margin 不会合并与父级的外边距重叠
6. 计算 BFC 高度的时候 浮动元素也会参与计算

- 应用

1. 阻止外边距重叠
2. 阻止元素被浮动元素覆盖（清除浮动）
3. 自适应的两栏布局
4. 可以解决高度塌陷（清除内部元素浮动）

实例：

```html
<div class="box">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
</div>
```

```css
.box {
  background: skyblue;
}

.box .item {
  width: 100px;
  border: 2px solid black;
  float: left;
}
```

当 box 没有设置高度时，里面的元素浮动，就会造成父级的盒子塌陷，那么 box 的背景色也就看不到了

解决方式：通过给父级元素设置 BFC 容器，即可解决

可以通过下面任意一条属性解决

```css
.box {
  background: skyblue;
  position: fixed;
  /* position: absolute; */
  /* display: inline-block; */
  /* display: table; */
  /* overflow: hidden; */
  /* overflow: auto; */
}
```

## 在网页中的应该使用奇数还是偶数的字体？为什么

- 偶数字号相对更容易和 web 设计的其他部分构成⽐例关系

## 什么是 MVVM

MVVM：页面输入改变数据，数据改变影响页面数据展示与渲染。

M（model）：普通的 JavaScript 数据对象。

V（view）：前端展示页面。

VM（ViewModel）：用于双向绑定数据与页面，就是 Vue 的实例。

## 什么是 MVC

MVC 全名是 Model View Controller

是模型（model） 视图（view） 控制器（controller）的缩写

MVC 是一种软件设计典范，用一种业务逻辑、数据、界面显示分离的方法组织代码，将业务逻辑聚集到一个部件里面，在改进和个性化定制界面及用户交互的同时，不需要重新编写业务逻辑。
