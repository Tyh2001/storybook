<template><h1 id="js-相关问题" tabindex="-1"><a class="header-anchor" href="#js-相关问题" aria-hidden="true">#</a> Js 相关问题</h1>
<h2 id="闭包函数" tabindex="-1"><a class="header-anchor" href="#闭包函数" aria-hidden="true">#</a> 闭包函数</h2>
<blockquote>
<p>闭包定义</p>
</blockquote>
<p>闭包就是能够读取其他函数内部变量的函数</p>
<p>例如：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fun1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> num <span class="token operator">=</span> <span class="token number">1</span>
  <span class="token keyword">function</span> <span class="token function">fun2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">10</span> <span class="token operator">+</span> num
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token function">fun2</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">fun1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>闭包是指有权访问另⼀个函数作⽤域中变量的函数，创建闭包的最常⻅的⽅式就是在⼀个函数内创建另⼀个函数，通过另⼀个函数访问这个函数的局部变量,利⽤闭包可以突破作用域</p>
<blockquote>
<p>闭包的特性</p>
</blockquote>
<ul>
<li>函数内再嵌套函数</li>
<li>内部函数可以引⽤外层的参数和变量</li>
<li>参数和变量不会被垃圾回收机制回收</li>
</ul>
<blockquote>
<p>垃圾回收机制是什么？</p>
</blockquote>
<p>由于字符串、对象等没有固定的大小，js 程序在每次创建字符串、对象的时候，程序都会<strong>分配内存来存储那个实体</strong></p>
<ul>
<li>使用分配到的内存做点什么</li>
<li>不需要时将其释放回归</li>
</ul>
<p>在不需要字符串、对象的时候，需要释放其所占用的内存，否则将会消耗完系统中所有可用的内存，造成系统崩溃，这就是<strong>垃圾回收机制所存在的意义</strong></p>
<p>在 C 和 C++之类的语言中，需要手动来管理内存的，这也是造成许多不必要问题的根源。幸运的是，在编写 js 的过程中，内存的分配以及内存的回收完全实现了自动管理，我们不用操心这种事情</p>
<blockquote>
<p>说说你对闭包的理解</p>
</blockquote>
<ul>
<li>
<p>使⽤闭包主要是为了设计私有的⽅法和变量。闭包的优点是可以避免全局变量的污染，缺点是闭包会常驻内存，会增⼤内存使⽤量，使⽤不当很容易造成内存泄露。在 js 中，函数即闭包，只有函数才会产⽣作⽤域的概念</p>
</li>
<li>
<p>闭包 的最⼤⽤处有两个，⼀个是可以读取函数内部的变量，另⼀个就是让这些变量始终保持在内存中</p>
</li>
<li>
<p>闭包的另⼀个⽤处，是封装对象的私有属性和私有⽅法</p>
</li>
<li>
<p><strong>好处：</strong> 能够实现封装和缓存等</p>
</li>
<li>
<p><strong>坏处：</strong> 就是消耗内存、不正当使⽤会造成内存溢出的问题</p>
</li>
</ul>
<blockquote>
<p>使用闭包需要的注意点</p>
</blockquote>
<ul>
<li>
<p>由于闭包会使得函数中的变量都被保存在内存中，内存消耗很⼤，所以不能滥⽤闭包，否则会造成⽹⻚的性能问题，在 IE 中可能导致内存泄露</p>
</li>
<li>
<p>解决⽅法是，在退出函数之前，将不使⽤的局部变量全部删除</p>
</li>
</ul>
<h2 id="说说你对作用域链的理解" tabindex="-1"><a class="header-anchor" href="#说说你对作用域链的理解" aria-hidden="true">#</a> 说说你对作用域链的理解</h2>
<ul>
<li>作⽤域链的作用是保证执行环境里有权访问的变量和函数是有序的，作⽤域链的变量只能向上访问，变量访问到 <code>window</code> 对象即被终止，作用域链向下访问变量是不被允许的</li>
<li>简单的说，作⽤域就是变量与函数的可访问范围，即作⽤域控制着变量与函数的可见性和⽣命周期</li>
</ul>
<h2 id="var、let-和-const-的区别" tabindex="-1"><a class="header-anchor" href="#var、let-和-const-的区别" aria-hidden="true">#</a> var、let 和 const 的区别</h2>
<p><strong>var</strong></p>
<ul>
<li>全局作用域（变量在哪里声明都可以被访问到）</li>
<li>变量声明提升（变量可以先使用，再声明，但是值为 <code>undfined</code>）</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">1</span>
<span class="token comment">// 值是 undefind</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul>
<li>可以重复声明</li>
</ul>
<blockquote>
<p>以上特点都是缺点！</p>
</blockquote>
<p><strong>let</strong></p>
<ul>
<li>局部作用域（通过<code>{}</code>来区分作用域）常见于函数</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">2</span>
<span class="token comment">// 作用域外</span>
<span class="token keyword">function</span> <span class="token function">fun1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 作用域内</span>
  <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ul>
<li>同一个作用域下不能重复声明</li>
<li>不能变量声明提升</li>
</ul>
<p><strong>const</strong></p>
<ul>
<li>局部作用域（通过<code>{}</code>来区分作用域）常见于函数</li>
<li>同一个作用域下不能重复声明</li>
<li>const 声明必须赋值</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 错误写法</span>
<span class="token keyword">const</span> b

<span class="token comment">// 正确写法</span>
<span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ul>
<li>不能变量声明提升</li>
<li>const 声明的是常量，一旦声明不能改变</li>
</ul>
<blockquote>
<p>基本类型不能改变，引用类型可以更改里面的属性值</p>
</blockquote>
<h2 id="什么是异步函数" tabindex="-1"><a class="header-anchor" href="#什么是异步函数" aria-hidden="true">#</a> 什么是异步函数</h2>
<p>通常情况下，代码的执行顺序都是从上到下执行的，最常见的异步函数就是定时器。异步函数，就是不等一段代码执行完，也继续往下执行。</p>
<h2 id="解释一下什么是事件代理" tabindex="-1"><a class="header-anchor" href="#解释一下什么是事件代理" aria-hidden="true">#</a> 解释一下什么是事件代理</h2>
<p>事件代理（Event Delegation ）有称之为事件委托，是 JavaScript 中绑定事件的常用技巧。</p>
<p>顾名思义，事件代理，即是把原本需要处理的事件委托给父级，让父元素担当事件监听的职务。事件代理的原理是 DOM 元素的事件冒泡。</p>
<p>使用事件代理的好处是提高性能。</p>
<h2 id="说一说对-this-的理解" tabindex="-1"><a class="header-anchor" href="#说一说对-this-的理解" aria-hidden="true">#</a> 说一说对 This 的理解</h2>
<ul>
<li>this 总是指向函数的调用者</li>
<li>如果有 <code>new</code> 关键字，this 指向 new 出来的那个对象</li>
<li>在事件中，this 指向触发这个事件的对象，但是特殊的是： IE 中的 attachEvent 中的 this 指向的 windows</li>
</ul>
<h2 id="事件模型" tabindex="-1"><a class="header-anchor" href="#事件模型" aria-hidden="true">#</a> 事件模型</h2>
<p>W3C 中定义事件的发生经历三个阶段：</p>
<ul>
<li>捕获阶段（ capturing ）</li>
<li>⽬标阶段（ targetin ）</li>
<li>冒泡阶段（ bubbling ）</li>
</ul>
<blockquote>
<p>W3C 标准：标签闭合、标签⼩写、不乱嵌套、使⽤外链 css 和 js 、结构行为表现的分离</p>
</blockquote>
<ul>
<li>
<p>冒泡型事件：当你使⽤事件冒泡时，子级元素先触发，父级元素后触发</p>
</li>
<li>
<p>捕获型事件：当你使⽤事件捕获时，父级元素先触发，子级元素后触发</p>
</li>
<li>
<p>DOM 事件流：同时⽀持两种事件模型：捕获型事件和冒泡型事件</p>
</li>
<li>
<p>阻⽌冒泡：在 W3c 中，使⽤ stopPropagation() ⽅法；在 IE 下设置 cancelBubble = true</p>
</li>
<li>
<p>阻⽌捕获：阻⽌事件的默认⾏为，例如 click - <a> 后的跳转。在 W3c 中，使⽤</p>
</li>
</ul>
<p>preventDefault() ⽅法，在 IE 下设置 window.event.returnValue = false</p>
<h2 id="如何解决跨域问题" tabindex="-1"><a class="header-anchor" href="#如何解决跨域问题" aria-hidden="true">#</a> 如何解决跨域问题</h2>
<blockquote>
<p>跨域是什么？</p>
</blockquote>
<p>跨域，是指浏览器不能执行其他网站的脚本。它是由<strong>浏览器的同源策略</strong>造成的，是浏览器对 JavaScript 实施的安全限制。</p>
<blockquote>
<p>同源策略是什么？</p>
</blockquote>
<p>同源策略是浏览器的一个安全功能，不同源的客户端脚本在没有明确授权的情况下，不能读写对方资源。所以 xyz.com 下的 js 脚本采用 ajax 读取 abc.com 里面的文件数据是会被拒绝的。
相同 ip（域名），同端口，则为同源，否则为不同源。
在默认情况下，在不同源的情况下，是不能使用 ajax 来请求数据的。</p>
<blockquote>
<p>使用 jsonP 跨域</p>
</blockquote>
<p>ajax 默认是不能跨域的，但是 script 标签可以通过 src 属性获得跨域的 js 文件。
需要注意的是 <strong>jsonP 并不属于 ajax，但是 jQuery 把 jsonP 封装在了 ajax 方法中</strong>
jsonP 是在引入 jQuery 之后，在前端发送一个 <code>jsonP</code> 的请求，在后台也要做相应的 jsonP 的配置，前后端相互配合才能正常的交互数据，那么 jsonP 只能处理 GET 请求，那么对于其它的请求，参考下方<strong>设置响应头</strong></p>
<p>jQuery 发送 jsonp 请求实例：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>$<span class="token punctuation">.</span><span class="token function">ajax</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  url<span class="token operator">:</span> <span class="token string">'http://abc.com/'</span><span class="token punctuation">,</span>
  dataType<span class="token operator">:</span> <span class="token string">'jsonp'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">fail</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>axios 发送 jsonp 请求实例</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>axios<span class="token punctuation">.</span><span class="token function">jsonp</span><span class="token punctuation">(</span><span class="token string">'http://abc.com/'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><blockquote>
<p>CORS（设置响应头）</p>
</blockquote>
<p>通过设置 http 协议的响应头部属性<code>Access-Control-Allow-Origin</code>可以允许其他服务器对本服务进行</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>router<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/getdata'</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">ctx</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  ctx<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'Access-Control-Allow-Origin'</span><span class="token punctuation">,</span> <span class="token string">'http://127.0.0.1:8080'</span><span class="token punctuation">)</span>
  <span class="token comment">// ctx.set('Access-Control-Allow-Origin', '服务器地址')</span>
  ctx<span class="token punctuation">.</span>body <span class="token operator">=</span> <span class="token string">'data'</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>如果是 Access-Control-Allow-Origin: *，就代表任何网站都可以来请求
该方式只是服务端做处理即可，客户端不需要任何处理</p>
<blockquote>
<p>服务代理</p>
</blockquote>
<p>如果我们接口服务器和客户端是不同源的，可以在新建一个同源的服务器，作为代理服务器，因为服务器也可以发送请求，而且不受跨域限制，那么就可以使用代理服务器向接口服务器发送请求，那么接口服务器收到请求之后，把数据交给代理服务器，再有代理服务器返回给客户端，实现跨域请求。</p>
<p>那么服务代理在 Vue 中怎么配置呢？</p>
<p>可以通过 Vue cli 的 <code>devServer.proxy</code> 配置可以解决这个问题，详情参见文档：https://cli.vuejs.org/zh/config/#devserver-proxy</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>那么目前比较主流的 就是 CORS 和 服务器代理，jsonp 很少用，因为 jsonp 只支持 get 请求
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="什么是-promise" tabindex="-1"><a class="header-anchor" href="#什么是-promise" aria-hidden="true">#</a> 什么是 promise</h2>
<p>Promise 对象用于表示一个异步函数操作的最终完成（或失败）的结果值。</p>
<p>Promise 是异步编程的一种解决方案：从语法上讲，promise 是一个对象，从它可以获取异步操作的消息。</p>
<p>Promise 有三种状态：<strong>pending（等待态），fulfilled（成功态），rejected（失败态）</strong></p>
<p>使用 <code>Promise.then()</code> 可以通过一个回调函数来获取异步请求成功的数据</p>
<p>使用 <code>promise.catch()</code> 可以通过一个回调函数来获取异步请求失败的结果</p>
<p>可以通过 <code>new</code> 关键字来创建一个 promise 对象：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> pro <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 要做的事情...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>pro<span class="token punctuation">)</span>
<span class="token comment">// Promise {&lt;pending>}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="async-是什么" tabindex="-1"><a class="header-anchor" href="#async-是什么" aria-hidden="true">#</a> async 是什么</h2>
<p>通过 <code>async</code> + <code>await</code> 我们就可以像写同步代码一样来写异步代码了，就不需要再套回调函数了</p>
<p>只要是函数 就可以被标记为 async，async 函数最终的返回值都会返回一个 Promise 对象，如果返回值不是一个 Promise 对象，则将返回值包装到 Promise 中，如果返回值就是一个 Promise 对象，则不作任何处理。</p>
<p>代码示例：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 这里使用 async 来定义了一个函数</span>
<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">fun1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token number">123</span>
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">fun1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// Promise {&lt;fulfilled>: 123}</span>
<span class="token comment">// 那么这时将会返回一个 promise 对象</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></template>
