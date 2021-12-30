<template><h1 id="html-相关" tabindex="-1"><a class="header-anchor" href="#html-相关" aria-hidden="true">#</a> Html 相关</h1>
<h2 id="html5-有哪些新特性" tabindex="-1"><a class="header-anchor" href="#html5-有哪些新特性" aria-hidden="true">#</a> HTML5 有哪些新特性</h2>
<blockquote>
<p>详细参考：<a href="https://www.runoob.com/w3cnote/html5-canvas-intro.html" target="_blank" rel="noopener noreferrer">html5 新特性<ExternalLinkIcon/></a></p>
</blockquote>
<ol>
<li>绘画：canvas 标签</li>
</ol>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>canvas</span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>200<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">border</span><span class="token punctuation">:</span>1px solid #000000<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>
  您的浏览器不支持 HTML5 canvas 标签。
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>canvas</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ol start="2">
<li>用于媒体的 video 和 audio 标签</li>
</ol>
<blockquote>
<p>分别是 视频 和 音频 标签</p>
</blockquote>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token comment">&lt;!-- 视频 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>video</span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>320<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>240<span class="token punctuation">"</span></span> <span class="token attr-name">controls</span> <span class="token attr-name">loop</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>movie.mp4<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>video/mp4<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>video</span><span class="token punctuation">></span></span>

<span class="token comment">&lt;!-- 音频 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>audio</span> <span class="token attr-name">controls</span> <span class="token attr-name">loop</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>horse.ogg<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>audio/ogg<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>audio</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><ol start="3">
<li>本地存储 localStorage</li>
</ol>
<ul>
<li>添加本地存储</li>
</ul>
<blockquote>
<p>里面包含两个参数 1 是本地存储名称 2 是本地存储内容</p>
</blockquote>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>window.localStorage.setItem('user', data)
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul>
<li>获取本地存储</li>
</ul>
<blockquote>
<p>直接获取本地存储的名称 user</p>
</blockquote>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>window.localStorage.getItem('user')
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul>
<li>删除本地存储</li>
</ul>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>window.localStorage.removeItem('user')
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="4">
<li>sessionStorage 本地存储</li>
</ol>
<blockquote>
<p>使用 sessionStorage 存储的数据在浏览器关闭后自动删除</p>
<p>用法和上述基本一致</p>
</blockquote>
<ol start="5">
<li>
<p>语义化更好的内容元素，比如：article 、 footer 、 header 、 nav 、 section</p>
</li>
<li>
<p>表单控件：calendar 、 date 、 time 、 email 、 url 、 search</p>
</li>
<li>
<p>新的技术：<code>webworker</code>、<code>websocket</code>、<code>Geolocation</code> 详细链接：</p>
</li>
</ol>
<blockquote>
<p><a href="http://www.ruanyifeng.com/blog/2018/07/web-worker.html" target="_blank" rel="noopener noreferrer">webworker<ExternalLinkIcon/></a></p>
<p><a href="http://www.ruanyifeng.com/blog/2017/05/websocket.html" target="_blank" rel="noopener noreferrer">websocket<ExternalLinkIcon/></a></p>
<p><a href="https://www.runoob.com/html/html5-geolocation.html" target="_blank" rel="noopener noreferrer">Geolocation<ExternalLinkIcon/></a></p>
</blockquote>
<h2 id="xhtml-和-html-有什么区别" tabindex="-1"><a class="header-anchor" href="#xhtml-和-html-有什么区别" aria-hidden="true">#</a> xhtml 和 html 有什么区别</h2>
<ul>
<li>⼀个是功能上的差别
<ul>
<li>主要是 XHTML 可兼容各⼤浏览器、⼿机以及 PDA ，并且浏览器也能快速正确地编译网页</li>
</ul>
</li>
<li>另外是书写习惯的差别
<ul>
<li>XHTML 元素必须被正确地嵌套，闭合，区分⼤小写，⽂档必须拥有根元素</li>
</ul>
</li>
</ul>
<h2 id="html-全局属性-global-attribute-有哪些" tabindex="-1"><a class="header-anchor" href="#html-全局属性-global-attribute-有哪些" aria-hidden="true">#</a> HTML 全局属性(global attribute)有哪些</h2>
<blockquote>
<p>global attribute：全局属性</p>
</blockquote>
<ul>
<li><code>class</code>：为元素设置类标识</li>
<li><code>id</code>：元素 id 属性，文档内唯一</li>
<li><code>lang</code>：元素内容的语言</li>
<li><code>style</code>：行内 css 样式</li>
<li><code>title</code>：元素相关建议信息</li>
<li><code>draggable</code>：设置元素是否可以拖拽</li>
</ul>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
  <span class="token selector">div</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">draggable</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><ul>
<li><code>data-*</code>：为元素添加自定义属性</li>
</ul>
<h2 id="canvas-和-svg-有什么区别" tabindex="-1"><a class="header-anchor" href="#canvas-和-svg-有什么区别" aria-hidden="true">#</a> Canvas 和 SVG 有什么区别</h2>
<ul>
<li>SVG 是矢量图形，矢量图形不管怎么放大缩小都不会失真或模糊，通过 AI 绘制出</li>
<li>canvas 输出标量画布，就像⼀张图⽚⼀样，放⼤会失真或者锯齿</li>
</ul>
<h2 id="html5-为什么只需要写-doctype-html" tabindex="-1"><a class="header-anchor" href="#html5-为什么只需要写-doctype-html" aria-hidden="true">#</a> HTML5 为什么只需要写 !DOCTYPE HTML</h2>
<ul>
<li>
<p>HTML5 不基于 SGML ，因此不需要对 DTD 进⾏引⽤，但是需要 doctype 来规范浏览器 的行为</p>
</li>
<li>
<p>⽽ HTML4.01 基于 SGML ,所以需要对 DTD 进⾏引⽤，才能告知浏览器⽂档所使⽤的⽂档 类型</p>
</li>
</ul>
<blockquote>
<p>SGML：标准通用置标语言 <a href="https://zhidao.baidu.com/question/572835808.html" target="_blank" rel="noopener noreferrer">SGML<ExternalLinkIcon/></a></p>
</blockquote>
<blockquote>
<p>DTD：是一套关于标记符的语法规则 <a href="https://zhidao.baidu.com/question/49423873.html" target="_blank" rel="noopener noreferrer">DTD<ExternalLinkIcon/></a></p>
</blockquote>
<h2 id="div-css-的布局较-table-布局有什么优点" tabindex="-1"><a class="header-anchor" href="#div-css-的布局较-table-布局有什么优点" aria-hidden="true">#</a> div+css 的布局较 table 布局有什么优点</h2>
<blockquote>
<p>table 布局是什么？</p>
<p>即为表格布局</p>
</blockquote>
<p>例如：</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>table</span> <span class="token attr-name">border</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span> <span class="token attr-name">cellspacing</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span> <span class="token attr-name">cellpadding</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>caption</span><span class="token punctuation">></span></span>
    这是表格的标题
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>caption</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">></span></span>111<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">></span></span>222<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">></span></span>333<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">></span></span>Monday<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">></span></span>Tuesday<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">></span></span>Wensday<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>table</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><blockquote>
<p>div+css 的布局较 table 布局有什么优点？</p>
</blockquote>
<ul>
<li>改版的时候更⽅便 只要改 css ⽂件</li>
<li>页面加载速度更快、结构化清晰、⻚⾯显示简洁</li>
<li>表现与结构相分离</li>
<li>易于优化（ seo ）搜索引擎更友好，排名更容易靠前</li>
</ul>
<h2 id="strong-与-em-的异同" tabindex="-1"><a class="header-anchor" href="#strong-与-em-的异同" aria-hidden="true">#</a> strong 与 em 的异同</h2>
<ul>
<li>strong：粗体强调标签，强调，表示内容的重要性</li>
<li>em：斜体强调标签，更强烈强调，表示内容的强调点</li>
</ul>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>strong</span><span class="token punctuation">></span></span>这是一段文字<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>strong</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>em</span><span class="token punctuation">></span></span>这是一段文字<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>em</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></template>
