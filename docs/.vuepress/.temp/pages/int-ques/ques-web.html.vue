<template><h1 id="web-综合问题" tabindex="-1"><a class="header-anchor" href="#web-综合问题" aria-hidden="true">#</a> Web 综合问题</h1>
<h2 id="前端需要注意哪些-seo" tabindex="-1"><a class="header-anchor" href="#前端需要注意哪些-seo" aria-hidden="true">#</a> 前端需要注意哪些 SEO</h2>
<blockquote>
<p>SEO 是什么？</p>
<p>全称：Search Engine Optimization 翻译是：搜索引擎优化</p>
<p>网站进行合理的 SEO 优化是你的网站在搜索引擎的排名提高，从而利用搜索引擎给自己带来客户</p>
</blockquote>
<ol>
<li>
<p>合理的 title 、 description 、 keywords ：搜索对着三项的权重逐个减小</p>
<ul>
<li>
<p><code>title</code>值强调重点即可，重要关键词出现不要超过 2 次，而且要靠前，不同前面 title 有所不同</p>
</li>
<li>
<p><code>description</code> 把页面内容高度概括，长度合适，不可过分堆砌关键词，不同页面</p>
</li>
</ul>
<p>description 有所不同</p>
<ul>
<li><code>keywords</code> 列举出重要关键词即可</li>
</ul>
</li>
</ol>
<p>代码例子：</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>X-UA-Compatible<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>IE=edge<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span>
    <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Keywords<span class="token punctuation">"</span></span>
    <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>搜狐,门户网站,新媒体,网络媒体,新闻,财经,体育,娱乐,时尚,汽车,房产,科技,图片,论坛,微博,博客,视频,电影,电视剧<span class="token punctuation">"</span></span>
  <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>description<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>这里填写描述内容<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>这里填写网页标题<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><ol start="2">
<li>语义化的 HTML 代码，符合<code>W3C</code>规范：语义化代码让搜索引擎容易理解网页</li>
</ol>
<blockquote>
<p>W3C 规范是什么？</p>
<p>标签闭合、标签⼩写、不乱嵌套、使⽤外链 css 和 js 、结构⾏为表现的分离</p>
</blockquote>
<ol start="3">
<li>
<p>重要内容 HTML 代码放在最前：搜索引擎抓取 HTML 顺序是从上到下，有的搜索引擎对抓取⻓度有限制，保证重要内容⼀定会被抓取</p>
</li>
<li>
<p>重要内容不要用 js 输出：爬虫不会执行 js 获取内容</p>
</li>
<li>
<p>少用 iframe ：搜索引擎不会抓取 iframe 中的内容</p>
</li>
</ol>
<blockquote>
<p>iframe 是什么？</p>
<p>iframe 标签是一个内联框架，即用来在当前 HTML 页面中嵌入另一个文档的</p>
</blockquote>
<p>例如：</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>iframe</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>../图片/GetImage.jpg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>您的浏览器不支持iframe<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>iframe</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ol start="6">
<li>⾮装饰性图⽚必须加 alt</li>
</ol>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>../图片/GetImage.jpg<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>图片<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="7">
<li>提⾼⽹站速度：⽹站速度是搜索引擎排序的⼀个重要指标</li>
</ol>
<h2 id="img-标签的-title-和-alt-有什么区别" tabindex="-1"><a class="header-anchor" href="#img-标签的-title-和-alt-有什么区别" aria-hidden="true">#</a> img 标签的 title 和 alt 有什么区别</h2>
<ul>
<li>
<p>title 属性是鼠标滑动到图片上显示的内容</p>
</li>
<li>
<p>alt 是 <img> 的特有属性，是图⽚内容的等价描述，⽤于图⽚⽆法加载时显示、读屏器 阅读图⽚。可提图⽚⾼可访问性，除了纯装饰图⽚外都必须设置有意义的值，搜索引擎会 重点分析。</p>
</li>
</ul>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>../图片/GetImage.jpg<span class="token punctuation">"</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>图片<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>图片<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="http-的几种请求方法用途" tabindex="-1"><a class="header-anchor" href="#http-的几种请求方法用途" aria-hidden="true">#</a> HTTP 的几种请求方法用途</h2>
<ul>
<li>GET 方法：发送一个请求，得到服务器上的某一资源，一般用于查询</li>
<li>POST 方法：向 URL 指定的资源提交数据或者附加新的数据，一般用于添加或者提交</li>
<li>PUT 方法：跟 POST 很像，也是向服务器提交数据，但是 PUT 指定了资源在服务器上的位置，而 POST 没有，一般用于修改或完整替换</li>
<li>PATCH 方法：跟 PUT 很像，但是一般用于修改操作、局部修改</li>
<li>DELETE 方法：删除服务器上的某资源</li>
</ul>
<blockquote>
<p>注意：这些请求方法不是绝对，它只是一种参考，如果做接口的后端比较专业的话，会遵循这些规矩，但是从我们前端的使用角度，都是一样的，根据接口人家让你传用什么方法就用什么方法就可以了</p>
<p>比如：DELETE 方法 是用来删除的，那么用 GET 或者 POST 能删除吗？当然是也可以的，但是从专业角度，都是要遵循这些规则的，该是什么样是请求，就使用什么方法</p>
</blockquote>
<h2 id="如何进行网站性能优化" tabindex="-1"><a class="header-anchor" href="#如何进行网站性能优化" aria-hidden="true">#</a> 如何进行网站性能优化</h2>
<ol>
<li>content 方面</li>
</ol>
<ul>
<li>减少 HTTP 请求：合并文件、CSS 精灵、inline Image</li>
</ul>
<blockquote>
<p>CSS 精灵：俗称叫：精灵图，是一种网页图片应用处理方式，当一个页面上有很多小图标的情况下，这样每次都去分别加载小图标会对性能有损耗，那么精灵图就是指，这些所有的小图标全部都在一张图上，那么只需要请求一次即可，然后再利用 CSS 的“background-image”，“background- repeat”，“background-position”的组合进行背景定位，background-position 可以用数字精确的定位出背景图片的位置</p>
</blockquote>
<ul>
<li>减少 DNS 查询：DNS 缓存、将资源分别到恰当数量的主机名</li>
</ul>
<blockquote>
<p>DNS（Domain Name System，域名系统）</p>
</blockquote>
<ul>
<li>减少 DOM 元素数量（减少不必要的标签）</li>
</ul>
<ol start="2">
<li>Server 方面</li>
</ol>
<ul>
<li>使用 CDN</li>
<li>配置 ETag</li>
<li>对组件使用 Gzip 压缩</li>
</ul>
<ol start="3">
<li>Cookie 方面</li>
</ol>
<ul>
<li>减小 cookie 大小</li>
</ul>
<ol start="4">
<li>Css 方面</li>
</ol>
<ul>
<li>将样式表放到顶部</li>
<li>不使用 Css 表达式</li>
<li>使用 <link> 引入样式 不使用 @import</li>
</ul>
<blockquote>
<p>为什么要使用 <link>引入？</p>
<p>当页面被加载的时候，link 引用的 CSS 会同时被加载</p>
<p>@import 引用是等页面加载完成之后再加载样式</p>
</blockquote>
<ol start="5">
<li>JavaScript 方面</li>
</ol>
<ul>
<li>将脚本放到页面底部</li>
<li>将 Javascript 和 Css 从外部引入</li>
<li>压缩 Javascript 和 Css</li>
<li>删除不需要的脚本</li>
<li>减少 DOM 访问</li>
</ul>
<ol start="6">
<li>图片方面</li>
</ol>
<ul>
<li>优化图片：根据实际颜色需要选择色深、压缩</li>
<li>优化 Css 精灵</li>
<li>不要在 HTML 中拉伸图片</li>
</ul>
<h2 id="状态码的含义" tabindex="-1"><a class="header-anchor" href="#状态码的含义" aria-hidden="true">#</a> 状态码的含义</h2>
<ul>
<li>1XX ：信息状态码</li>
</ul>
<p>100 Continue 继续，⼀般在发送 post 请求时，已发送了 http header 之后服务端 将返回此信息，表示确认，之后发送具体参数信息</p>
<ul>
<li>2XX ：成功状态码</li>
</ul>
<p>200 OK 正常返回信息
201 Created 请求成功并且服务器创建了新的资源
202 Accepted 服务器已接受请求，但尚未处理</p>
<ul>
<li>3XX ：重定向</li>
</ul>
<p>301 Moved Permanently 请求的⽹⻚已永久移动到新位置。
302 Found 临时性重定向。
303 See Other 临时性重定向，且总是使⽤ GET 请求新的 URI 。
304 Not Modified ⾃从上次请求后，请求的⽹⻚未修改过。</p>
<ul>
<li>4XX ：客户端错误</li>
</ul>
<p>400 Bad Request 服务器⽆法理解请求的格式，客户端不应当尝试再次使⽤相同的内 容发起请求。
401 Unauthorized 请求未授权。
403 Forbidden 禁⽌访问。
404 Not Found 找不到如何与 URI 相匹配的资源。</p>
<ul>
<li>5XX: 服务器错误</li>
</ul>
<p>500 Internal Server Error 最常⻅的服务器端错误。
503 Service Unavailable 服务器端暂时⽆法处理请求（可能是过载或维护）</p>
<h2 id="语义化的理解" tabindex="-1"><a class="header-anchor" href="#语义化的理解" aria-hidden="true">#</a> 语义化的理解</h2>
<p>简单一句话：<strong>用正确的标签做正确的事！</strong></p>
<p>HTML 语义化就是让⻚⾯的内容结构化，便于对浏览器、搜索引擎解析，</p>
<p>在没有样式 CSS 情况下也以⼀种⽂档格式显示，并且是容易阅读的。</p>
<p>搜索引擎的爬⾍依赖于标记来确定上下⽂和各个关键字的权重，利于 SEO 。</p>
<p>使阅读源代码的⼈对⽹站更容易将⽹站分块，便于阅读维护理。</p>
<h2 id="描述下-cookies、sessionstorage-和-localstorage-区别" tabindex="-1"><a class="header-anchor" href="#描述下-cookies、sessionstorage-和-localstorage-区别" aria-hidden="true">#</a> 描述下 Cookies、SessionStorage 和 LocalStorage 区别</h2>
<ul>
<li>Cookies</li>
</ul>
<p>Cookies 是⽹站为了标示⽤户身份⽽储存在⽤户本地终端上的数据，通常经过加密</p>
<p>Cookies 大小不能超过 4K</p>
<p>Cookie 过期时间之前⼀直有效，即使窗⼝或浏览器关闭</p>
<p>Cookie 数据始终在同源的 http 请求中携带</p>
<ul>
<li>SessionStorage 和 localStorage</li>
</ul>
<p>SessionStorage 和 localStorage 不会把数据发送给服务器，仅仅保存在本地</p>
<p>虽然也有存储大小的限制，可达 5M 或更大</p>
<p>localStorage 存储持久数据，浏览器关闭后数据不丢失除⾮主动删除数据</p>
<p>sessionStorage 数据在当前浏览器窗⼝关闭后⾃动删除</p>
<h2 id="web-标准以及-w3c-标准是什么" tabindex="-1"><a class="header-anchor" href="#web-标准以及-w3c-标准是什么" aria-hidden="true">#</a> WEB 标准以及 W3C 标准是什么</h2>
<p>标签闭合、标签⼩写、不乱嵌套、使⽤外链 css 和 js 、结构行为表现的分离</p>
<h2 id="doctype-作用-严格模式与混杂模式如何区分-它们有何意义" tabindex="-1"><a class="header-anchor" href="#doctype-作用-严格模式与混杂模式如何区分-它们有何意义" aria-hidden="true">#</a> DOCTYPE 作用? 严格模式与混杂模式如何区分？它们有何意义</h2>
<blockquote>
<p>DOCTYPE 是什么？</p>
</blockquote>
<p>在 html 中第一行的标签</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ul>
<li>DOCTYPE 的作用是什么？</li>
</ul>
<p><code>DOCTYPE</code> 声明位于⽂档中的最前⾯，处于 <code>html</code> 标签之前。告知浏览器的解析 器， ⽤什么⽂档类型 规范来解析这个⽂档</p>
<blockquote>
<p>严格模式是什么？</p>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>script<span class="token operator">></span><span class="token string">"user strict"</span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul>
<li>严格模式与混杂模式如何区分？</li>
</ul>
<p>JavaScript 代码中第一行加入<code>&quot;user strict&quot;</code> 即为严格模式</p>
<ul>
<li>它们有何意义?</li>
</ul>
<p>严格模式的排版和 JS 运作模式是 以该浏览器⽀持的最高标准运行</p>
<p>模拟老式浏览器的行为以防止站点无法⼯作。 DOCTYPE 不存在或格式不正确会导致文档以混杂模式呈现</p>
<h2 id="网页验证码是干嘛的-是为了解决什么安全问题" tabindex="-1"><a class="header-anchor" href="#网页验证码是干嘛的-是为了解决什么安全问题" aria-hidden="true">#</a> 网页验证码是干嘛的，是为了解决什么安全问题</h2>
<ul>
<li>区分⽤户是计算机还是⼈的公共全⾃动程序。可以防⽌恶意破解密码、刷票、论坛灌⽔。</li>
<li>有效防⽌⿊客对某⼀个特定注册⽤户⽤特定程序暴⼒破解⽅式进⾏不断的登陆尝试</li>
</ul>
<h2 id="viewport" tabindex="-1"><a class="header-anchor" href="#viewport" aria-hidden="true">#</a> viewport</h2>
<blockquote>
<p>viewport 是什么？</p>
<p>通俗的讲，移动设备上的 viewport 就是设备的屏幕上能用来显示我们的网页的那一块区域</p>
<p>详见：<a href="https://www.runoob.com/w3cnote/viewport-deep-understanding.html" target="_blank" rel="noopener noreferrer">viewport 深入理解<ExternalLinkIcon/></a></p>
</blockquote>
<p>这个通过一个标签来设定的：</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span> //
width 设置viewport宽度，为⼀个正整数，或字符串‘device-width’ // device-width
设备宽度 // height
设置viewport⾼度，⼀般设置了宽度，会⾃动解析出⾼度，可以不⽤设置 //
initial-scale 默认缩放⽐例（初始缩放⽐例），为⼀个数字，可以带⼩数 //
minimum-scale 允许⽤户最⼩缩放⽐例，为⼀个数字，可以带⼩数 // maximum-scale
允许⽤户最⼤缩放⽐例，为⼀个数字，可以带⼩数 // user-scalable 是否允许⼿动缩放
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><blockquote>
<p>通常都可以自动生成的</p>
</blockquote>
<h2 id="渲染优化" tabindex="-1"><a class="header-anchor" href="#渲染优化" aria-hidden="true">#</a> 渲染优化</h2>
<ul>
<li>禁⽌使⽤ iframe （阻塞⽗⽂档 onload 事件）</li>
</ul>
<blockquote>
<p>iframe：是 HTML 标签，作用是文档中的文档，或者浮动的框架(FRAME)</p>
<p>onload ：加载</p>
</blockquote>
<ul>
<li>
<p>禁⽌使⽤ gif 图⽚实现 loading 效果（降低 CPU 消耗，提升渲染性能）</p>
</li>
<li>
<p>使⽤ CSS3 代码代替 JS 动画（尽可能避免重绘重排以及回流）</p>
</li>
<li>
<p>对于⼀些⼩图标，可以使⽤ base64 位编码，以减少⽹络请求。但不建议⼤图使⽤，⽐较耗</p>
<p>费 CPU</p>
</li>
<li>
<p>⻚⾯头部的 <code>&lt;style&gt;&lt;/style&gt; 和 &lt;script&gt;&lt;/script&gt;</code> 会阻塞⻚⾯；(因为 Renderer 进程中 JS 线程和渲染线程是互斥的)</p>
</li>
<li>
<p>⻚⾯中空的 href 和 src 会阻塞⻚⾯其他资源的加载 (阻塞下载进程)</p>
</li>
<li>
<p>前端模板 JS+数据，减少由于 HTML 标签导致的带宽浪费，前端⽤变量保存 AJAX 请求结</p>
<p>果，每次操作本地变量，不⽤请求，减少请求次数</p>
</li>
<li>
<p>⽤ innerHTML 代替 DOM 操作，减少 DOM 操作次数，优化 javascript 性能</p>
</li>
<li>
<p>当需要设置的样式很多时设置 className ⽽不是直接操作 style</p>
</li>
<li>
<p>少⽤全局变量、缓存 DOM 节点查找的结果。减少 IO 读取操作</p>
</li>
<li>
<p>图⽚预加载，将样式表放在顶部，将脚本放在底部 加上时间戳</p>
</li>
<li>
<p>对普通的⽹站有⼀个统⼀的思路，就是尽量向前端优化、减少数据库操作、减少磁盘 IO</p>
</li>
</ul>
<h2 id="meta-标签相关" tabindex="-1"><a class="header-anchor" href="#meta-标签相关" aria-hidden="true">#</a> meta 标签相关</h2>
<p>直接上代码：</p>
<blockquote>
<p>举出部分例子：</p>
</blockquote>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token comment">&lt;!--H5标准声明，使⽤ HTML5 doctype，不区分⼤⼩写--></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token comment">&lt;!--标准的 lang 属性写法--></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>utf-8<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  <span class="token comment">&lt;!--声明⽂档使⽤的字符编码--></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>description<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>不超过150个字符<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  <span class="token comment">&lt;!--⻚⾯描述--></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>keywords<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  <span class="token comment">&lt;!-- ⻚⾯关键词--></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>author<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>name, email@gmail.com<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  <span class="token comment">&lt;!--⽹⻚作者--></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>robots<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>index,follow<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  <span class="token comment">&lt;!--搜索引擎抓取--></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><blockquote>
<p>更多请参照网上 <a href="https://blog.csdn.net/qq_16559905/article/details/51182085" target="_blank" rel="noopener noreferrer">meta 标签大全<ExternalLinkIcon/></a></p>
</blockquote>
<h2 id="⻚面在哪些流览器测试过-这些浏览器的内核分别是什么" tabindex="-1"><a class="header-anchor" href="#⻚面在哪些流览器测试过-这些浏览器的内核分别是什么" aria-hidden="true">#</a> ⻚⾯在哪些流览器测试过？这些浏览器的内核分别是什么</h2>
<ul>
<li>IE（IE 浏览器）:trident 内核</li>
<li>Firefox（火狐浏览器）：gecko 内核</li>
<li>Safari （苹果公司研发浏览器）： webkit 内核</li>
<li>Opera（欧朋浏览器）以前是 presto 内核， Opera 现已改⽤ Google - Chrome 的 Blink 内核</li>
<li>Chrome（谷歌浏览器）：Blink (基于 webkit ，Google 与 Opera Software 共同开发)</li>
</ul>
<h2 id="你能描述一下渐进增强和优雅降级之间的不同吗" tabindex="-1"><a class="header-anchor" href="#你能描述一下渐进增强和优雅降级之间的不同吗" aria-hidden="true">#</a> 你能描述⼀下渐进增强和优雅降级之间的不同吗</h2>
<ul>
<li>渐进增强：针对低版本浏览器进行构建页面，保证最基本的功能，然后再针对⾼级浏览器 进行效果、交互等改进和追加功能达到更好的⽤户体验。</li>
<li>优雅降级：⼀开始就构建完整的功能，然后再针对低版本浏览器进行兼容。</li>
</ul>
<blockquote>
<p>区别：优雅降级是从复杂的现状开始，并试图减少⽤户体验的供给。⽽渐进增强则是从⼀个⾮常基础的，能够起作⽤的版本开始，并不断扩充，以适应未来环境的需要。降级（功能衰减）意味着往回看；⽽渐进增强则意味着朝前看， 同时保证其根基处于安全地带。</p>
</blockquote>
<h2 id="为什么利用多个域名来存储网站资源会更有效" tabindex="-1"><a class="header-anchor" href="#为什么利用多个域名来存储网站资源会更有效" aria-hidden="true">#</a> 为什么利用多个域名来存储网站资源会更有效</h2>
<ul>
<li>CDN 缓存更方便</li>
<li>突破浏览器并发限制</li>
<li>节约 cookie 带宽</li>
<li>节约主域名的连接数，优化⻚⾯响应速度</li>
<li>防⽌不必要的安全问题</li>
</ul>
<h2 id="简述一下-src-与-href-的区别" tabindex="-1"><a class="header-anchor" href="#简述一下-src-与-href-的区别" aria-hidden="true">#</a> 简述⼀下 src 与 href 的区别</h2>
<ul>
<li>
<p>src ⽤于替换当前元素，href ⽤于在当前⽂档和引⽤资源之间确立联系</p>
</li>
<li>
<p>src 是 source 的缩写（来源），指向外部资源的位置，指向的内容将会嵌⼊到⽂档中当前标签所 在位置；在请求 src 资源时会将其指向的资源下载并应用到⽂档内，例如 js 脚本，</p>
<p>img 图⽚和 frame 等元素</p>
</li>
</ul>
<p><a href="https://zhidao.baidu.com/question/434825402.html" target="_blank" rel="noopener noreferrer">frame（框架）<ExternalLinkIcon/></a></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>&lt;script src="js.js><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><blockquote>
<p>当浏览器解析到该元素时，会暂停其他 资源的下载和处理，直到将该资源加载、编译、执⾏完毕，图⽚和框架等元素也如此，类似于将所指向资源嵌⼊当前标签内。这也是为什么将 js 脚本放在底 部⽽不是头部</p>
</blockquote>
<ul>
<li>href 是 Hypertext Reference（超文本引用） 的缩写，指向⽹络资源所在位置，建⽴和当前元素（锚点）或当前⽂档（链接）之间的链接，如果我们在⽂档中添加</li>
</ul>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>./index.css<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><blockquote>
<p>那么浏览器会识别该⽂档为 css ⽂件，就会进行下载资源并且不会停⽌对当前⽂档的处理。这也是为什么建议使⽤ link 方式来加载 css ，而不是使⽤ @import ⽅式</p>
<p>因为 @import ⽅式加载样式，是等页面记载完成之后再加载样式</p>
</blockquote>
<h2 id="网页制作会用到的图片格式有哪些" tabindex="-1"><a class="header-anchor" href="#网页制作会用到的图片格式有哪些" aria-hidden="true">#</a> 网页制作会用到的图片格式有哪些</h2>
<p>网页中用到的图片格式常见的有：</p>
<ul>
<li>.jpg</li>
<li>.jpge</li>
</ul>
<p>jpg 和 JPEG 两种图片格式有什么区别？详见：<a href="https://zhidao.baidu.com/question/1497075542190008939.html" target="_blank" rel="noopener noreferrer">jpg 和 JPEG 的区别<ExternalLinkIcon/></a></p>
<ul>
<li>.png</li>
<li>.gif</li>
<li>.svg</li>
</ul>
<blockquote>
<p>但是上⾯的那些都不是⾯试官想要的最后答案。⾯试官希望听到是：</p>
<p>Webp，Apng （是否有关注新技术，新鲜事物）</p>
</blockquote>
<ul>
<li>
<p>Webp： WebP 格式，谷歌（google）开发的⼀种旨在加快图⽚加载速度的图⽚格式。图</p>
<p>片压缩体积⼤约只有 JPEG 的 2/3 ，并能节省⼤量的服务器带宽资源和数据空间</p>
<p><strong>Facebook、Ebay</strong> 等知名网站已经开始测试并使用 WebP 格式。</p>
<p>在质量相同的情况下，WebP 格式图像的体积要比 JPEG 格式图像小 40% 。</p>
</li>
</ul>
<blockquote>
<p>Facebook：世界排名领先的照片分享站点</p>
<p><a href="https://baike.baidu.com/item/Facebook/7449587?fr=aladdin" target="_blank" rel="noopener noreferrer">百科<ExternalLinkIcon/></a></p>
<p><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">官网<ExternalLinkIcon/></a>（需加速）</p>
</blockquote>
<blockquote>
<p>Ebay：一个管理可让全球民众上网买卖物品的线上拍卖及购物网站</p>
<p><a href="https://baike.baidu.com/item/eBay/288333?fr=aladdin" target="_blank" rel="noopener noreferrer">百科<ExternalLinkIcon/></a></p>
<p><a href="https://www.ebay.cn/" target="_blank" rel="noopener noreferrer">中国官网<ExternalLinkIcon/></a></p>
</blockquote>
<ul>
<li>Apng：全称是 Animated Portable Network Graphics（便携式网络动画） , 是 PNG 的位图动画扩展，可 以实现 png 格式的动态图⽚效果。04 年诞⽣，但⼀直得不到各⼤浏览器⼚商的⽀持，直到目前得到 iOS safari 8 的⽀持，有望代替 GIF 成为下⼀代动态图标准</li>
</ul>
<blockquote>
<p>iOS safari 8：苹果系统 8 浏览器</p>
</blockquote>
<h2 id="在-css-js-代码上线之后开发人员经常会优化性能-从用户刷新网页开始-一次-js-请求一般情况下有哪些地方会有缓存处理" tabindex="-1"><a class="header-anchor" href="#在-css-js-代码上线之后开发人员经常会优化性能-从用户刷新网页开始-一次-js-请求一般情况下有哪些地方会有缓存处理" aria-hidden="true">#</a> 在 css/js 代码上线之后开发人员经常会优化性能，从用户刷新网页开始，⼀次 js 请求⼀般情况下有哪些地方会有缓存处理</h2>
<ul>
<li>DNS 缓存</li>
</ul>
<blockquote>
<p>DNS：一般指域名系统，全称：Domain Name System（域名系统），缩写：DNS</p>
<p>详见：https://baike.baidu.com/item/%E5%9F%9F%E5%90%8D%E7%B3%BB%E7%BB%9F/2251573?fromtitle=DNS&amp;fromid=427444&amp;fr=aladdin</p>
</blockquote>
<ul>
<li>CDN 缓存</li>
</ul>
<blockquote>
<p>CDN：内容分发网络，全称：Content Delivery Network（内容交付网络），缩写：CDN</p>
<p>详见：https://baike.baidu.com/item/CDN/420951?fr=aladdin</p>
</blockquote>
<ul>
<li>浏览器缓存</li>
</ul>
<blockquote>
<p>浏览器缓存（Browser Caching）是为了节约网络的资源加速浏览，浏览器在用户磁盘上对最近请求过的文档进行存储，当访问者再次请求这个页面时，浏览器就可以从本地磁盘本地磁盘显示文档，这样就可以加速页面的阅览。</p>
</blockquote>
<ul>
<li>服务器缓存</li>
</ul>
<blockquote>
<p>缓存指的是将需要频繁访问的网络内容存放在离用户较近、访问速度更快的系统中，以提高内容访问速度的一种技术。缓存服务器就是存放频繁访问内容的服务器</p>
</blockquote>
<h2 id="一个页面上有大量的图片-加载很慢-你有那些方法优化这些图片的加载-给用户更好的体验" tabindex="-1"><a class="header-anchor" href="#一个页面上有大量的图片-加载很慢-你有那些方法优化这些图片的加载-给用户更好的体验" aria-hidden="true">#</a> 一个页面上有大量的图片，加载很慢，你有那些方法优化这些图片的加载，给用户更好的体验</h2>
<ul>
<li>
<p>图⽚懒加载，在⻚⾯上的未可视区域可以添加⼀个滚动事件，判断图⽚位置与浏览器顶端</p>
<p>的距离与⻚⾯的距离，如果前者⼩于后者，优先加载。</p>
</li>
<li>
<p>如果为幻灯⽚、相册等，可以使⽤图⽚预加载技术，将当前展示图⽚的前⼀张和后⼀张优</p>
<p>先下载。</p>
</li>
<li>
<p>如果图⽚过⼤，可以使⽤特殊编码的图⽚，加载时会先加载⼀张压缩的特别厉害的缩略</p>
<p>图，以提⾼⽤户体验。</p>
</li>
<li>
<p>如果图⽚展示区域⼩于图⽚的真实⼤⼩，则因在服务器端根据业务需要先⾏进⾏图⽚压</p>
<p>缩，图⽚压缩后⼤⼩与展示⼀致。</p>
</li>
<li>
<p>如果图⽚为 css 图⽚，可以使⽤ CSSsprite ， SVGsprite ， Iconfont 、 Base64 等技</p>
<p>术。</p>
<ul>
<li>CSSsprite：俗称精灵图</li>
<li>SVGsprite：资源暂未找到</li>
<li>Iconfont：<a href="https://www.iconfont.cn/" target="_blank" rel="noopener noreferrer">阿里图标库<ExternalLinkIcon/></a></li>
<li>Base64：将图片使用编码格式存储</li>
</ul>
</li>
</ul>
<h2 id="web-开发中会话跟踪的方法有哪些" tabindex="-1"><a class="header-anchor" href="#web-开发中会话跟踪的方法有哪些" aria-hidden="true">#</a> web 开发中会话跟踪的方法有哪些</h2>
<ul>
<li>cookie</li>
<li>session</li>
<li>url 重写</li>
<li>隐藏 input</li>
<li>ip 地址</li>
</ul>
<h2 id="npm-是什么" tabindex="-1"><a class="header-anchor" href="#npm-是什么" aria-hidden="true">#</a> NPM 是什么</h2>
<p>npm 是世界上最大的软件注册表，拥有一百多万个软件包， Node.js 默认的、以 JavaScript 编写的软件包管理系统。如果一个程序依赖了很多包的话，那么没有一个包管理系统来维护的话，那么需要自己来解决这些依赖关系，就会非常的麻烦，那么有了 npm，就可以一条命令下来，它就可以帮你把依赖关系和对应的版本帮你管理了，这就是 npm 最大的一个好处。</p>
<h2 id="link-和-import-的区别" tabindex="-1"><a class="header-anchor" href="#link-和-import-的区别" aria-hidden="true">#</a> Link 和 @import 的区别</h2>
<ul>
<li>
<p>link 是 HTML ⽅式，@import 是 CSS ⽅式</p>
</li>
<li>
<p>link 最⼤限度⽀持并⾏下载， @import 过多嵌套导致串⾏下载，出现 FOUC (⽂档样式</p>
<p>短暂失效)</p>
</li>
<li>
<p>link 可以通过 rel=&quot;alternate stylesheet&quot; 指定候选样式</p>
</li>
<li>
<p>link 可以通过 js 来动态引入样式</p>
</li>
<li>
<p>浏览器对 link ⽀持早于 @import ，可以使⽤ @import 对⽼浏览器隐藏样式</p>
</li>
<li>
<p>@import 必须在样式规则之前，可以在 css ⽂件中引⽤其他⽂件</p>
</li>
<li>
<p>加载方法不一样。 link 引入是先加载样式再加载页面，但是 @import 是页面加载完成后加载样式</p>
</li>
<li>
<p>总体来说： link 优于 @import</p>
</li>
</ul>
<h2 id="什么是-fouc-如何避免" tabindex="-1"><a class="header-anchor" href="#什么是-fouc-如何避免" aria-hidden="true">#</a> 什么是 FOUC？如何避免</h2>
<ul>
<li>
<p>Flash Of Unstyled Content ：用户定义样式表加载之前浏览器使⽤默认样式显示文档，用户样式加载渲染之后再从新显示⽂档，造成页面闪烁。</p>
</li>
<li>
<p>解决方法：把样式表放到⽂档的 <code>&lt;head&gt;</code>标签中</p>
</li>
</ul>
<h2 id="如何创建块级格式化上下文-bfc-有什么用" tabindex="-1"><a class="header-anchor" href="#如何创建块级格式化上下文-bfc-有什么用" aria-hidden="true">#</a> 如何创建块级格式化上下文，BFC 有什么用</h2>
<blockquote>
<p>块级格式化上下文 是什么？</p>
<p>块格式上下文即为：Block formatting context（简称 BFC）</p>
<p>块格式上下文是布局过程中生成块级盒子的区域，也是浮动元素与其他元素的交互限定区域。</p>
<p>BFC 是一个独立的区域，让 BFC 内部的元素与外部的元素相互隔离</p>
<p>也就是内外元素互不影响</p>
</blockquote>
<ul>
<li>BFC 如何创建（如何创建块级格式化上下文）</li>
</ul>
<p><strong>一、触发条件：</strong></p>
<ol>
<li>定位触发：</li>
</ol>
<p>通过 <code>position: fixed;</code> 和 <code>position: absolute;</code> 属性可以触发</p>
<blockquote>
<p>注：<code>position: relative;</code> 不会触发！</p>
</blockquote>
<ol start="2">
<li>display 触发</li>
</ol>
<p>通过 <code>display: inline-block;</code> 和 <code>display: table;</code> 属性可以触发</p>
<ol start="3">
<li>overflow 触发</li>
</ol>
<p>overflow 的值只要不是 <code>visible</code> 都可以触发</p>
<p>例如：<code>overflow: hidden;</code> 、 <code>overflow: auto;</code> 等等</p>
<p><strong>二、规则</strong></p>
<ol>
<li>属于同一个 BFC 的两个相邻的盒子（垂直排列）</li>
<li>属于同一个 BFC 的两个相邻盒子的 margin 会发生重叠</li>
<li>BFC 的区域不会 与 float 的元素区域发生重叠</li>
<li>文字不会被浮动覆盖，会环绕与周围</li>
<li>BFC 中的子元素 的 margin 不会合并与父级的外边距重叠</li>
<li>计算 BFC 高度的时候 浮动元素也会参与计算</li>
</ol>
<ul>
<li>应用</li>
</ul>
<ol>
<li>阻止外边距重叠</li>
<li>阻止元素被浮动元素覆盖（清除浮动）</li>
<li>自适应的两栏布局</li>
<li>可以解决高度塌陷（清除内部元素浮动）</li>
</ol>
<p>实例：</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>box<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> skyblue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.box .item</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 2px solid black<span class="token punctuation">;</span>
  <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>当 box 没有设置高度时，里面的元素浮动，就会造成父级的盒子塌陷，那么 box 的背景色也就看不到了</p>
<p>解决方式：通过给父级元素设置 BFC 容器，即可解决</p>
<p>可以通过下面任意一条属性解决</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> skyblue<span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> fixed<span class="token punctuation">;</span>
  <span class="token comment">/* position: absolute; */</span>
  <span class="token comment">/* display: inline-block; */</span>
  <span class="token comment">/* display: table; */</span>
  <span class="token comment">/* overflow: hidden; */</span>
  <span class="token comment">/* overflow: auto; */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="在网页中的应该使用奇数还是偶数的字体-为什么" tabindex="-1"><a class="header-anchor" href="#在网页中的应该使用奇数还是偶数的字体-为什么" aria-hidden="true">#</a> 在网页中的应该使用奇数还是偶数的字体？为什么</h2>
<ul>
<li>偶数字号相对更容易和 web 设计的其他部分构成⽐例关系</li>
</ul>
<h2 id="什么是语法糖" tabindex="-1"><a class="header-anchor" href="#什么是语法糖" aria-hidden="true">#</a> 什么是语法糖</h2>
<p>也就是字面意思即，用更简练的言语表达较复杂的含义。在得到广泛接受的情况之下，可以提升交流的效率。</p>
<h2 id="什么是-mvvm" tabindex="-1"><a class="header-anchor" href="#什么是-mvvm" aria-hidden="true">#</a> 什么是 MVVM</h2>
<p>MVVM：页面输入改变数据，数据改变影响页面数据展示与渲染。</p>
<p>M（model）：普通的 JavaScript 数据对象。</p>
<p>V（view）：前端展示页面。</p>
<p>VM（ViewModel）：用于双向绑定数据与页面，就是 Vue 的实例。</p>
<h2 id="什么是-mvc" tabindex="-1"><a class="header-anchor" href="#什么是-mvc" aria-hidden="true">#</a> 什么是 MVC</h2>
<p>MVC 全名是 Model View Controller</p>
<p>是模型（model） 视图（view） 控制器（controller）的缩写</p>
<p>MVC 是一种软件设计典范，用一种业务逻辑、数据、界面显示分离的方法组织代码，将业务逻辑聚集到一个部件里面，在改进和个性化定制界面及用户交互的同时，不需要重新编写业务逻辑。</p>
</template>
