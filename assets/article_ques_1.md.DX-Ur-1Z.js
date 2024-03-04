import{_ as s,c as a,o as i,V as n}from"./chunks/framework.CGmpdBy1.js";const g=JSON.parse('{"title":"更新面试题","description":"","frontmatter":{},"headers":[],"relativePath":"article/ques/1.md","filePath":"article/ques/1.md","lastUpdated":1709549701000}'),e={name:"article/ques/1.md"},l=n(`<h1 id="更新面试题" tabindex="-1">更新面试题 <a class="header-anchor" href="#更新面试题" aria-label="Permalink to &quot;更新面试题&quot;">​</a></h1><h2 id="什么是异步函数" tabindex="-1">什么是异步函数？ <a class="header-anchor" href="#什么是异步函数" aria-label="Permalink to &quot;什么是异步函数？&quot;">​</a></h2><p>js 是单线程语言，只能同时处理一个任务，如果请求的是后端，这个响应可能是几秒之后才响应，所以要先跳过这个任务，继续向下执行。必须等主进程全部执行完成之后再执行异步函数。就算主进程再慢，也要等主进程全部加载完成之后再加载。</p><h2 id="微任务和宏任务是什么" tabindex="-1">微任务和宏任务是什么？ <a class="header-anchor" href="#微任务和宏任务是什么" aria-label="Permalink to &quot;微任务和宏任务是什么？&quot;">​</a></h2><p>因为 js 是单线程语言，它就好比是一个人在工作，但是同一时间只能做一项工作，所以就产生了任务队列，需要将接下来的工作都放到任务队列里面编排，干完一项任务之后再进行下一项任务。</p><p>但是任务队列还会分成三种：<code>主任务队列、微任务队列、宏任务队列</code>，每种不同的任务类型会放在不同的任务队列中，同步代码从上到下，都会放在 <code>主任务队列</code>中；异步函数，如：<code>setTimeout</code>、<code>setInterval</code>，属于异步函数，会放在 <code>宏任务队列</code>；那么<code>微任务</code>呢，指的就是 <strong>Promise 通过 .then() 的回调</strong>。</p><p>任务也是存在优先级的，他们之间的优先级为：<code>主任务队列 &gt; 微任务队列 &gt; 宏任务队列</code></p><p>例如下面代码演示：</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setTimeout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;setTimeout&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 宏任务</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Promise</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">resolve</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Promise&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 这里也是主进程</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  resolve</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;成功了&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">then</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">res</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(res) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 微任务</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;主进程&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 主进程</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 日志：</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Promise</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 主进程</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 成功了</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// setTimeout</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h2 id="node-有什么优势" tabindex="-1">node 有什么优势？ <a class="header-anchor" href="#node-有什么优势" aria-label="Permalink to &quot;node 有什么优势？&quot;">​</a></h2><p>node 是一个 javascript 的运行环境，使用这个环境去搭建上层的一些应用。可以使用它打、运行，或者当作服务器去运行一些工具，开发环境，这是 node 的主要作用。</p><p>node 处理<a href="https://blog.csdn.net/weixin_42476601/article/details/82220027" target="_blank" rel="noreferrer">高并发</a>是有天然优势的，它的机制就是：单线程、事件循环，事件驱动这个机制可以处理高并发请求，但是 node 主要是做服务器渲染。</p><h2 id="new-操作符都做了什么" tabindex="-1">new 操作符都做了什么？ <a class="header-anchor" href="#new-操作符都做了什么" aria-label="Permalink to &quot;new 操作符都做了什么？&quot;">​</a></h2><ul><li>在内存中新建一个对象</li><li>这个新对象内部的 <code>[[prototype]]</code> 特性被赋值为函数的 <code>prototype</code> 属性</li><li>构造函数内部的 <code>this</code> 被赋值为这个新对象（即 <code>this</code> 指向新对象）</li><li>指向构造函数内部的代码（给新对象添加属性）</li><li>如果构造函数没有返回其它对象，那么就返回刚创建的新对象</li></ul><h2 id="输入-url-回车这一过程中发生了什么" tabindex="-1">输入 url 回车这一过程中发生了什么？ <a class="header-anchor" href="#输入-url-回车这一过程中发生了什么" aria-label="Permalink to &quot;输入 url 回车这一过程中发生了什么？&quot;">​</a></h2><p>主要有三个步骤</p><ol><li>ip 地址的寻址</li></ol><p>首先在浏览器的缓存里查找，有没有这个 ip 地址；然后到 host 文件里查找，有没有配置这个域名的 ip 地址；然后到路由器的缓存里查找，有没有这个域名的 ip 地址；最后到 dns 服务器去查找，如果没有，就到更高一级的 dns 服务器去查找，直到找到为止。</p><ol start="2"><li>请求数据</li></ol><p>首先向这个 ip 地址发起连接请求，进行 tcp 的三次握手，连接建立成功之后呢，服务器就会返回相应的数据。然后就会进行 tcp 断开连接的四次挥手。</p><ol start="3"><li>页面展现</li></ol><p>首先是解析 html 文件，创建 dom 树，然后解析 css，形成 css 对象模型，然后将 css 和 dom 合并，构建渲染树，最后就是布局和绘制渲染树。</p><h2 id="怎么做性能优化" tabindex="-1">怎么做性能优化？ <a class="header-anchor" href="#怎么做性能优化" aria-label="Permalink to &quot;怎么做性能优化？&quot;">​</a></h2><h2 id="如何中断已发出去的请求" tabindex="-1">如何中断已发出去的请求？ <a class="header-anchor" href="#如何中断已发出去的请求" aria-label="Permalink to &quot;如何中断已发出去的请求？&quot;">​</a></h2><h2 id="localstorage-怎么设置过期时间" tabindex="-1">localStorage 怎么设置过期时间？ <a class="header-anchor" href="#localstorage-怎么设置过期时间" aria-label="Permalink to &quot;localStorage 怎么设置过期时间？&quot;">​</a></h2>`,25),t=[l];function p(h,r,k,d,o,c){return i(),a("div",null,t)}const b=s(e,[["render",p]]);export{g as __pageData,b as default};