<template><h1 id="vue2-相关" tabindex="-1"><a class="header-anchor" href="#vue2-相关" aria-hidden="true">#</a> Vue2 相关</h1>
<h2 id="创建-vue-项目" tabindex="-1"><a class="header-anchor" href="#创建-vue-项目" aria-hidden="true">#</a> 创建 Vue 项目</h2>
<ol>
<li>下载 vue-cli（下载之后才可以使用 Vue 命令）</li>
</ol>
<p>全局安装 vue/cli 安装完成之后才可以使用 vue 的命令 下载一次就可以了</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> -g @vue/cli
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><blockquote>
<p>如果报错不能使用 Vue 命令 那么要把 vue-cli 添加到环境变量中</p>
</blockquote>
<ol start="2">
<li>创建 Vue 项目</li>
</ol>
<p>在命令行中输入以下命令创建 Vue 项目：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>vue create +项目名称
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><blockquote>
<p>选择版本</p>
</blockquote>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>Vue CLI v4.5.11
? Please pick a preset: <span class="token punctuation">(</span>Use arrow keys<span class="token punctuation">)</span>
  Default <span class="token punctuation">(</span><span class="token punctuation">[</span>Vue <span class="token number">2</span><span class="token punctuation">]</span> babel, eslint<span class="token punctuation">)</span>
  Default <span class="token punctuation">(</span>Vue <span class="token number">3</span> Preview<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token punctuation">[</span>Vue <span class="token number">3</span><span class="token punctuation">]</span> babel, eslint<span class="token punctuation">)</span>
<span class="token operator">></span> Manually <span class="token keyword">select</span> features
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>Default ([Vue 2] babel, eslint)：默认勾选 babel、eslint，回车之后直接进入装包</p>
<p>Default (Vue 3 Preview)：Vue3.0 版本还没有正式发布，不建议使用</p>
<p>Manually select features ：手动选择特性，支持更多自定义选项，推荐使用</p>
<blockquote>
<p>选择需要用到的一些配置</p>
</blockquote>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>Vue CLI v4.5.11
? Please pick a preset: Manually <span class="token keyword">select</span> features
? Check the features needed <span class="token keyword">for</span> your project: <span class="token punctuation">(</span>Press <span class="token operator">&lt;</span>space<span class="token operator">></span> to select, <span class="token operator">&lt;</span>a<span class="token operator">></span> to toggle all, <span class="token operator">&lt;</span>i<span class="token operator">></span> to i
nvert selection<span class="token punctuation">)</span>
<span class="token operator">></span><span class="token punctuation">(</span>*<span class="token punctuation">)</span> Choose Vue version
 <span class="token punctuation">(</span>*<span class="token punctuation">)</span> Babel
 <span class="token punctuation">(</span> <span class="token punctuation">)</span> TypeScript
 <span class="token punctuation">(</span> <span class="token punctuation">)</span> Progressive Web App <span class="token punctuation">(</span>PWA<span class="token punctuation">)</span> Support
 <span class="token punctuation">(</span>*<span class="token punctuation">)</span> Router
 <span class="token punctuation">(</span>*<span class="token punctuation">)</span> Vuex
 <span class="token punctuation">(</span>*<span class="token punctuation">)</span> CSS Pre-processors
 <span class="token punctuation">(</span>*<span class="token punctuation">)</span> Linter / Formatter
 <span class="token punctuation">(</span> <span class="token punctuation">)</span> Unit Testing
 <span class="token punctuation">(</span> <span class="token punctuation">)</span> E2E Testing
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>Babel：es6 转 es5</p>
<p>Router：路由</p>
<p>Linter / Formatter：代码格式校验，ESLint 代码格式校验</p>
<p>CSS Pre-processors：Css 预处理器</p>
<p>根据自己需要选择</p>
<p>我这里选择了：Router、Vuex、CSS Pre-processors</p>
<blockquote>
<p>选择的版本虚拟用户.js 你想开始这个项目</p>
</blockquote>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>Vue CLI v4.5.11
? Please pick a preset: Manually <span class="token keyword">select</span> features
? Check the features needed <span class="token keyword">for</span> your project: Choose Vue version, Babel, Router, Vuex, CSS Pre-proc
essors, Linter
? Choose a version of Vue.js that you want to start the project with <span class="token punctuation">(</span>Use arrow keys<span class="token punctuation">)</span>
<span class="token operator">></span> <span class="token number">2</span>.x
  <span class="token number">3</span>.x <span class="token punctuation">(</span>Preview<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>这里知己默认选择第一个即可</p>
<blockquote>
<p>是否使用 history 路由模式</p>
</blockquote>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>Vue CLI v4.5.11
? Please pick a preset: Manually <span class="token keyword">select</span> features
? Check the features needed <span class="token keyword">for</span> your project: Choose Vue version, Babel, Router, Vuex, CSS Pre-proc
essors, Linter
? Choose a version of Vue.js that you want to start the project with <span class="token number">2</span>.x
? Use <span class="token function">history</span> mode <span class="token keyword">for</span> router? <span class="token punctuation">(</span>Requires proper server setup <span class="token keyword">for</span> index fallback <span class="token keyword">in</span> production<span class="token punctuation">)</span> <span class="token punctuation">(</span>Y/n
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>这里输入 <code>n</code> 不使用</p>
<blockquote>
<p>选择 CSS 预处理器，这里选择我们熟悉的 Less</p>
</blockquote>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>? Pick a CSS pre-processor <span class="token punctuation">(</span>PostCSS, Autoprefixer and CSS Modules are supported by default<span class="token punctuation">)</span>: <span class="token punctuation">(</span>Use a
rrow keys<span class="token punctuation">)</span>
<span class="token operator">></span> Sass/SCSS <span class="token punctuation">(</span>with dart-sass<span class="token punctuation">)</span>
  Sass/SCSS <span class="token punctuation">(</span>with node-sass<span class="token punctuation">)</span>
  Less
  Stylus
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><blockquote>
<p>选择校验工具，这里选择 ESLint + <a href="https://standardjs.com/" target="_blank" rel="noopener noreferrer">Standard config<ExternalLinkIcon/></a></p>
</blockquote>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>? Pick a linter / formatter config:
  ESLint with error prevention only
  ESLint + Airbnb config
<span class="token operator">></span> ESLint + Standard config
  ESLint + Prettier
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><blockquote>
<p>选择在什么时机下触发代码格式校验：</p>
</blockquote>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>? Pick additional lint features:
 <span class="token punctuation">(</span>*<span class="token punctuation">)</span> Lint on save
<span class="token operator">></span><span class="token punctuation">(</span>*<span class="token punctuation">)</span> Lint and fix on commit
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Lint on save：每当保存文件的时候</p>
<p>Lint and fix on commit：每当执行 <code>git commit</code> 提交的时候</p>
<p>这里建议两个都选上，更严谨。</p>
<blockquote>
<p>Babel、ESLint 等工具会有一些额外的配置文件，这里的意思是问你将这些工具相关的配置文件写到哪里：</p>
</blockquote>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>? Where <span class="token keyword">do</span> you prefer placing config <span class="token keyword">for</span> Babel, ESLint, etc.? <span class="token punctuation">(</span>Use arrow keys<span class="token punctuation">)</span>
<span class="token operator">></span> In dedicated config files
  In package.json
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>In dedicated config files：分别保存到单独的配置文件</p>
<p>In package.json：保存到 package.json 文件中</p>
<p>这里建议选择第 1 个，保存到单独的配置文件，这样方便我们做自定义配置。</p>
<blockquote>
<p>这里里是问你是否需要将刚才选择的一系列配置保存起来，然后它可以帮你记住上面的一系列选择，以便下次直接重用。</p>
</blockquote>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>? Save this as a preset <span class="token keyword">for</span> future projects? <span class="token punctuation">(</span>y/N<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>这里根据自己需要输入 y 或者 n，我这里输入 n 不需要。</p>
<blockquote>
<p>向导配置结束，开始装包。</p>
<p>安装包的时间可能较长，请耐心等待...</p>
</blockquote>
<h2 id="关于-axios-配置" tabindex="-1"><a class="header-anchor" href="#关于-axios-配置" aria-hidden="true">#</a> 关于 axios 配置</h2>
<p>为了方便，我们在这里把 axios 单独封装一个模块用于项目中的请求操作。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 基于 axios 封装的请求模块
 */</span>
<span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">'axios'</span>

<span class="token comment">// axios()</span>
<span class="token comment">// axios.get()</span>
<span class="token comment">// axios.post()</span>

<span class="token comment">// 创建一个 axios 实例，说白了就是复制了一个 axios</span>
<span class="token comment">// 我们通过这个实例去发请求，把需要的配置配置给这个实例来处理</span>
<span class="token keyword">const</span> request <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  baseURL<span class="token operator">:</span> <span class="token string">' '</span><span class="token punctuation">,</span> <span class="token comment">// 请求的基础路径</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 请求拦截器</span>

<span class="token comment">// 响应拦截器</span>

<span class="token comment">// 导出请求方法</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> request
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h2 id="关于样式冲突问题" tabindex="-1"><a class="header-anchor" href="#关于样式冲突问题" aria-hidden="true">#</a> 关于样式冲突问题</h2>
<blockquote>
<p>多个组件污染（多个组件公用一套样式时影响其他组件）</p>
</blockquote>
<p>在开发过程中为了避免不必要的资源浪费，多个组件在会共用一套 CSS 代码时，如果采用下面方法引入，可能会导致组件样式污染（加载组件的时候加载的不是当前组件的样式，必须要刷新一次才能当前组件的样式）</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code>&lt;style scoped>
<span class="token atrule"><span class="token rule">@import</span> <span class="token string">"../assets/css/Login.css"</span><span class="token punctuation">;</span></span>
&lt;/style>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>那么解决这个问题可以通过下面方法进行引入样式</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code>&lt;style lang=<span class="token string">""</span> src=<span class="token string">"../assets/css/Login.css"</span> scoped>&lt;/style>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="拦截器" tabindex="-1"><a class="header-anchor" href="#拦截器" aria-hidden="true">#</a> 拦截器</h2>
<ol>
<li>添加一个请求拦截器</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>axios<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>
  <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 任何请求都是经过这里</span>
    <span class="token comment">// config 是当前请求相关的配置信息对象</span>
    <span class="token keyword">return</span> config

    <span class="token comment">// 请求失败都经过这里</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 这里如果不 return 请求就直接发布出去</span>
    <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><ol start="2">
<li>添加一个响应拦截器</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>axios<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>
  <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 所有响应为 2XX的响应都会进入这里 请求成功</span>
    <span class="token comment">// response 是响应处理</span>
    <span class="token comment">// 注意 一定要把响应结果 return 否则真正发请求的位置拿不到数据</span>
    <span class="token keyword">return</span> response
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 处理响应错误</span>
    <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><ol start="3">
<li>可以在处理请求或响应之前拦截它们可以使用<code>thrn</code>或<code>catch</code></li>
</ol>
<p>官方文档：https://github.com/axios/axios</p>
<h2 id="关于-vue-config-js" tabindex="-1"><a class="header-anchor" href="#关于-vue-config-js" aria-hidden="true">#</a> 关于 vue.config.js</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  devServer<span class="token operator">:</span> <span class="token punctuation">{</span>
    port<span class="token operator">:</span> <span class="token number">8080</span><span class="token punctuation">,</span> <span class="token comment">// 端口号 可以自定义</span>
    open<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 启动项目后自动在浏览器打开项目</span>
    proxy<span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// 把所有以 /api 开头的请求代理转发</span>
      <span class="token string">'/api'</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        target<span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span> <span class="token comment">// 目标基础地址 url</span>
        changeOrigin<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 允许跨域</span>
        ws<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 开启 webSocket 代理</span>
        pathRewrite<span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token comment">// 重写路径</span>
          <span class="token string">'^/api'</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h2 id="关于冗余导航报错问题" tabindex="-1"><a class="header-anchor" href="#关于冗余导航报错问题" aria-hidden="true">#</a> 关于冗余导航报错问题</h2>
<p>当我们在使用下面方法进行路由跳转时：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>p @click<span class="token operator">=</span><span class="token string">"$router.push('/setting')"</span><span class="token operator">></span>设置<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>效果是想点击设置跳转到设置的页面，效果是完全可以正常实现跳转</p>
<p>但是，如果当前已经在<code>/setting</code>路由下，那么再点击就会报错：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>Vue warn<span class="token punctuation">]</span>: Error <span class="token keyword">in</span> v-on handler <span class="token punctuation">(</span>Promise/async<span class="token punctuation">)</span>: <span class="token string">"NavigationDuplicated: Avoided redundant navigation to current location: "</span>/setting<span class="token string">"."</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>大概的意思就是：当前你已经在这个导航下了，不要再重复冗余 rǒng yú（多余的重复或啰嗦的操作）</p>
<p>这个其实并不是一个错误，只是说你的操作多余了</p>
<p>那么解决方法就是：在 <code>router/index.js</code>中加入下面一段代码即可解决报错问题</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VueRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  routes<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 解决 冗余导航报错问题</span>
<span class="token keyword">const</span> originalPush <span class="token operator">=</span> <span class="token class-name">VueRouter</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>push
<span class="token class-name">VueRouter</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">push</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">push</span><span class="token punctuation">(</span><span class="token parameter">location</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">originalPush</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> location<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=></span> err<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> router
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="非父子组件通信" tabindex="-1"><a class="header-anchor" href="#非父子组件通信" aria-hidden="true">#</a> 非父子组件通信</h2>
<p>创建一个叫 <code>bus.js</code> 的通信组件，内容如下</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">'vue'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>假设 a 组件要给 b 组件发送请求，那么 a 组件发布通信事件</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> bus <span class="token keyword">from</span> <span class="token string">'@/utils/bus.js'</span>
bus<span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">'自定义事件名称'</span><span class="token punctuation">,</span> 需要发送的内容<span class="token punctuation">)</span>
<span class="token comment">// 引入 bus，使用 bus.comit() 方法发送数据</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>b 组件要接收通信事件：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> bus <span class="token keyword">from</span> <span class="token string">'@/utils/bus.js'</span>
bus<span class="token punctuation">.</span><span class="token function">$on</span><span class="token punctuation">(</span><span class="token string">'自定义事件名称'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// data 即为传递来的数据</span>
  <span class="token comment">// 处理函数</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>需要注意的是：</p>
<blockquote>
<p>通信两端所使用的的事件名称必须一致 否则是无效的</p>
<p><code>$on()</code> 用来接收 <code>$emit()</code> 用来发布</p>
</blockquote>
<h2 id="vue-给-for-循环的标签添加背景图" tabindex="-1"><a class="header-anchor" href="#vue-给-for-循环的标签添加背景图" aria-hidden="true">#</a> Vue 给 for 循环的标签添加背景图</h2>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">:style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{ <span class="token punctuation">'</span>background-image<span class="token punctuation">'</span>: <span class="token punctuation">'</span>url(<span class="token punctuation">'</span> + item.PlaceImgUrl + <span class="token punctuation">'</span>)<span class="token punctuation">'</span> }<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="watch-监听器" tabindex="-1"><a class="header-anchor" href="#watch-监听器" aria-hidden="true">#</a> watch 监听器</h2>
<p>通过 watch 可以定义一个监视器，用于监视某一些数据，当这个被监视的数据一旦发生变化，就会执行里面的逻辑：</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      text<span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  watch<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'text 值发生改变了！！'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>但是不免有些特殊的情况，比如：我们希望在页面刚刚初始化的时候，虽然数据没有发生变化，但也需要立刻执行一次监视器中的内容，这样的话，监视器的表现形式会变成对象，里面透过配置一个 <strong>handler</strong> 的函数和 <strong>immediate</strong> 方法来解决：</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      text<span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  watch<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 使用对象写法，监视数据 text</span>
    text<span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// 使用 handler 方法，处理变化后的逻辑代码</span>
      <span class="token function">handler</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'text 值发生改变了！！'</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// immediate 这个属性值为 true 的时候，默认页面初始化完成之后执行一次上面的代码</span>
      immediate<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div></template>
