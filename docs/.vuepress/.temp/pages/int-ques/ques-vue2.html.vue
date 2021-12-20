<template><h1 id="vue2-相关问题" tabindex="-1"><a class="header-anchor" href="#vue2-相关问题" aria-hidden="true">#</a> Vue2 相关问题</h1>
<h2 id="vue-路由懒加载是什么" tabindex="-1"><a class="header-anchor" href="#vue-路由懒加载是什么" aria-hidden="true">#</a> Vue 路由懒加载是什么</h2>
<p>当打包构建应用时，JavaScript 包会变得非常大，影响页面加载。如果我们能把不同路由对应的组件分割成不同的代码块，然后当路由被访问的时候才加载对应组件，这样就更加高效了</p>
<p>Vue 是单页应用，当路由很大时，进入首页，加载资源过多导致页面白屏，用户体验很差。</p>
<p>所以我们将路由分割为不同的模块，当需要时，再进行加载，称之为路由<strong>懒加载</strong>。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 普通加载</span>
<span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    path<span class="token operator">:</span> <span class="token string">'/'</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span> <span class="token string">'Home'</span><span class="token punctuation">,</span>
    component<span class="token operator">:</span> <span class="token string">'@/views/home/index.vue'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>

<span class="token comment">// 懒加载</span>
<span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    path<span class="token operator">:</span> <span class="token string">'/'</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span> <span class="token string">'Home'</span><span class="token punctuation">,</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'@/views/home/index.vue'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="给路由添加-name-有什么用" tabindex="-1"><a class="header-anchor" href="#给路由添加-name-有什么用" aria-hidden="true">#</a> 给路由添加 name 有什么用</h2>
<p>有时候，通过一个名称来标识一个路由显得更方便一些，特别是在链接一个路由，或者是执行一些跳转的时候。你可以在创建 Router 实例的时候，在 <code>routes</code> 配置中给某个路由设置名称。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VueRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  routes<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      path<span class="token operator">:</span> <span class="token string">'/user'</span><span class="token punctuation">,</span>
      name<span class="token operator">:</span> <span class="token string">'user'</span><span class="token punctuation">,</span>
      <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'@/views/user'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>有了 name 属性的话，就可以直接通过 name 来跳转了</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>router<span class="token operator">-</span>link <span class="token operator">:</span>to<span class="token operator">=</span><span class="token string">"{ name: 'user'}"</span><span class="token operator">></span>User<span class="token operator">&lt;</span><span class="token operator">/</span>router<span class="token operator">-</span>link<span class="token operator">></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>或者：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">'user'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><blockquote>
<p>name 为唯一值，后期如果修改路由地址 也不会受影响</p>
</blockquote>
<h2 id="vue-的生命周期" tabindex="-1"><a class="header-anchor" href="#vue-的生命周期" aria-hidden="true">#</a> vue 的生命周期</h2>
<p><strong>beforeCreated</strong> 创建之前</p>
<p><strong>created</strong> 创建完成</p>
<p><strong>beforeMounted</strong> 挂载前</p>
<p><strong>mounted</strong> 挂载完成</p>
<p><strong>beforeUpdated</strong> 更新前</p>
<p><strong>updated</strong> 更新完成</p>
<p><strong>beforeDestroyed</strong> 销毁前</p>
<p><strong>destroyed</strong> 销毁完成</p>
<h2 id="v-if-和-v-show-的区别" tabindex="-1"><a class="header-anchor" href="#v-if-和-v-show-的区别" aria-hidden="true">#</a> v-if 和 v-show 的区别</h2>
<p>v-if 和 v-show 都可以实现通过布尔值让元素显示和隐藏的作用，但是当 v-if 判断为 false 时，不会渲染 dom，v-show 判断为 false 时，只是给元素添加了 display: none; 的属性进行隐藏。所以，在很少改变状态的条件下，建议使用 v-if，反复显示隐藏渲染，使用 v-show。</p>
<h2 id="vue-的路由实现原理" tabindex="-1"><a class="header-anchor" href="#vue-的路由实现原理" aria-hidden="true">#</a> Vue 的路由实现原理</h2>
<p>通过改变 URL，在不重新请求页面的情况下，更新页面的视图。</p>
<p>Vue 是单页面应用，根据不同的 URL 渲染不同的组件，挂载到 public/index.html 的 #app 中，通过不同的组件渲染，实现不刷新页面就更新不同的页面的样式。</p>
<h2 id="computed-和-watch-的区别" tabindex="-1"><a class="header-anchor" href="#computed-和-watch-的区别" aria-hidden="true">#</a> computed 和 watch 的区别</h2>
<p>computed 是计算属性，</p>
<p>watch 是监视器，用于监视某些数据，当某些数据发生改变就会执行里面的逻辑</p>
<h2 id="为什么-v-for-不能和-v-if-同时存在" tabindex="-1"><a class="header-anchor" href="#为什么-v-for-不能和-v-if-同时存在" aria-hidden="true">#</a> 为什么 v-for 不能和 v-if 同时存在</h2>
<p>因为 v-for 的优先级比 v-if 更高，那样的话，就意味着 v-if 将运行在每个 v-for 的循环元素中，这样会造成内存的浪费。</p>
<p>建议做法是：在循环外嵌套 template （页面渲染不生成 dom 节点）在这一层进行 v-if 的判断，再从里面进行 v-for 循环。</p>
<h2 id="为什么-v-for-必须要绑定-key" tabindex="-1"><a class="header-anchor" href="#为什么-v-for-必须要绑定-key" aria-hidden="true">#</a> 为什么 v-for 必须要绑定 key</h2>
<p>因为使用 v-for 渲染列表的时候，默认使用<code>就地复用策略</code>，当列表数据被修改的时候，会根据 key 判断某个值是否被修改，如果修改了则需要重新渲染这一项，否则复用之前的元素。</p>
<p>key 的作用主要是为了高效的更新虚拟 DOM</p>
<blockquote>
<p>就地复用策略是什么？
如果数据项的顺序被改变，Vue 将不会移动 DOM 元素来匹配数据项的顺序， 而是简单复用此处每个元素。</p>
</blockquote>
<h2 id="vuex-的优劣有哪些" tabindex="-1"><a class="header-anchor" href="#vuex-的优劣有哪些" aria-hidden="true">#</a> Vuex 的优劣有哪些</h2>
<p>优势主要就是可以全局共享数据，方法。方便统一管理。</p>
<p>劣势的话，页面刷新后 state 的变量都会还原清空。</p>
<h2 id="页面刷新后-vuex-中的数据丢失怎么办" tabindex="-1"><a class="header-anchor" href="#页面刷新后-vuex-中的数据丢失怎么办" aria-hidden="true">#</a> 页面刷新后 Vuex 中的数据丢失怎么办</h2>
<p>先说一说为什么会丢失？</p>
<p>因为 store 里的数据是保存在运行内存中的，当页面刷新时页面会重新加载 vue 实例，store 里面的数据就会被重新赋值。</p>
<p>如果想某些数据持久性保留也可以搭配使用 cookies 或者 localStorage。比如一些 Token 信息等。</p>
<h2 id="vuex-中有哪些属性" tabindex="-1"><a class="header-anchor" href="#vuex-中有哪些属性" aria-hidden="true">#</a> Vuex 中有哪些属性</h2>
<ul>
<li>state</li>
</ul>
<p>可以理解为和 data 属性一样，存储一些全局公用的变量。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>state<span class="token operator">:</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">'小明'</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>在 state 中定义的 name，在组件中使用方法如下：</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>{{ $store.state.name }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>或者可以直接映射进 vuex 就会容易的多了：</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>{{ name }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> mapState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vuex'</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  computed<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span><span class="token function">mapState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'name'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><ul>
<li>mutations</li>
</ul>
<p>主要用来更改 state 中的状态。只能使用同步函数。</p>
<p>比如这里想要更改上述的 name 值，可以通过事件来触发方法：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">'searchName'</span><span class="token punctuation">,</span> <span class="token string">'张三'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>mutations<span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token function">searchName</span> <span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    state<span class="token punctuation">.</span>name <span class="token operator">=</span> data
    <span class="token comment">// 将 state 中的 name 变成传递过来的新数据：张三</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>mutations 中定义的函数可以有两个参数，第一个是 state，第二个是传递来的数据</p>
<ul>
<li>Action</li>
</ul>
<p>Action 提交的是 mutation，而不是直接变更状态，可以包含任意异步操作。</p>
<ul>
<li>getters</li>
</ul>
<p>类似 computed 计算属性，也可以在 state 变量的基础上进行处理并且返回新的值</p>
<ul>
<li>modules</li>
</ul>
<p>定义子模块，每个子模块也会有 state、getters、mutations、actions、modules</p>
<h2 id="route和-router-的区别" tabindex="-1"><a class="header-anchor" href="#route和-router-的区别" aria-hidden="true">#</a> $route和$router 的区别</h2>
<p>可以理解为，一个是用来获取路由信息的，一个是用来操作路由的。</p>
<p>$route 是路由信息对象，里面主要包含路由的一些基本信息。包括 name、meta、path、hash、query、params、fullPath、matched、redirectedFrom。</p>
<p>$router 是 VueRouter 的实例，包含了一些路由的跳转方法，钩子函数等。</p>
<p>那么具体怎么查看呢？</p>
<p>我们知道，在 vue 中 this 关键字指向的是整个 Vue 实例，那么在 this 中，就包含了 $router 和 $route 方法：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">mounted</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span> <span class="token comment">// vue 实例</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$router<span class="token punctuation">)</span> <span class="token comment">// 路由方法</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$route<span class="token punctuation">)</span> <span class="token comment">// 路由信息</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="vue-如何进行项目优化" tabindex="-1"><a class="header-anchor" href="#vue-如何进行项目优化" aria-hidden="true">#</a> Vue 如何进行项目优化</h2>
<ol>
<li>简化项目包大小</li>
<li>减少不必要的网络请求</li>
<li>代码业务逻辑处理优化</li>
<li>利用 webpack 打包工具压缩项目代码</li>
<li>静态资源使用懒加载</li>
</ol>
<h2 id="v-bind-和-v-model-的区别" tabindex="-1"><a class="header-anchor" href="#v-bind-和-v-model-的区别" aria-hidden="true">#</a> v-bind 和 v-model 的区别</h2>
<p>v-bind 是可以动态的绑定一个或者多个属性，或者一个表达式，简写是：</p>
<p>v-model 是双向绑定，多用于表单控件的文本框</p>
<h2 id="vue-中-nexttick-方法你了解吗" tabindex="-1"><a class="header-anchor" href="#vue-中-nexttick-方法你了解吗" aria-hidden="true">#</a> Vue 中 nextTick()方法你了解吗</h2>
<p>因为数据改变影响视图更新不是立即的(dom 数据)，所以如果是要在修改数据之后马上操作被改数据影响的视图 DOM，需要把这个数据放到 this.$nextTick 中</p>
<p>完整实例：</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">v-html</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>list<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span>
export default {
  data() {
    return {
      list: "",
    };
  },
  mounted() {
    this.list = `
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://cn.vuejs.org/images/logo.png<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://cn.vuejs.org/images/logo.png<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://cn.vuejs.org/images/logo.png<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
     `
    console.log(this.$refs.text.querySelectorAll("img")) // 获取到的是空数组

    this.$nextTick(() => {
      console.log(this.$refs.text.querySelectorAll("img")) // img 标签数组
    });
  }
};
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><h2 id="vue-中什么是单向数据流" tabindex="-1"><a class="header-anchor" href="#vue-中什么是单向数据流" aria-hidden="true">#</a> Vue 中什么是单向数据流</h2>
<p>这个概念出现在组件通信中，父组件向子组件传递数据，子组件通过 props 来接收，但是这个 props 中的数据只能通过父组件来修改，子组件不能直接修改 props 中的数据，否则就会报错。</p>
<p>如果想要修改，只能让子组件通过发送一个自定义事件，让父组件来修改。</p>
<h2 id="vue-的渐进式怎么理解" tabindex="-1"><a class="header-anchor" href="#vue-的渐进式怎么理解" aria-hidden="true">#</a> Vue 的渐进式怎么理解</h2>
<p>最早的的 vue.js 只做视图层，没有路由，没有状态管理，没有脚手架，只有一个库放在网页里直接用。</p>
<p>后来再加入一些官方辅助工具，加入这些工具时，vue.js 始终保持着一个理念:“这个框架应该是渐进式的”。</p>
<p>所谓渐进式框架，就是把框架分层。</p>
<p>最核心的部分就是视图渲染，然后往外是组件机制，再加入路由机制，状态管理，构建工具。</p>
<p>就是说你既可以只用核心的视图层渲染功能来快速开发些需求，也可以使用 vue 全家桶。根据自己的需求选择不同的层级。</p>
<h2 id="vue-的响应式原理" tabindex="-1"><a class="header-anchor" href="#vue-的响应式原理" aria-hidden="true">#</a> Vue 的响应式原理</h2>
<p>在 Vue 中，数据模型下的所有属性，会被 Vue 使用 <code>Object.defineProperty</code> 进行数据劫持代理。响应式的核心机制是观察者模式，数据是被观察的一方，一旦发生变化，通知所有观察者，这样观察者可以做出响应，比如当观察者为视图时，视图可以做出视图的更新。</p>
<blockquote>
<p>Object.defineProperty 是什么？</p>
</blockquote>
<p><code>Object.defineProperty()</code> 方法可以直接在一个对象上定义一个新的属性，或者修改一个对象的现有舒心，返回此对象：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> XiaoMing <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>XiaoMing<span class="token punctuation">,</span> <span class="token string">'name'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  value<span class="token operator">:</span> <span class="token string">'小明'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>XiaoMing<span class="token punctuation">)</span>
<span class="token comment">// {name: "小明"}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>这个函数中需要传递三个参数：</p>
<ol>
<li>需要添加属性的对象名称</li>
<li>需要给对象添加的属性名称</li>
<li>第三个参数为一个对象，里面包含 <code>value</code> 是要添加的属性值</li>
</ol>
<p>但是这样添加的属性值默认是不能被<strong>修改、删除、遍历</strong>的，那么在严格模式下，修改属性值就会报错（非严格模式不会报错）：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string">'use strict'</span>
<span class="token keyword">const</span> XiaoMing <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>XiaoMing<span class="token punctuation">,</span> <span class="token string">'name'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  value<span class="token operator">:</span> <span class="token string">'小明'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
XiaoMing<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">'Ming'</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>XiaoMing<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>报错内容为：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>demo6.html:41 Uncaught TypeError: Cannot assign to <span class="token builtin class-name">read</span> only property <span class="token string">'name'</span> of object <span class="token string">'#&lt;Object>'</span>
// 无法分配给对象“<span class="token comment">#&lt;object>”的只读属性“name”</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>我们可以在第三个参数的对象中配置属性来改变状态，下面仅列举出一些常用属性：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> XiaoMing <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>XiaoMing<span class="token punctuation">,</span> <span class="token string">'name'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  configurable<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 是否可以删除属性</span>
  writable<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 是否可以修改</span>
  enumerable<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  value<span class="token operator">:</span> <span class="token string">'小明'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>更多详细信息参考 MDN 文档：<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty" target="_blank" rel="noopener noreferrer">Object.defineProperty()<ExternalLinkIcon/></a></p>
<h2 id="vue-的优势有什么" tabindex="-1"><a class="header-anchor" href="#vue-的优势有什么" aria-hidden="true">#</a> Vue 的优势有什么</h2>
<ol>
<li>轻量级框架：</li>
</ol>
<p>只关注视图层，是一个构建数据的视图集合，Vue.js 通过简洁的 API 提供高效的数据绑定和灵活的组件系统。</p>
<ol start="2">
<li>简单易学</li>
</ol>
<p>国人开发，中文文档，不存在语言障碍，容易理解和学习。</p>
<ol start="3">
<li>双向数据绑定</li>
</ol>
<p>也就是所谓的响应式数据绑定，也就是说，vue.js 会自动响应数据的变化情况，并且根据用户在代码中预先写好的绑定关系，对所有绑定在一起的数据和视图内容都进行修改。</p>
<p>这也就是 vue.js 最大的优点，通过 MVVM 思想实现数据的双向绑定，让开发者不用再操作 dom 对象，有更多的时间去思考业务逻辑。</p>
<ol start="4">
<li>组件化</li>
</ol>
<p>在 Vue 中，我们可以将一切可以重复使用的部分，单纯抽离出来做成一个组件，可以在任何位置反复的引入使用，</p>
<ol start="5">
<li>
<p>虚拟 DOM</p>
</li>
<li>
<p>运行速度快</p>
</li>
</ol>
<p>相比 react 而言，同样是操作虚拟 dom，就性能而言 Vue 存在很大的优势。</p>
<h2 id="什么是虚拟-dom" tabindex="-1"><a class="header-anchor" href="#什么是虚拟-dom" aria-hidden="true">#</a> 什么是虚拟 DOM</h2>
<p>虚拟 DOM 就是一种可以预先通过 JavaScript 进行各种计算，把最终的 DOM 操作计算出来并优化，由于这个 DOM 操作属于预处理操作，并没有真实的操作 DOM，所以叫做虚拟 DOM。最后在计算完毕才真正将 DOM 操作提交，将 DOM 操作变化反映到 DOM 树上。</p>
</template>
