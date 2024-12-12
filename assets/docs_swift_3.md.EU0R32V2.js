import{_ as i,c as a,an as n,o as t}from"./chunks/framework.dtLWRnJz.js";const o=JSON.parse('{"title":"数据类型","description":"","frontmatter":{},"headers":[],"relativePath":"docs/swift/3.md","filePath":"docs/swift/3.md","lastUpdated":1733987423000}'),l={name:"docs/swift/3.md"};function h(p,s,e,k,r,d){return t(),a("div",null,s[0]||(s[0]=[n(`<h1 id="数据类型" tabindex="-1">数据类型 <a class="header-anchor" href="#数据类型" aria-label="Permalink to &quot;数据类型&quot;">​</a></h1><h2 id="基本数据类型" tabindex="-1">基本数据类型 <a class="header-anchor" href="#基本数据类型" aria-label="Permalink to &quot;基本数据类型&quot;">​</a></h2><p>基本数据类型有：</p><ul><li>Int 整数</li><li>Double 浮点数</li><li>String 字符串</li><li>Bool 布尔</li></ul><h2 id="获取类型" tabindex="-1">获取类型 <a class="header-anchor" href="#获取类型" aria-label="Permalink to &quot;获取类型&quot;">​</a></h2><p>使用 <code>type</code> 方法传入 <code>of</code> 参数可以获取数据的类型</p><div class="language-swift vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">swift</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 12</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, b </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3.1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, c </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;123&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, d </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">of</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: a)) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Int</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">of</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: b)) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Double</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">of</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: c)) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// String</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">of</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: d)) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Bool</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>`,7)]))}const g=i(l,[["render",h]]);export{o as __pageData,g as default};