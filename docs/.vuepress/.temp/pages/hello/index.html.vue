<template><h1 id="hello" tabindex="-1"><a class="header-anchor" href="#hello" aria-hidden="true">#</a> Hello</h1>
<h2 id="welcome-to-my-blog" tabindex="-1"><a class="header-anchor" href="#welcome-to-my-blog" aria-hidden="true">#</a> Welcome to my Blog</h2>
<p>hi ～我的名字是<strong>田宇浩</strong>😁，我的生日是 9 月 17 日🎂，我是一名前端开发者💻，现在在杭州工作。</p>
<p>我最喜欢的开发框架是<a href="https://v3.cn.vuejs.org" target="_blank" rel="noopener noreferrer">Vue.js<ExternalLinkIcon/></a>，我还创建了自己的 Vue 组件库<a href="http://tianyuhao.cn/tyhui/v3" target="_blank" rel="noopener noreferrer">tyh ui<ExternalLinkIcon/></a>⭐。</p>
<p>你可以通过<a href="https://weibo.com/tyh2001" target="_blank" rel="noopener noreferrer">微博<ExternalLinkIcon/></a>了解我。</p>
<h2 id="你喜欢-vue-吗" tabindex="-1"><a class="header-anchor" href="#你喜欢-vue-吗" aria-hidden="true">#</a> 你喜欢 vue 吗？</h2>
<p>不知道你喜不喜欢使用 <code>vue</code> 呢？如果你也喜欢使用 <code>vue</code>，那么我想下面推荐的内容可能会适合你，也希望你可以来支持～也很需要你在 <a href="https://github.com/Tyh2001/tyh-ui2" target="_blank" rel="noopener noreferrer">Github<ExternalLinkIcon/></a> 上一个小小的 <strong>Star</strong>。</p>
<h2 id="推荐给你" tabindex="-1"><a class="header-anchor" href="#推荐给你" aria-hidden="true">#</a> 推荐给你</h2>
<p align="center">
  <img height="260px" src="https://tianyuhao.cn/tyhui/v3/assets/logo.8a99342f.png">
</p>
<p align="center">
  中文 | <a href="https://github.com/Tyh2001/tyh-ui2/blob/master/README.md">English</a>
</p>
<p align="center">
  <a href="https://www.npmjs.com/package/tyh-ui2">
    <img src="https://badgen.net/npm/v/tyh-ui2" alt="npm package">
  </a>
  <a style="margin-left:15px;" href="https://github.com/Tyh2001/tyh-ui2/blob/master/CHANGELOG.md">
    <img src="https://img.shields.io/badge/tyh--ui2-CHANGELOG-orange" alt="CHANGELOG">
  </a>
  <a style="margin-left:15px;" href="https://tianyuhao.cn/tyhui/v3">
    <img src="https://img.shields.io/badge/tyh--ui2-docs-red" alt="docs">
  </a>
  <a style="margin-left:15px;" href="https://github.com/Tyh2001/tyh-ui2/blob/master/README.md">
    <img src="https://img.shields.io/badge/tyh--ui2-README__en-yellowgreen">
  </a>
</p>
<h3 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h3>
<p>tyh-ui 的下一代 ui 组件库，基于 vue3.0 版本，全面拥抱 vue3.0</p>
<blockquote>
<p>简洁至上</p>
</blockquote>
<p>tyh-ui 整体非常简洁明了，虽没有很多高级的组件，但它是使用最简单的方式达到实用的效果。</p>
<blockquote>
<p>轻量容易</p>
</blockquote>
<p>使用方便，配置简单，目录清晰，结构简单，组件轻量级，上手简单，像复制粘贴一样容易。</p>
<h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> tyh-ui2
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="快速上手" tabindex="-1"><a class="header-anchor" href="#快速上手" aria-hidden="true">#</a> 快速上手</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">'./App.vue'</span>
<span class="token keyword">import</span> tyhUi2 <span class="token keyword">from</span> <span class="token string">'tyh-ui2'</span>
<span class="token keyword">import</span> <span class="token string">'tyh-ui2/style/index.css'</span>

<span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>tyhUi2<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">'#app'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="更新日志" tabindex="-1"><a class="header-anchor" href="#更新日志" aria-hidden="true">#</a> 更新日志</h3>
<p><a href="https://github.com/Tyh2001/tyh-ui2/blob/master/CHANGELOG.md" target="_blank" rel="noopener noreferrer">更新日志<ExternalLinkIcon/></a>中记录了每个版本的详细更改。</p>
<h3 id="贡献者" tabindex="-1"><a class="header-anchor" href="#贡献者" aria-hidden="true">#</a> 贡献者</h3>
<div style="display: flex; align-items: center;">
  <img style=" float: left;" height="60px" src="https://www.hualigs.cn/image/608132a6c15b2.jpg">
  <h4 style="display: inline-block;">tyh2001</h4>
</div>
</template>
