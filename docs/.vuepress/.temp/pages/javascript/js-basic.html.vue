<template><h1 id="基础" tabindex="-1"><a class="header-anchor" href="#基础" aria-hidden="true">#</a> 基础</h1>
<h2 id="js-数据类型" tabindex="-1"><a class="header-anchor" href="#js-数据类型" aria-hidden="true">#</a> JS 数据类型</h2>
<p>数据类型除了 Number 、 String 、 Boolean 、 Object、 null 和 undefined ，还新增了 Symbol</p>
<ul>
<li>Symbol 是原始数据类型</li>
</ul>
<blockquote>
<p>什么是原始数据类型？什么是引用数据类型？</p>
</blockquote>
<ul>
<li>原始数据类型：Undefined，Null，Boolean，Number、String</li>
<li>引用数据类型：对象、数组、函数</li>
</ul>
<h2 id="unicode-码" tabindex="-1"><a class="header-anchor" href="#unicode-码" aria-hidden="true">#</a> Unicode 码</h2>
<p>可以在网页上打印 Unicode 编码的汉字数字或者字母</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'\u0061'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// a</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"\u4f60\u597d\u5417"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 你好吗</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"\u35\u32\u30"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 520</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>转换网站 http://tool.sufeinet.com/Code/ChineseUnicode.aspx</p>
<h2 id="本地存储" tabindex="-1"><a class="header-anchor" href="#本地存储" aria-hidden="true">#</a> 本地存储</h2>
<ol>
<li>添加本地存储</li>
</ol>
<blockquote>
<p>里面包含两个参数 1 是本地存储名称 2 是本地存储内容</p>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>window<span class="token punctuation">.</span>localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">'名称'</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>本地存储名称是<code>user</code>存储的内容是<code>data</code></p>
<ol start="2">
<li>获取本地存储数据</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>window<span class="token punctuation">.</span>localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'名称'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><blockquote>
<p>这里只包含一个参数 就是本地存储的名称</p>
</blockquote>
<ol start="3">
<li>删除本地存储</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>window<span class="token punctuation">.</span>localStorage<span class="token punctuation">.</span><span class="token function">removeItem</span><span class="token punctuation">(</span><span class="token string">'名称'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>注：本地存储只能存储字符串</strong></p>
<h2 id="关于-json" tabindex="-1"><a class="header-anchor" href="#关于-json" aria-hidden="true">#</a> 关于 JSON</h2>
<h3 id="json-stringify" tabindex="-1"><a class="header-anchor" href="#json-stringify" aria-hidden="true">#</a> JSON.stringify()</h3>
<p>使用 <code>JSON.stringify()</code> 方法可以将对象转换为 JSON 对象</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">'张同学'</span><span class="token punctuation">,</span>
  age<span class="token operator">:</span> <span class="token number">39</span><span class="token punctuation">,</span>
  arr<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// {"name":"张同学","age":39,"arr":[1,2,3,4]}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>也可以接收第二个参数，用于过滤，可以接收一个数组或函数</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">'张同学'</span><span class="token punctuation">,</span>
  age<span class="token operator">:</span> <span class="token number">39</span><span class="token punctuation">,</span>
  arr<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">'age'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// {"age":39}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>通过第二个参数过滤出 <code>age</code></p>
<p>第三个参数是代表每行的缩进数量，最大为 10</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">'张同学'</span><span class="token punctuation">,</span>
  age<span class="token operator">:</span> <span class="token number">39</span><span class="token punctuation">,</span>
  arr<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>结果如下：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"张同学"</span><span class="token punctuation">,</span>
  <span class="token property">"age"</span><span class="token operator">:</span> <span class="token number">39</span><span class="token punctuation">,</span>
  <span class="token property">"arr"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="json-parse" tabindex="-1"><a class="header-anchor" href="#json-parse" aria-hidden="true">#</a> JSON.parse()</h3>
<p>使用 <code>JSON.parse()</code> 方法可以将 JSON 对象转换为对象</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> json <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">{"name":"张同学","age":39,"arr":[1,2,3,4]}</span><span class="token template-punctuation string">`</span></span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>json<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// {name: '张同学', age: 39, arr: Array(4)}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="运算符" tabindex="-1"><a class="header-anchor" href="#运算符" aria-hidden="true">#</a> 运算符</h2>
<h3 id="一元运算符" tabindex="-1"><a class="header-anchor" href="#一元运算符" aria-hidden="true">#</a> 一元运算符</h3>
<p>关于 a++ 和 ++a 的问题</p>
<p>正常在不参与运算的情况下是没什么区别的</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">2</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token operator">++</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token operator">++</span>a<span class="token punctuation">)</span>
<span class="token comment">// 结果都是3</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>那么再参与运算时</p>
<ul>
<li>先++</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">2</span>
<span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token number">4</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a <span class="token operator">+</span> <span class="token operator">++</span>b<span class="token punctuation">)</span>
<span class="token comment">// 结果为7 ++放到前面 b先自增 b+1 + a</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul>
<li>后++</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">2</span>
<span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token number">4</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a <span class="token operator">+</span> b<span class="token operator">++</span><span class="token punctuation">)</span>
<span class="token comment">// 结果为6 ++放到后面 b后自增 b + a</span>
<span class="token comment">// b++ 是在 算完 b + a 只后再自增的 所以再打印 b 就是5了</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="逻辑与" tabindex="-1"><a class="header-anchor" href="#逻辑与" aria-hidden="true">#</a> 逻辑与 &amp;&amp;</h3>
<p>用于检查所有值（通常值为条件）是否为真。</p>
<p>它将返回第一个值 false，否则返回最终值。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> isTrue <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token keyword">const</span> isFalse <span class="token operator">=</span> <span class="token boolean">false</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>isFalse <span class="token operator">&amp;&amp;</span> isTrue<span class="token punctuation">)</span> <span class="token comment">// false</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>isTrue <span class="token operator">&amp;&amp;</span> isFalse<span class="token punctuation">)</span> <span class="token comment">// false</span>

<span class="token keyword">const</span> toto <span class="token operator">=</span> <span class="token number">5</span> <span class="token operator">&amp;&amp;</span> <span class="token number">3</span> <span class="token operator">&amp;&amp;</span> <span class="token number">1</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>toto<span class="token punctuation">)</span> <span class="token comment">// 1</span>

<span class="token keyword">const</span> tutu <span class="token operator">=</span> <span class="token number">5</span> <span class="token operator">&amp;&amp;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> <span class="token number">2</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>tutu<span class="token punctuation">)</span> <span class="token comment">// 0</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="逻辑或" tabindex="-1"><a class="header-anchor" href="#逻辑或" aria-hidden="true">#</a> 逻辑或 ||</h3>
<p>用于检查一组值中的一个值（通常值是条件）是否为真。</p>
<p>它将返回第一个值 true，否则返回最终值。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> isTrue <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token keyword">const</span> isFalse <span class="token operator">=</span> <span class="token boolean">false</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>isFalse <span class="token operator">||</span> isTrue<span class="token punctuation">)</span> <span class="token comment">// true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>isTrue <span class="token operator">||</span> isFalse<span class="token punctuation">)</span> <span class="token comment">// true</span>

<span class="token keyword">const</span> toto <span class="token operator">=</span> <span class="token number">5</span> <span class="token operator">||</span> <span class="token number">3</span> <span class="token operator">||</span> <span class="token number">1</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>toto<span class="token punctuation">)</span> <span class="token comment">// 5</span>

<span class="token keyword">const</span> tutu <span class="token operator">=</span> <span class="token number">0</span> <span class="token operator">||</span> <span class="token number">5</span> <span class="token operator">||</span> <span class="token number">2</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>tutu<span class="token punctuation">)</span> <span class="token comment">// 5</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="逻辑空" tabindex="-1"><a class="header-anchor" href="#逻辑空" aria-hidden="true">#</a> 逻辑空 ??</h3>
<p>当其左侧操作数为 null 或 undefined （空值）时，返回其右侧操作数。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">null</span> <span class="token operator">??</span> <span class="token number">12</span><span class="token punctuation">)</span> <span class="token comment">// 12</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">undefined</span> <span class="token operator">??</span> <span class="token number">12</span><span class="token punctuation">)</span> <span class="token comment">// 12</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">55</span> <span class="token operator">??</span> <span class="token number">12</span><span class="token punctuation">)</span> <span class="token comment">// 55</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">55</span> <span class="token operator">??</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token comment">// 55</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">55</span> <span class="token operator">??</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token comment">// 55</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><blockquote>
<p>注意：??运算符与||不同，因此当你需要根据其他值来赋值时，应该选择正确的运算符！</p>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> toto <span class="token operator">=</span> <span class="token number">0</span> <span class="token operator">||</span> <span class="token number">55</span> <span class="token comment">// 0 为false 所以是55</span>
<span class="token keyword">const</span> titi <span class="token operator">=</span> <span class="token number">0</span> <span class="token operator">??</span> <span class="token number">55</span> <span class="token comment">// 0不是null或者undefined，所以是0</span>

<span class="token keyword">const</span> tutu <span class="token operator">=</span> <span class="token keyword">undefined</span> <span class="token operator">||</span> <span class="token number">55</span> <span class="token comment">// undefined 为false，所以是55</span>
<span class="token keyword">const</span> tata <span class="token operator">=</span> <span class="token keyword">undefined</span> <span class="token operator">??</span> <span class="token number">55</span> <span class="token comment">// 第一个是undefined，所以是55</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="关于-switch-语句" tabindex="-1"><a class="header-anchor" href="#关于-switch-语句" aria-hidden="true">#</a> 关于 switch 语句</h2>
<p>例如：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> name <span class="token operator">=</span> <span class="token string">'小明'</span>

<span class="token keyword">switch</span> <span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">case</span> <span class="token string">'小明'</span><span class="token operator">:</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'这是小明'</span><span class="token punctuation">)</span>
    <span class="token keyword">break</span>
  <span class="token keyword">case</span> <span class="token string">'小张'</span><span class="token operator">:</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'这是小张'</span><span class="token punctuation">)</span>
    <span class="token keyword">break</span>
  <span class="token keyword">default</span><span class="token operator">:</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'我谁也不是'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>例子中 我们要判断<code>name</code>来输出不同的内容，它会用<code>name</code>来和<code>case</code>的每一个字段进行相比，如果成立，就执行下面的内容，如果碰到<code>break</code>就退出<code>switch</code>。</p>
<p>如果一直都没有找到成立项，那么就执行<code>default</code>的内容</p>
<p>那么如果想要有两个字段有统一的处理方式的话，也可以这么写：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> item <span class="token operator">=</span> <span class="token string">'hello'</span>

<span class="token keyword">switch</span> <span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">case</span> <span class="token string">'hello'</span><span class="token operator">:</span>
  <span class="token keyword">case</span> <span class="token string">'Hi'</span><span class="token operator">:</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'你好啊'</span><span class="token punctuation">)</span>
    <span class="token keyword">break</span>
  <span class="token keyword">case</span> <span class="token string">'yes'</span><span class="token operator">:</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'是的'</span><span class="token punctuation">)</span>
    <span class="token keyword">break</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>这里要判断的值是<code>item</code>上面代码意思是：<code>item</code>的值是<code>hello</code>或者<code>Hi</code>的其中一个，都是可以执行<code>break</code>前的内容的，两个内容使用统一的处理方式</p>
<h2 id="关于-console" tabindex="-1"><a class="header-anchor" href="#关于-console" aria-hidden="true">#</a> 关于 console</h2>
<p><code>console.log()</code> 在控制台上输出信息</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'这的一段信息'</span><span class="token punctuation">)</span>

<span class="token comment">// 这的一段信息</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><code>console.table()</code> 用于打印数组结构</p>
<p>比如，我们在定义一个数组的时候，要是在控制台打印是这样的：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span>
<span class="token comment">// (4) [1, 3, 5, 6]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>类似数组，可以通过 console.table() 来更直观的打印出：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span>
console<span class="token punctuation">.</span><span class="token function">table</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>打印结果为：</p>
<table>
<thead>
<tr>
<th>(index)</th>
<th style="text-align:left">value</th>
</tr>
</thead>
<tbody>
<tr>
<td>0</td>
<td style="text-align:left">1</td>
</tr>
<tr>
<td>1</td>
<td style="text-align:left">3</td>
</tr>
<tr>
<td>2</td>
<td style="text-align:left">5</td>
</tr>
<tr>
<td>3</td>
<td style="text-align:left">6</td>
</tr>
</tbody>
</table>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">Array</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>会打印出 索引对应的值</p>
<p><code>console.error()</code> 用于错误信息提示</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'这是一段错误信息'</span><span class="token punctuation">)</span>
<span class="token comment">// 这是一段错误信息</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><code>console.warn()</code> 用于打印警告信息</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span><span class="token string">'这是一段警告信息'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="普通事件和事件绑定" tabindex="-1"><a class="header-anchor" href="#普通事件和事件绑定" aria-hidden="true">#</a> 普通事件和事件绑定</h2>
<p>两种事件分别来说说：</p>
<ul>
<li>普通事件（onclick）</li>
</ul>
<p>普通事件就是直接触发事件，同一时间只能指向唯一对象，所以会被覆盖掉。代码如下：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> btn2 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.btn2'</span><span class="token punctuation">)</span>

btn2<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'哈哈哈哈哈哈'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

btn2<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'呵呵呵呵呵呵'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>这样只会输出<code>呵呵呵呵呵呵</code>，以为后面的代码会覆盖掉前面的，个 click 处理器在同一时间只能指向唯一的对象。所以就算一个对象绑定了多次，其结果只会出现最后的一次绑定的对象</p>
<ul>
<li>事件绑定（addEventListener）</li>
</ul>
<p>事件绑定就是对于一个可以绑定的事件对象，进行多次绑定事件都能运行。代码如下：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> btn1 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.btn1'</span><span class="token punctuation">)</span>

btn1<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'11111'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

btn1<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'222222'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>这样会依次输出 <code>11111</code>和<code>222222</code></p>
<h2 id="计算程序执行的时间" tabindex="-1"><a class="header-anchor" href="#计算程序执行的时间" aria-hidden="true">#</a> 计算程序执行的时间</h2>
<p>上面，通过随机数的方法可以获取程序所执行的时间，它是原理是</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 开始执行 for 循环的时间戳</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">22222220</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">// 执行 for 循环</span>
<span class="token keyword">const</span> b <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 结束 for 循环的时间戳</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b <span class="token operator">-</span> a<span class="token punctuation">)</span> <span class="token comment">// 两个时间戳相减 = for 循环所用的时间(毫秒)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>其实，如果想要计算程序执行的时间，可以尝试下面的方法</p>
<p>我们只知道 <code>console.log()</code> 可以在浏览器控制台内打印出数据</p>
<p>其实 <code>console.</code> 后面还可以有很多别的参数，比如下面方法就可以计算程序执行的时间：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">time</span><span class="token punctuation">(</span><span class="token string">'for'</span><span class="token punctuation">)</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">22222220</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">22222220</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">22222220</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">timeEnd</span><span class="token punctuation">(</span><span class="token string">'for'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><blockquote>
<p><code>console.time()</code> 和 <code>console.timeEnd()</code> 是相互对应的两个标签，计算的就是中间包裹住程序所执行的时间，里面名称可以自定义，但是开始和结束的名称必须对应！</p>
<p><strong>参数填写错误浏览器会有警告！（不是报错）</strong></p>
</blockquote>
<h2 id="set-和-map-数据结构" tabindex="-1"><a class="header-anchor" href="#set-和-map-数据结构" aria-hidden="true">#</a> Set 和 Map 数据结构</h2>
<h3 id="set" tabindex="-1"><a class="header-anchor" href="#set" aria-hidden="true">#</a> Set()</h3>
<p>ES6 提供了新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值</p>
<p>创建一个 <code>Set</code> 数据结构也很简单：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> setArr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>setArr<span class="token punctuation">)</span>

<span class="token comment">// Set(0) {}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>下面说一下 Sat 数据结构的一些常用方法</p>
<p><code>add()</code> 添加元素</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> setArr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
setArr<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">'1'</span><span class="token punctuation">)</span>
setArr<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">43</span><span class="token punctuation">)</span>
setArr<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">56</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
setArr<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">'小明'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>setArr<span class="token punctuation">)</span>

<span class="token comment">// Set(4) {"1", 43, Array(3), {…}}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><blockquote>
<p>可以添加任何数据类型</p>
</blockquote>
<p>但是如果添加一样的元素，那么就只会留下一个</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> setArr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
setArr<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">'1'</span><span class="token punctuation">)</span>
setArr<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">'1'</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>setArr<span class="token punctuation">)</span>

<span class="token comment">// Set(1) {"1"}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p><code>delete()</code> 删除元素</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> setArr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
setArr<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">'1'</span><span class="token punctuation">)</span>
setArr<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">678</span><span class="token punctuation">)</span>
setArr<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token string">'1'</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>setArr<span class="token punctuation">)</span>

<span class="token comment">// Set(1) {678}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><code>has()</code> 检测集合中有无指定元素（返回布尔值）</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 检测集合中有无字符串1</span>
<span class="token keyword">const</span> setArr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
setArr<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">'1'</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>setArr<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span><span class="token string">'1'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// true</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p><code>size</code> 检测集合的长度</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> setArr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
setArr<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">34</span><span class="token punctuation">)</span>
setArr<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">45</span><span class="token punctuation">)</span>
setArr<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>setArr<span class="token punctuation">.</span>size<span class="token punctuation">)</span>

<span class="token comment">// 3</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>将 Set 转换为数组</p>
<p>可以使用 Es6 的扩展运算符 <strong>...</strong> 对 Set 展开进行转换</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> setArr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>setArr<span class="token punctuation">]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span>

<span class="token comment">// (4) [1, 3, 4, 6]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="map" tabindex="-1"><a class="header-anchor" href="#map" aria-hidden="true">#</a> Map()</h3>
<p>Map 类型实际上是键值对的有序集合，键和值是任意类型</p>
<blockquote>
<p>键值对：一个键对应一个值</p>
</blockquote>
<p><code>set()</code> 添加元素</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> mapList <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
mapList<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'name'</span><span class="token punctuation">,</span> <span class="token string">'张三'</span><span class="token punctuation">)</span>
mapList<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'age'</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>mapList<span class="token punctuation">)</span>

<span class="token comment">// Map(2) {"name" => "张三", "age" => 12}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><blockquote>
<p>set 方法传入两参数，一个是键名，一个键值</p>
</blockquote>
<p><code>get()</code> 通过指定键名获取键值</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> mapList <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
mapList<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'name'</span><span class="token punctuation">,</span> <span class="token string">'张三'</span><span class="token punctuation">)</span>
mapList<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'age'</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>mapList<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'name'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// 张三</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p><code>has()</code> 、 <code>delete()</code> 方法和 Set 用法一样</p>
<h2 id="indexof-方法" tabindex="-1"><a class="header-anchor" href="#indexof-方法" aria-hidden="true">#</a> indexOf () 方法</h2>
<p>返回指定字符在字符串或者数组中第一次出现处的索引，如果此字符串中没有这样的字符，则返回 -1。</p>
<p><strong>该方法是从数组的左侧向右侧查找</strong></p>
<blockquote>
<p>字符串：</p>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token string">'12334'</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 没有 0 输出 -1</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 有 2 输出2的索引 1</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><blockquote>
<p>数组：</p>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 没有 0 输出 -1</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 有 4 输出4的索引 2</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><blockquote>
<p>indexOf () 方法 是严格类型查找，比如下面实例中：</p>
</blockquote>
<p>比如数组中有一个字符串<code>'7'</code> 那么是查找不到的</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">'7'</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// -1</span>
<span class="token comment">// 严格类型匹配查询不到字符串7，所以返回 -1</span>

<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">'7'</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">'7'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// 这样查找字符串7才可以返回索引值：2</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><blockquote>
<p>indexOf () 方法 是可以有两个参数的</p>
</blockquote>
<p>第一个参数为要查找的元素</p>
<p>第二个参数为查找开始的位置</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">'7'</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// 虽然数组中存在 1，但是从第二位开始查找，后面找不大，所以返回 -1</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>同样，类似的方法还有：</p>
<p><strong>lastIndexOf()</strong></p>
<p>同样是用于查找指定字符在字符串或者数组中第一次出现处的索引，如果此字符串中没有这样的字符，则返回 -1</p>
<p>不过<code>lastIndexOf()</code>是从右往左查找的</p>
<p>比如：数组中有两个<code>7</code> 这时返回的就是从右侧查找到的第一个 <code>7</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">]</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span><span class="token function">lastIndexOf</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 5</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="关于基本类型和引用类型内存覆盖问题" tabindex="-1"><a class="header-anchor" href="#关于基本类型和引用类型内存覆盖问题" aria-hidden="true">#</a> 关于基本类型和引用类型内存覆盖问题</h2>
<ul>
<li>基本类型</li>
</ul>
<p>例：当定义了一个值 <code>a</code> 之后，但是又将 <code>b = a</code> 再给 <code>b</code> 赋新的值</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">let</span> b <span class="token operator">=</span> a
b <span class="token operator">=</span> <span class="token number">99</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token comment">// 1</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span> <span class="token comment">// 99</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>这时候的 a 仍然是 1，b 的值的 99</p>
<blockquote>
<p>目前内存当中是有一个数据 a 那么让 b = a 之后，内存中又产生了一个新的值为 b，所以分别打印出来就是内存中两个不同的值 a 和 b</p>
</blockquote>
<p>同样的处理那么在引用类型中：</p>
<ul>
<li>引用类型</li>
</ul>
<p>这里使用数组举例</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> arr1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span>
<span class="token keyword">let</span> arr2 <span class="token operator">=</span> arr1
arr1<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">'hello'</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr1<span class="token punctuation">)</span> <span class="token comment">// [1, "hello", 5, 6]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr2<span class="token punctuation">)</span> <span class="token comment">// [1, "hello", 5, 6]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>那么这时候 arr1 和 arr2 同事输出 [1, &quot;hello&quot;, 5, 6]</p>
<blockquote>
<p>目前内存当中是有一个数组 arr1 那么让 arr2 = arr1 之后，并不是又复制了一个数组，而是两个变量使用的同一个数组，所以打印出来的就是内存中被改变出来的数组</p>
</blockquote>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>所以，基本类型重新赋值会在内存中重新生成，引用类型新的变量会公用之前的内容
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="referer-说明" tabindex="-1"><a class="header-anchor" href="#referer-说明" aria-hidden="true">#</a> Referer 说明</h2>
<p>解决关于图片请求失败 403 报错问题解决</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>GET https://img2018.cnblogs.com/blog/1480369/201809/1480369-20180929001746684-197810269.jpg <span class="token number">403</span> <span class="token punctuation">(</span>Forbidden<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><blockquote>
<p>为什么项目中有时候图片加载失败后报错会返回 403？</p>
</blockquote>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>因为有些项目中的数据是通过爬虫抓取第三方的数据来进行展示的，而第三方对图片做了放到链保护处理，也就是说不能让你直接通过图片地址访问图片资源。
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><blockquote>
<p>第三方平台是怎么处理图片资源保护的呢？</p>
</blockquote>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>服务器一般使用 Referer 请求头识别图片来源，然后处理资源访问。
我们在浏览器中发的任何请求，都会携带一个叫 Referer 的字段，会包含请求资源来源页面的地址，也就是你从哪里来的，如果你从网站 A 来的，那么 Referer 就是网站 A 的地址。
服务器一般使用 Referer 请求头识别来源，可能会进行统计分析、日志记录以及缓存优化等
那么服务器一看不是自己的网站，那么就会禁止访问，返回 403，不允许请求。
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>需要注意的是：<code>referer</code> 实际是 <strong>referrer</strong> 错误拼写。</p>
<p>打开浏览器的控制台 Network 中，我们发送的任何请求都会携带 Referer</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>Referer: http://localhost:8080/
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><blockquote>
<p>怎么解决？</p>
</blockquote>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>那么就不要发送 Referer，这样对方服务器就不知道你是从哪里来的了，姑且认为你是自己人吧。
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><blockquote>
<p>如何设置？</p>
</blockquote>
<p>能发 Referer 的资源有很多，比如;</p>
<p><code>&lt;a&gt;</code>、<code>&lt;img&gt;</code>、<code>&lt;script&gt;</code>、<code>&lt;area&gt;</code> 或者 <code>&lt;link&gt;</code></p>
<p>可以单独设置禁止发送 Referer</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://.....<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span> <span class="token attr-name">referrerpolicy</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>no-referrer<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>也可以在 HTML 页面头部通过 meta 标签属性全局配置</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>referrer<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>no-referrer<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="url-createobjecturl" tabindex="-1"><a class="header-anchor" href="#url-createobjecturl" aria-hidden="true">#</a> URL.createObjectURL()</h2>
<p>该方法多数用于图片预览</p>
<p>具体参加文档：<a href="https://developer.mozilla.org/zh-CN/search?q=URL.createObjectURL%28%29" target="_blank" rel="noopener noreferrer">URL.createObjectURL() <ExternalLinkIcon/></a></p>
<p>实例，通过 input 上传图片预览出上传的图片：</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>X-UA-Compatible<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>IE=edge<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>file<span class="token punctuation">"</span></span> <span class="token attr-name">accept</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>image/*<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
      <span class="token keyword">const</span> inp <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'input'</span><span class="token punctuation">)</span>
      <span class="token keyword">const</span> img <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'img'</span><span class="token punctuation">)</span>
      inp<span class="token punctuation">.</span><span class="token function-variable function">onchange</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> blob <span class="token operator">=</span> <span class="token constant">URL</span><span class="token punctuation">.</span><span class="token function">createObjectURL</span><span class="token punctuation">(</span>inp<span class="token punctuation">.</span>files<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
        img<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">'src'</span><span class="token punctuation">,</span> blob<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h2 id="symbol-数据类型" tabindex="-1"><a class="header-anchor" href="#symbol-数据类型" aria-hidden="true">#</a> Symbol 数据类型</h2>
<p>Symbol 数据库类型是特点是：<strong>值是唯一的</strong></p>
<p>可以通过<code>Symbol()</code> 创建一个 Symbol()</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> a<span class="token punctuation">)</span> <span class="token comment">// Symbol</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a <span class="token operator">===</span> b<span class="token punctuation">)</span> <span class="token comment">// false</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>Symbol 并不是一个对象，可以把它理解为一个字符串，一个永远都不会重复的字符串，所以它是原始类型。</p>
<blockquote>
<p>可以给 Symbol 添加一个描述：</p>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">'这是一段文字'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">'你好吗'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>用 js 内置的方法 <code>description</code> 提取出描述信息，并以字符串形式打印</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">'这是一段文字'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">'你好吗'</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>description<span class="token punctuation">)</span> <span class="token comment">// 这是一段文字</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">.</span>description<span class="token punctuation">)</span> <span class="token comment">// 你好吗</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><blockquote>
<p>除此之外，还可以使用 <code>Symbol.for()</code> 来定义</p>
</blockquote>
<p>这样定义的也可以在内部添加描述，但是这样的好处是：如果两次定义完全一样，那么两个变量会公用一个内容地址：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> Symbol<span class="token punctuation">.</span><span class="token function">for</span><span class="token punctuation">(</span><span class="token string">'这是一段文字'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> b <span class="token operator">=</span> Symbol<span class="token punctuation">.</span><span class="token function">for</span><span class="token punctuation">(</span><span class="token string">'这是一段文字'</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a <span class="token operator">===</span> b<span class="token punctuation">)</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>那么这样再判断的话，两个变量就相等了</p>
<p>这样声明的话，可以使用 <code>Symbol.keyFor()</code> 来获得描述的文字</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> Symbol<span class="token punctuation">.</span><span class="token function">for</span><span class="token punctuation">(</span><span class="token string">'这是一段文字'</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Symbol<span class="token punctuation">.</span><span class="token function">keyFor</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 这是一段文字</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>实际应用，当有两个人的名字的一样的时候，可以使用 <code>Symbol</code> 来定义每个键值作为区分：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> user1 <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">'李四'</span><span class="token punctuation">,</span>
  key<span class="token operator">:</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> user2 <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">'李四'</span><span class="token punctuation">,</span>
  key<span class="token operator">:</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span>user1<span class="token punctuation">.</span>key<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    js<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
    css<span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span>user2<span class="token punctuation">.</span>key<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    js<span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span>
    css<span class="token operator">:</span> <span class="token number">21</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token comment">// {Symbol(): {…}, Symbol(): {…}}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">[</span>user1<span class="token punctuation">.</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// {js: 100, css: 20}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">[</span>user2<span class="token punctuation">.</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// {js: 30, css: 21}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p>在对象中，如果存在 Symbol 类型时，通过普通的<code>for in</code> 或者 <code>for of</code> 循环是遍历不到的：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> age <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">'age'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">'张三'</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span>age<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token comment">// 普通的方式遍历只能得到普通的值</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> key <span class="token keyword">of</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span> <span class="token comment">// name</span>
<span class="token punctuation">}</span>

<span class="token comment">// 使用 Object.getOwnPropertySymbols() 方法之可以遍历出 Symbol 类型</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> key <span class="token keyword">of</span> Object<span class="token punctuation">.</span><span class="token function">getOwnPropertySymbols</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span> <span class="token comment">// Symbol(age)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 如果想要遍历出所有的类型，需要使用 Reflect.ownKeys() 静态方法才可以实现</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> key <span class="token keyword">of</span> Reflect<span class="token punctuation">.</span><span class="token function">ownKeys</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
  <span class="token comment">// name</span>
  <span class="token comment">// Symbol(age)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h2 id="window-对象属性" tabindex="-1"><a class="header-anchor" href="#window-对象属性" aria-hidden="true">#</a> window 对象属性</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// navigator 导航器对象</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>navigator<span class="token punctuation">.</span>appCodeName<span class="token punctuation">)</span> <span class="token comment">// 返回浏览器的代码名</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>navigator<span class="token punctuation">.</span>appName<span class="token punctuation">)</span> <span class="token comment">// 返回浏览器的名称</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>navigator<span class="token punctuation">.</span>appVersion<span class="token punctuation">)</span> <span class="token comment">// 返回浏览器的平台版本信息</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>navigator<span class="token punctuation">.</span>cookieEnabled<span class="token punctuation">)</span> <span class="token comment">// 返回浏览器中是否使用 cookie 的布尔值</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>navigator<span class="token punctuation">.</span>platform<span class="token punctuation">)</span> <span class="token comment">// 返回浏览器的操作系统平台</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>navigator<span class="token punctuation">.</span>userAgent<span class="token punctuation">)</span> <span class="token comment">// 返回由客户机发送服务器的 user-agent 头部</span>

<span class="token comment">// screen 显示器对象</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>screen<span class="token punctuation">.</span>availHeight<span class="token punctuation">)</span> <span class="token comment">// 返回显示器可用的高度</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>screen<span class="token punctuation">.</span>availWidth<span class="token punctuation">)</span> <span class="token comment">// 返回显示器可用的宽度</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>screen<span class="token punctuation">.</span>height<span class="token punctuation">)</span> <span class="token comment">// 返回屏幕像素高度</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>screen<span class="token punctuation">.</span>width<span class="token punctuation">)</span> <span class="token comment">// 返回屏幕像素宽度</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>screen<span class="token punctuation">.</span>colorDepth<span class="token punctuation">)</span> <span class="token comment">// 返回屏幕颜色的位数</span>

<span class="token comment">// history 历史对象</span>
window<span class="token punctuation">.</span>history<span class="token punctuation">.</span><span class="token function">back</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 返回上一个 url</span>
window<span class="token punctuation">.</span>history<span class="token punctuation">.</span><span class="token function">forward</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 返回下一个 url</span>
window<span class="token punctuation">.</span>history<span class="token punctuation">.</span><span class="token function">go</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 返回某个具体页面</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h2 id="typeof-和-instanceof" tabindex="-1"><a class="header-anchor" href="#typeof-和-instanceof" aria-hidden="true">#</a> typeof 和 instanceof</h2>
<p><code>typeof</code>可以判断一个变量是原始类型中的那种类型，但是在下面情况中，就会显得不那么的友好：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">const</span> n <span class="token operator">=</span> <span class="token keyword">null</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> arr<span class="token punctuation">)</span> <span class="token comment">// object</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> obj<span class="token punctuation">)</span> <span class="token comment">// object</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> n<span class="token punctuation">)</span> <span class="token comment">// object</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>可见，使用 <code>typeof</code> 方法之后，在判断数组，对象和 null 的时候，返回的结果都是 <code>object</code>，但是我们要判断引用类型具体是什么类型，就需要使用 <code>instanceof</code>了：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr <span class="token keyword">instanceof</span> <span class="token class-name">Array</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj <span class="token keyword">instanceof</span> <span class="token class-name">Object</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>这样就可以很好的分清楚是对象还是数组了</p>
<blockquote>
<p>注意：instanceof 只能进行检查引用类型，检查原始类型全部返回 false！</p>
</blockquote>
<h2 id="mutationobserver-接口" tabindex="-1"><a class="header-anchor" href="#mutationobserver-接口" aria-hidden="true">#</a> MutationObserver 接口</h2>
<p><code>MutationObserver</code>用于观察 dom 发生改变，基本语法</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> obs <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MutationObserver</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'dom 发生了改变'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="observe-方法" tabindex="-1"><a class="header-anchor" href="#observe-方法" aria-hidden="true">#</a> observe 方法</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> obs <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MutationObserver</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'dom 发生了改变'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
obs<span class="token punctuation">.</span><span class="token function">observe</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span>body<span class="token punctuation">,</span> <span class="token punctuation">{</span> attributes<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">'class'</span><span class="token punctuation">,</span> <span class="token string">'body'</span><span class="token punctuation">)</span>

<span class="token comment">// dom 发生了改变</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="接收参数" tabindex="-1"><a class="header-anchor" href="#接收参数" aria-hidden="true">#</a> 接收参数</h3>
<p>回调可以接收一个参数，参数内部包含发生了什么变化</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> obs <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MutationObserver</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">)</span>
obs<span class="token punctuation">.</span><span class="token function">observe</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span>body<span class="token punctuation">,</span> <span class="token punctuation">{</span> attributes<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">'class'</span><span class="token punctuation">,</span> <span class="token string">'body'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><strong>输出结果</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>[MutationRecord]
0: MutationRecord
addedNodes: NodeList []
attributeName: "class"
attributeNamespace: null
nextSibling: null
oldValue: null
previousSibling: null
removedNodes: NodeList []
target: body.body
type: "attributes"
[[Prototype]]: MutationRecord
length: 1
[[Prototype]]: Array(0)
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>第二个参数是观察变化的实例</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> obs <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MutationObserver</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">e<span class="token punctuation">,</span> v</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">,</span> v<span class="token punctuation">)</span><span class="token punctuation">)</span>
obs<span class="token punctuation">.</span><span class="token function">observe</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span>body<span class="token punctuation">,</span> <span class="token punctuation">{</span> attributes<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">'class'</span><span class="token punctuation">,</span> <span class="token string">'body'</span><span class="token punctuation">)</span>

<span class="token comment">// [MutationRecord] MutationObserver {}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="disconnect-方法" tabindex="-1"><a class="header-anchor" href="#disconnect-方法" aria-hidden="true">#</a> disconnect 方法</h3>
<p>默认情况下，只要被观察的元素不被垃圾回收，MutationObserver 的回调就会响应 dom 变化事件，而被执行，要想提前终止执行回调，可以使用 <code>disconnect</code> 方法</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> obs <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MutationObserver</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'body 发生改变'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
obs<span class="token punctuation">.</span><span class="token function">observe</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span>body<span class="token punctuation">,</span> <span class="token punctuation">{</span> attributes<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>className <span class="token operator">=</span> <span class="token string">'body'</span>
obs<span class="token punctuation">.</span><span class="token function">disconnect</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>className <span class="token operator">=</span> <span class="token string">'body2'</span>

<span class="token comment">// 没有日志输出</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>调用<code>disconnect </code> 函数之后，不仅会停止事件后的回调，也会抛弃之前的回调</p>
<h2 id="访问器保护数据" tabindex="-1"><a class="header-anchor" href="#访问器保护数据" aria-hidden="true">#</a> 访问器保护数据</h2>
<p>在正常对象中，对象中的属性我们是可以随意设置和更改的，但是有些时候并不希望某些值被设置了不可控的值，比如：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">'张同学'</span><span class="token punctuation">,</span>
  age<span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

user<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">19999</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span> <span class="token comment">// {name: '张同学', age: 19999}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>所以就需要加以限制，需要在对象中新建两个获取函数，分别使用 <code>set</code> 和 <code>get</code> 声明，那么每次获取和修改都会经过这里，来进行判断</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token punctuation">{</span>
  data<span class="token operator">:</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">'张同学'</span><span class="token punctuation">,</span>
    age<span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token keyword">set</span> <span class="token function">age</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> val <span class="token operator">!==</span> <span class="token string">'number'</span> <span class="token operator">||</span> val <span class="token operator">&lt;</span> <span class="token number">1</span> <span class="token operator">||</span> val <span class="token operator">></span> <span class="token number">100</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">'年龄格式错误'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>age <span class="token operator">=</span> val
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token keyword">get</span> <span class="token function">age</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>age
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p><strong>批量设置属性</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">'张同学'</span><span class="token punctuation">,</span>
  age<span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
  <span class="token keyword">set</span> <span class="token function">info</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">;</span><span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>age<span class="token punctuation">]</span> <span class="token operator">=</span> val<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">','</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

user<span class="token punctuation">.</span>info <span class="token operator">=</span> <span class="token string">'小明,14'</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p><strong>利用访问器设置 token</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> request <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">set</span> <span class="token function">setToken</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">'token'</span><span class="token punctuation">,</span> val<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token keyword">get</span> <span class="token function">getToken</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'token'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

request<span class="token punctuation">.</span>setToken <span class="token operator">=</span> <span class="token string">'12121dadasdada'</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span>getToken<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="xmlhttprequest" tabindex="-1"><a class="header-anchor" href="#xmlhttprequest" aria-hidden="true">#</a> XMLHttpRequest</h2>
<p>创建方式</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="open" tabindex="-1"><a class="header-anchor" href="#open" aria-hidden="true">#</a> open()</h3>
<p>XHR 对象首先调用 <code>open</code> 方法，接受三个参数，请求类型，请求 URL，是否为异步</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> url <span class="token operator">=</span>
  <span class="token string">'https://infinitymcn.com/web/0705_renova_list/back_end/Renova_List/public/index.php/backstage/color/color'</span>
xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">'get'</span><span class="token punctuation">,</span> url<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="send" tabindex="-1"><a class="header-anchor" href="#send" aria-hidden="true">#</a> send()</h3>
<p>要发送定义好的请求需要使用 <code>send</code> 方法</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> url <span class="token operator">=</span>
  <span class="token string">'https://infinitymcn.com/web/0705_renova_list/back_end/Renova_List/public/index.php/backstage/color/color'</span>
xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">'get'</span><span class="token punctuation">,</span> url<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><code>send</code> 可以作为请求体发送数据，<strong>如果不需要传入请求体，则必须传入 null</strong></p>
<h3 id="status" tabindex="-1"><a class="header-anchor" href="#status" aria-hidden="true">#</a> status</h3>
<p>响应的 HTTP 状态</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> url <span class="token operator">=</span>
  <span class="token string">'https://infinitymcn.com/web/0705_renova_list/back_end/Renova_List/public/index.php/backstage/color/color'</span>
xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">'get'</span><span class="token punctuation">,</span> url<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>status<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="statustext" tabindex="-1"><a class="header-anchor" href="#statustext" aria-hidden="true">#</a> statusText</h3>
<p>响应的 HTTP 状态描述</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> url <span class="token operator">=</span>
  <span class="token string">'https://infinitymcn.com/web/0705_renova_list/back_end/Renova_List/public/index.php/backstage/color/color'</span>
xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">'get'</span><span class="token punctuation">,</span> url<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>status<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>statusText<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="formdate-类型" tabindex="-1"><a class="header-anchor" href="#formdate-类型" aria-hidden="true">#</a> FormDate 类型</h2>
<p>创建一个 formdata</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> fd <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FormData</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
fd<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">'name'</span><span class="token punctuation">,</span> <span class="token string">'data'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><code>append</code> 方法接收两个参数 键和值</p>
<p>使用 FormDate 就不需要给 xhr 对象设置响应头了，因为 xhr 对象可以识别作为 FormDate 实例传入的数据类型并自动配置响应头</p>
<h2 id="迭代器" tabindex="-1"><a class="header-anchor" href="#迭代器" aria-hidden="true">#</a> 迭代器</h2>
<p>可以迭代对象可以使用 <code>Symbol.iterator</code> 作为键来查看是否可以进行迭代，这个在实际开发中并不常用。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> num <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">34</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num<span class="token punctuation">[</span>Symbol<span class="token punctuation">.</span>iterator<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// undefined</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>Symbol<span class="token punctuation">.</span>iterator<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// ƒ values() { [native code] }</span>

<span class="token comment">// 所以 num 是不可迭代的，arr 是可迭代的</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h4 id="next-方法" tabindex="-1"><a class="header-anchor" href="#next-方法" aria-hidden="true">#</a> next() 方法</h4>
<p>迭代器 API 使用 <code>next()</code> 方法可以在迭代器中遍历数据，每次成功调用 <code>next()</code> 都会返回一个 <code>IteratorResult</code> 对象，对象中有两个键值，其中 <code>value</code> 是当前迭代的值，<code>done</code> 是否完成迭代(布尔值)，<code>done</code> 为 <code>true</code> 时，表示当前迭代已经被耗尽，<code>value</code> 返回 <code>undefined</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">34</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span>

<span class="token keyword">const</span> arr_ <span class="token operator">=</span> arr<span class="token punctuation">[</span>Symbol<span class="token punctuation">.</span>iterator<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr_<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// {value: 1, done: false}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr_<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// {value: 2, done: false}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr_<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// {value: 34, done: false}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr_<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// {value: 5, done: false}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr_<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// {value: 5, done: false}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr_<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// {value: undefined, done: true}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="promise" tabindex="-1"><a class="header-anchor" href="#promise" aria-hidden="true">#</a> Promise</h2>
<p><code>Promise</code> 是一个构造函数，可以通过 <code>new</code> 关键字来创建</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><code>Promise</code> 有三种状态，分别是：<strong>pending（等待态），fulfilled（成功态），rejected（失败态）</strong>
那么怎么在三种状态中切换呢，如下</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> p1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p1<span class="token punctuation">)</span> <span class="token comment">// pending</span>

<span class="token keyword">const</span> p2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p2<span class="token punctuation">)</span> <span class="token comment">// pending -> fulfilled</span>

<span class="token keyword">const</span> p3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token function">reject</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p3<span class="token punctuation">)</span> <span class="token comment">// pending -> rejected</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>通过调用不同的函数可以改变 <code>Promise</code> 的状态</p>
<blockquote>
<p>pending 状态的 Promise 不会触发 then 和 catch 方法
成功状态会执行 then 里的草错，失败会执行 catch 里的操作</p>
</blockquote>
<h2 id="原型和原型链" tabindex="-1"><a class="header-anchor" href="#原型和原型链" aria-hidden="true">#</a> 原型和原型链</h2>
<p>对象和函数都是有原型的</p>
<p><strong>对象</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">dir</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>打印结果，其中 <code>[[Prototype]]</code> 就是对象的原型</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>Object
  <span class="token punctuation">[</span><span class="token punctuation">[</span>Prototype<span class="token punctuation">]</span><span class="token punctuation">]</span>: Object
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>想要获取到对象的原型可以使用 <code>__porto__</code> 来获取到</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">dir</span><span class="token punctuation">(</span>user<span class="token punctuation">.</span>__proto__<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>打印结果：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>Object
  constructor: ƒ Object<span class="token punctuation">(</span><span class="token punctuation">)</span>
  hasOwnProperty: ƒ hasOwnProperty<span class="token punctuation">(</span><span class="token punctuation">)</span>
  isPrototypeOf: ƒ isPrototypeOf<span class="token punctuation">(</span><span class="token punctuation">)</span>
  propertyIsEnumerable: ƒ propertyIsEnumerable<span class="token punctuation">(</span><span class="token punctuation">)</span>
  toLocaleString: ƒ toLocaleString<span class="token punctuation">(</span><span class="token punctuation">)</span>
  toString: ƒ toString<span class="token punctuation">(</span><span class="token punctuation">)</span>
  valueOf: ƒ valueOf<span class="token punctuation">(</span><span class="token punctuation">)</span>
  __defineGetter__: ƒ __defineGetter__<span class="token punctuation">(</span><span class="token punctuation">)</span>
  __defineSetter__: ƒ __defineSetter__<span class="token punctuation">(</span><span class="token punctuation">)</span>
  __lookupGetter__: ƒ __lookupGetter__<span class="token punctuation">(</span><span class="token punctuation">)</span>
  __lookupSetter__: ƒ __lookupSetter__<span class="token punctuation">(</span><span class="token punctuation">)</span>
  __proto__: null
  get __proto__: ƒ __proto__<span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token builtin class-name">set</span> __proto__: ƒ __proto__<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p><strong>函数</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">// 创建构造函数</span>
console<span class="token punctuation">.</span><span class="token function">dir</span><span class="token punctuation">(</span>User<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>打印结果，</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>ƒ User<span class="token punctuation">(</span><span class="token punctuation">)</span>
  arguments: null
  caller: null
  length: <span class="token number">0</span>
  name: <span class="token string">"User"</span>
  prototype: <span class="token punctuation">{</span>constructor: ƒ<span class="token punctuation">}</span>
  <span class="token punctuation">[</span><span class="token punctuation">[</span>FunctionLocation<span class="token punctuation">]</span><span class="token punctuation">]</span>: <span class="token number">1</span>.html:14
  <span class="token punctuation">[</span><span class="token punctuation">[</span>Prototype<span class="token punctuation">]</span><span class="token punctuation">]</span>: ƒ <span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">[</span><span class="token punctuation">[</span>Scopes<span class="token punctuation">]</span><span class="token punctuation">]</span>: Scopes<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>函数是有两个原型的，一个 <code>prototype</code> 一个 <code>[[Prototype]]</code>，函数自带的方法，如 apply、bind 等方法都存在于 <code>[[Prototype]]</code> 上面</p>
<p>想要获取到函数的原型可以使用 <code>__porto__</code> 和 <code>prototype</code> 来获取到</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">dir</span><span class="token punctuation">(</span>User<span class="token punctuation">.</span>__proto__<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">dir</span><span class="token punctuation">(</span><span class="token class-name">User</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><code>__proto__</code> 打印结果 ：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>ƒ anonymous<span class="token punctuation">(</span><span class="token punctuation">)</span>
  apply: ƒ apply<span class="token punctuation">(</span><span class="token punctuation">)</span>
  arguments: <span class="token punctuation">(</span><span class="token punctuation">..</span>.<span class="token punctuation">)</span>
  bind: ƒ bind<span class="token punctuation">(</span><span class="token punctuation">)</span>
  call: ƒ call<span class="token punctuation">(</span><span class="token punctuation">)</span>
  caller: <span class="token punctuation">(</span><span class="token punctuation">..</span>.<span class="token punctuation">)</span>
  constructor: ƒ Function<span class="token punctuation">(</span><span class="token punctuation">)</span>
  length: <span class="token number">0</span>
  name: <span class="token string">""</span>
  toString: ƒ toString<span class="token punctuation">(</span><span class="token punctuation">)</span>
  Symbol<span class="token punctuation">(</span>Symbol.hasInstance<span class="token punctuation">)</span>: ƒ <span class="token punctuation">[</span>Symbol.hasInstance<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  get arguments: ƒ <span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token builtin class-name">set</span> arguments: ƒ <span class="token punctuation">(</span><span class="token punctuation">)</span>
  get caller: ƒ <span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token builtin class-name">set</span> caller: ƒ <span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">[</span><span class="token punctuation">[</span>FunctionLocation<span class="token punctuation">]</span><span class="token punctuation">]</span>: ​
  <span class="token punctuation">[</span><span class="token punctuation">[</span>Prototype<span class="token punctuation">]</span><span class="token punctuation">]</span>: Object
  <span class="token punctuation">[</span><span class="token punctuation">[</span>Scopes<span class="token punctuation">]</span><span class="token punctuation">]</span>: Scopes<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p><code>prototype</code> 打印结果：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>Object
  constructor: ƒ User<span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">[</span><span class="token punctuation">[</span>Prototype<span class="token punctuation">]</span><span class="token punctuation">]</span>: Object
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><blockquote>
<p>注意：由于浏览器更新原因，在浏览器中打印的是 <code>Prototype</code> 和 <code>[[Prototype]]</code>。想要获取 <code>Prototype</code> 可以直接使用 <code>xxx.prototype</code> 获取，但是获取 <code>[[Prototype]]</code> 并不能使用 <code>xxx.[[Prototype]]</code> 获取，而是使用 <code>xxx.__proto__</code> 获取，在新版的 Chrome、Firefox、Edge 等浏览器中均可适用。
虽然 <code>__proto__</code> 可以正常获取到原型，但是规范建议使用 <code>Object.getPrototypeOf()</code> 方法获取为优</p>
</blockquote>
<h3 id="原型共享" tabindex="-1"><a class="header-anchor" href="#原型共享" aria-hidden="true">#</a> 原型共享</h3>
<p>比如下面例子中，首先创建一个构造函数 <code>User</code>，让在 <code>User</code> 的原型(prototype)上添加一个 <code>say</code> 方法，那么在构造函数创建的对象上同样可以使用</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token class-name">User</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">say</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'这是 say 方法'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

obj<span class="token punctuation">.</span><span class="token function">say</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 这是 say 方法</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>那么这是为什么呢？</p>
<p>下面分别来打印出 <code>User</code> 的 <code>prototype</code> 和 <code>obj</code> 的 <code>[[prototype]]</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">dir</span><span class="token punctuation">(</span><span class="token class-name">User</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">dir</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>__proto__<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>User</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>Object
  say: ƒ <span class="token punctuation">(</span><span class="token punctuation">)</span>
  constructor: ƒ User<span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">[</span><span class="token punctuation">[</span>Prototype<span class="token punctuation">]</span><span class="token punctuation">]</span>: Object
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><strong>obj</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>Object
  say: ƒ <span class="token punctuation">(</span><span class="token punctuation">)</span>
  constructor: ƒ User<span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">[</span><span class="token punctuation">[</span>Prototype<span class="token punctuation">]</span><span class="token punctuation">]</span>: Object
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>看上去是一样的，可以测试一下是否真的一样：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token class-name">User</span><span class="token punctuation">.</span>prototype <span class="token operator">===</span> obj<span class="token punctuation">.</span>__proto__<span class="token punctuation">)</span> <span class="token comment">// true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token class-name">User</span><span class="token punctuation">.</span>prototype <span class="token operator">===</span> Object<span class="token punctuation">.</span><span class="token function">getPrototypeOf</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>使用两种方式来判断，结果都为 <code>true</code></p>
<p>由此得出结论：<strong>函数上的 prototype 原型和构造函数对象的原型是共享的一个原型</strong></p>
<p>详情见下图</p>
<img src="/javascript/prototype_1.jpg" alt="image"  />
<h3 id="顶级原型" tabindex="-1"><a class="header-anchor" href="#顶级原型" aria-hidden="true">#</a> 顶级原型</h3>
<p>上面知道了：<strong>函数上的 prototype 原型和构造函数对象的原型是共享的一个原型</strong>，那么构造函数上面的原型是什么呢？</p>
<p>下面例子中，先早 <code>Object</code> 上定义了一个 <code>say</code> 方法，之后又创建了一个构造函数 <code>User</code>，接下来打印 <code>User</code></p>
<p>接下来依次打开 <code>User/prototype/[[Prototype]]</code></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>ƒ User<span class="token punctuation">(</span><span class="token punctuation">)</span>
  arguments: null
  caller: null
  length: <span class="token number">0</span>
  name: <span class="token string">"User"</span>
  prototype: <span class="token punctuation">{</span>constructor: ƒ<span class="token punctuation">}</span>
    constructor: ƒ User<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">[</span><span class="token punctuation">[</span>Prototype<span class="token punctuation">]</span><span class="token punctuation">]</span>: Object
      say: ƒ <span class="token punctuation">(</span><span class="token punctuation">)</span>
      constructor: ƒ Object<span class="token punctuation">(</span><span class="token punctuation">)</span>
      hasOwnProperty: ƒ hasOwnProperty<span class="token punctuation">(</span><span class="token punctuation">)</span>
      isPrototypeOf: ƒ isPrototypeOf<span class="token punctuation">(</span><span class="token punctuation">)</span>
      propertyIsEnumerable: ƒ propertyIsEnumerable<span class="token punctuation">(</span><span class="token punctuation">)</span>
      toLocaleString: ƒ toLocaleString<span class="token punctuation">(</span><span class="token punctuation">)</span>
      toString: ƒ toString<span class="token punctuation">(</span><span class="token punctuation">)</span>
      valueOf: ƒ valueOf<span class="token punctuation">(</span><span class="token punctuation">)</span>
      __defineGetter__: ƒ __defineGetter__<span class="token punctuation">(</span><span class="token punctuation">)</span>
      __defineSetter__: ƒ __defineSetter__<span class="token punctuation">(</span><span class="token punctuation">)</span>
      __lookupGetter__: ƒ __lookupGetter__<span class="token punctuation">(</span><span class="token punctuation">)</span>
      __lookupSetter__: ƒ __lookupSetter__<span class="token punctuation">(</span><span class="token punctuation">)</span>
      __proto__: <span class="token punctuation">(</span><span class="token punctuation">..</span>.<span class="token punctuation">)</span>
      get __proto__: ƒ __proto__<span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token builtin class-name">set</span> __proto__: ƒ __proto__<span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">[</span><span class="token punctuation">[</span>FunctionLocation<span class="token punctuation">]</span><span class="token punctuation">]</span>: <span class="token number">1</span>.html:21
  <span class="token punctuation">[</span><span class="token punctuation">[</span>Prototype<span class="token punctuation">]</span><span class="token punctuation">]</span>: ƒ <span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">[</span><span class="token punctuation">[</span>Scopes<span class="token punctuation">]</span><span class="token punctuation">]</span>: Scopes<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><p>打开后发现，构造函数 <code>prototype</code> 的原型中的原型 <code>[[prototype]]</code> 中存在由 <code>Object</code> 上定义的 <code>say</code> 方法</p>
<p>那么就进行检测一下：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token class-name">User</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>__proto__ <span class="token operator">===</span> <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span> <span class="token comment">// true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">getPrototypeOf</span><span class="token punctuation">(</span><span class="token class-name">User</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>结果是：<strong>构造函数上的 prototype 中 <code>[[prototype]]</code> 的原型和对象的 prototype 原型是共享的一个原型</strong></p>
<p>所以 <code>Object</code> 就是原型链的顶级原型了</p>
<p>详情见下图</p>
<img src="/javascript/prototype_2.jpg" alt="image"  />
<p>所以：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">getPrototypeOf</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span> <span class="token comment">// true</span>

<span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token string">''</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">getPrototypeOf</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token class-name">String</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span> <span class="token comment">// true</span>

<span class="token keyword">const</span> bool <span class="token operator">=</span> <span class="token boolean">true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">getPrototypeOf</span><span class="token punctuation">(</span>bool<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token class-name">Boolean</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span> <span class="token comment">// true</span>

<span class="token keyword">const</span> num <span class="token operator">=</span> <span class="token number">123</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">getPrototypeOf</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token class-name">Number</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span> <span class="token comment">// true</span>

<span class="token keyword">const</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">123</span><span class="token regex-delimiter">/</span></span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">getPrototypeOf</span><span class="token punctuation">(</span>reg<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token class-name">RegExp</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h3 id="设置原型" tabindex="-1"><a class="header-anchor" href="#设置原型" aria-hidden="true">#</a> 设置原型</h3>
<p>比如下面有两个对象：我想把 <code>obj1</code> 原型的父级改为 <code>obj2</code>，那么就可以使用 <code>Object.setPrototypeOf()</code> 方法进行改变，接收两个参数，一个是需要改变的对象，和指定父级的对象</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> obj1 <span class="token operator">=</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">'obj1'</span> <span class="token punctuation">}</span>
<span class="token keyword">const</span> obj2 <span class="token operator">=</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">'obj2'</span> <span class="token punctuation">}</span>
Object<span class="token punctuation">.</span><span class="token function">setPrototypeOf</span><span class="token punctuation">(</span>obj1<span class="token punctuation">,</span> obj2<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>打印结果：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>Object
  name: <span class="token string">"obj1"</span>
  <span class="token punctuation">[</span><span class="token punctuation">[</span>Prototype<span class="token punctuation">]</span><span class="token punctuation">]</span>: Object
    name: <span class="token string">"obj2"</span>
    <span class="token punctuation">[</span><span class="token punctuation">[</span>Prototype<span class="token punctuation">]</span><span class="token punctuation">]</span>: Object
    constructor: ƒ Object<span class="token punctuation">(</span><span class="token punctuation">)</span>
    hasOwnProperty: ƒ hasOwnProperty<span class="token punctuation">(</span><span class="token punctuation">)</span>
    isPrototypeOf: ƒ isPrototypeOf<span class="token punctuation">(</span><span class="token punctuation">)</span>
    propertyIsEnumerable: ƒ propertyIsEnumerable<span class="token punctuation">(</span><span class="token punctuation">)</span>
    toLocaleString: ƒ toLocaleString<span class="token punctuation">(</span><span class="token punctuation">)</span>
    toString: ƒ toString<span class="token punctuation">(</span><span class="token punctuation">)</span>
    valueOf: ƒ valueOf<span class="token punctuation">(</span><span class="token punctuation">)</span>
    __defineGetter__: ƒ __defineGetter__<span class="token punctuation">(</span><span class="token punctuation">)</span>
    __defineSetter__: ƒ __defineSetter__<span class="token punctuation">(</span><span class="token punctuation">)</span>
    __lookupGetter__: ƒ __lookupGetter__<span class="token punctuation">(</span><span class="token punctuation">)</span>
    __lookupSetter__: ƒ __lookupSetter__<span class="token punctuation">(</span><span class="token punctuation">)</span>
    __proto__: Object
    get __proto__: ƒ __proto__<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token builtin class-name">set</span> __proto__: ƒ __proto__<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>那么这时候 <code>obj1</code> 的父级就是 <code>obj2</code> 了</p>
<h3 id="constructor-属性" tabindex="-1"><a class="header-anchor" href="#constructor-属性" aria-hidden="true">#</a> constructor 属性</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>ƒ User<span class="token punctuation">(</span><span class="token punctuation">)</span>
  arguments: null
  caller: null
  length: <span class="token number">0</span>
  name: <span class="token string">"User"</span>
  prototype:
    constructor: ƒ User<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">[</span><span class="token punctuation">[</span>Prototype<span class="token punctuation">]</span><span class="token punctuation">]</span>: Object
  <span class="token punctuation">[</span><span class="token punctuation">[</span>FunctionLocation<span class="token punctuation">]</span><span class="token punctuation">]</span>: <span class="token number">1</span>.html:14
  <span class="token punctuation">[</span><span class="token punctuation">[</span>Prototype<span class="token punctuation">]</span><span class="token punctuation">]</span>: ƒ <span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">[</span><span class="token punctuation">[</span>Scopes<span class="token punctuation">]</span><span class="token punctuation">]</span>: Scopes<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>我们可以发现，构造函数的 <code>prototype</code> 原型中，不但有一个 <code>[[Prototype]]</code>，而且还有一个 <code>constructor</code> 属性，那么 <code>constructor</code> 其实指向的就是当前的构造函数，<strong>因为原型就是一个对象，只要是对象就会有原型</strong>，也就是说：不仅可以通过的 <code>prototype</code> 找到构造函数的原型，我也可以通过这个原型找到构造函数</p>
<p>那么也就是说：<strong>构造函数原型的 constructor 属性指向的是当前构造函数</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token class-name">User</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>constructor <span class="token operator">===</span> User<span class="token punctuation">)</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>那么就同样可以使用 <code>constructor</code> 再来创建一个构造函数</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">User</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
<span class="token punctuation">}</span>

<span class="token keyword">const</span> z <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token string">'张三'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> l <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>constructor</span><span class="token punctuation">(</span><span class="token string">'李四'</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>z<span class="token punctuation">)</span> <span class="token comment">// User {name: '张三'}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>l<span class="token punctuation">)</span> <span class="token comment">// User {name: '李四'}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="原型添加多个方法" tabindex="-1"><a class="header-anchor" href="#原型添加多个方法" aria-hidden="true">#</a> 原型添加多个方法</h3>
<p>如果想在原型上添加多个属性和方法，可以使用下面方式：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token class-name">User</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">'张同学'</span>
<span class="token class-name">User</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">38</span>
<span class="token class-name">User</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">sayName</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>但是这样的代码不免有些冗余，所以可以使用对象的方式进行添加</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token class-name">User</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">'张同学'</span><span class="token punctuation">,</span>
  age<span class="token operator">:</span> <span class="token number">38</span><span class="token punctuation">,</span>
  <span class="token function">sayName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">dir</span><span class="token punctuation">(</span>User<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><blockquote>
<p>但是这样加完之后打开原型会发现一个问题，就是 <code>constructor</code> 不见了，所以如果在使用 <code>new User.prototype.constructor()</code> 就会报错了</p>
</blockquote>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>ƒ User<span class="token punctuation">(</span><span class="token punctuation">)</span>
  arguments: null
  caller: null
  length: <span class="token number">0</span>
  name: <span class="token string">"User"</span>
  prototype:
    age: <span class="token number">38</span>
    name: <span class="token string">"张同学"</span>
    sayName: ƒ sayName<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">[</span><span class="token punctuation">[</span>Prototype<span class="token punctuation">]</span><span class="token punctuation">]</span>: Object
  <span class="token punctuation">[</span><span class="token punctuation">[</span>FunctionLocation<span class="token punctuation">]</span><span class="token punctuation">]</span>: <span class="token number">1</span>.html:25
  <span class="token punctuation">[</span><span class="token punctuation">[</span>Prototype<span class="token punctuation">]</span><span class="token punctuation">]</span>: ƒ <span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">[</span><span class="token punctuation">[</span>Scopes<span class="token punctuation">]</span><span class="token punctuation">]</span>: Scopes<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>所以我们希望的是，就是改变的原型，也可以通过原型上的 <code>constructor</code> 找到当前的构造函数，所以在使用对象往原型上添加属性的时候，一定要记得将 <code>constructor: User</code> 添加上去，接下来的 <code>new User.prototype.constructor()</code> 才可以正常工作</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">User</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
<span class="token punctuation">}</span>

<span class="token class-name">User</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token punctuation">{</span>
  constructor<span class="token operator">:</span> User<span class="token punctuation">,</span>
  name<span class="token operator">:</span> <span class="token string">'张同学'</span><span class="token punctuation">,</span>
  age<span class="token operator">:</span> <span class="token number">38</span><span class="token punctuation">,</span>
  <span class="token function">sayName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> l <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>constructor</span><span class="token punctuation">(</span><span class="token string">'李四'</span><span class="token punctuation">)</span>
l<span class="token punctuation">.</span><span class="token function">sayName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 李四</span>
Object<span class="token punctuation">.</span><span class="token function">getPrototypeOf</span><span class="token punctuation">(</span>l<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">sayName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 张同学</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>所以新的原型链结构图如下：</p>
<img src="/javascript/prototype_3.jpg" alt="image"  />
<h2 id="继承" tabindex="-1"><a class="header-anchor" href="#继承" aria-hidden="true">#</a> 继承</h2>
<p>继承是原型的继承 而不是改变构造函数</p>
<p>例如下面代码是错误的</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token class-name">User</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">name</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'name'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">Admin</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token class-name">Admin</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token class-name">User</span><span class="token punctuation">.</span>prototype
<span class="token comment">// 这样直接赋值原型之后</span>
<span class="token comment">// 相当于 Admin 和 User 共用的是一个原型</span>

<span class="token keyword">const</span> admin <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Admin</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
admin<span class="token punctuation">.</span><span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>举个例子：上面的反例中，直接将 User 的原型赋值给 Admin 之后，虽然是实现了伪继承，但是这样继承了之后自己本来的原型就不存在了，两个构造函数用的就是同一个原型了，这样就会造成函数覆盖等情况，我们期望的是自己的原型还是保留的，再继承。好比现实中继承财产，继承是将继承的财产和自己本来的财产加在一起，而不是只是得到了继承的财产，而自己的财产就消失了。</p>
<h3 id="object-create" tabindex="-1"><a class="header-anchor" href="#object-create" aria-hidden="true">#</a> Object.create()</h3>
<p><code>Object.create()</code> 方法创建一个新对象，使用现有的对象来提供新创建的对象的 <code>__proto__</code></p>
<p>可以使用 <code>Object.create()</code> 方法实现继承</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token class-name">User</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">userName</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'userName'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">Admin</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token class-name">Admin</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">adminName</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'adminName'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token class-name">Admin</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>__proto__ <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token class-name">User</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span>
<span class="token class-name">Admin</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>constructor <span class="token operator">=</span> Admin

<span class="token keyword">const</span> admin <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Admin</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

admin<span class="token punctuation">.</span><span class="token function">userName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// userName</span>
admin<span class="token punctuation">.</span><span class="token function">adminName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// adminName</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h3 id="使用父类构造函数初始属性" tabindex="-1"><a class="header-anchor" href="#使用父类构造函数初始属性" aria-hidden="true">#</a> 使用父类构造函数初始属性</h3>
<p>这种方式可以在父类构造函数的原型中添加公共的属性，以免单独在每个构造函数中重复声明</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">User</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
  <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">Admin</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>params</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">User</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> params<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token class-name">Admin</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token class-name">User</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span>
Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span><span class="token class-name">Admin</span><span class="token punctuation">.</span>prototype<span class="token punctuation">,</span> <span class="token string">'constructor'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  value<span class="token operator">:</span> Admin<span class="token punctuation">,</span>
  enumerable<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> admin <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Admin</span><span class="token punctuation">(</span><span class="token string">'张三'</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>admin<span class="token punctuation">)</span>

<span class="token keyword">const</span> admin2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">admin<span class="token punctuation">.</span>__proto__<span class="token punctuation">.</span>constructor</span><span class="token punctuation">(</span><span class="token string">'李四'</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>admin2<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div></template>
