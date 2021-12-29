<template><h1 id="年度总结" tabindex="-1"><a class="header-anchor" href="#年度总结" aria-hidden="true">#</a> 年度总结</h1>
<h2 id="_2021-年年度总结" tabindex="-1"><a class="header-anchor" href="#_2021-年年度总结" aria-hidden="true">#</a> 2021 年年度总结</h2>
<blockquote>
<p>杭州达买电子商务有限公司</p>
<p>田宇浩 2021/12/24</p>
</blockquote>
<p>已经到年末了，自己也对今年做了一些总结，包括在 2021 年的工作回顾、年度工作中得到了什么和 2022 年的工作计划。总结如下：</p>
<h3 id="年度工作回顾" tabindex="-1"><a class="header-anchor" href="#年度工作回顾" aria-hidden="true">#</a> 年度工作回顾</h3>
<p>我自 <strong>2021 年 5 月 10</strong> 日入职以来，一直担任<code>前端开发</code>的工作内容，负责的内容有：花旗 <code>landingpage</code> 页面的开发、日常服务器维护、一些电商数据处理的逻辑开发还有花旗的一些开发项目，下面分别来说一下。</p>
<h4 id="花旗-landingpage" tabindex="-1"><a class="header-anchor" href="#花旗-landingpage" aria-hidden="true">#</a> 花旗 landingpage</h4>
<p>花旗 <code>landingpage</code> 页面是使用 <code>js</code> 的一个老牌的脚本包 <code>jquery</code> 来开发的，页面底部有点击弹出的弹窗，弹窗内容是活动细则的一些注意事项，弹出效果就是使用 <code>jquery</code> 的内部函数 <code>fadeIn</code> 和 <code>hide</code> 来实现的显示和隐藏，这个函数内置了动画效果，使得显示和隐藏有很好的过度效果，通过下方按钮的 <code>click</code> 事件来触发该函数，页面效果如下：</p>
<img src="/annual_summary/landingpage.jpg">
<h4 id="服务器维护和版本控制" tabindex="-1"><a class="header-anchor" href="#服务器维护和版本控制" aria-hidden="true">#</a> 服务器维护和版本控制</h4>
<p>因为日常中开发的所有项目都要部署到服务器上进行测试，来给客户来审阅，所以服务器的目录和文件夹命名格式就会显得格外的重要，以免文件过多而变得混乱，那么我的命名规范做法是：<code>当日的日期 + _ + 项目类型 + 描述</code>，下面是服务器的一个目录截图：</p>
<img src="/annual_summary/winSCP.jpg">
<p>除了服务器，日常开发的项目也需要对其有所保留，因为各个需求可能随时都会进行更改，为了更好的做到版本追溯，这里我使用了 <code>Github</code> 来进行存储代码，下面是其中一个项目的仓库：</p>
<img src="/annual_summary/cangku.jpg">
<h4 id="电商数据处理" tabindex="-1"><a class="header-anchor" href="#电商数据处理" aria-hidden="true">#</a> 电商数据处理</h4>
<p>电商数据处理的实现是采用的后端技术，语言使用的是 <code>php</code> 和 <code>php</code> 的框架 <code>ThinkPHP</code>，数据库使用 <code>Mysql</code> 数据库，通过一下写好的计算公式和逻辑，来将每周的仓库出货量计算出来导出成表格文件，下面是数据库的截图，这个最终的结果表，是通过其他另外的 6 个表进行匹配计算，将结果汇总到一个表中进行展示，然后再进行导出。</p>
<img src="/annual_summary/mysql.jpg">
<h4 id="花旗项目开发" tabindex="-1"><a class="header-anchor" href="#花旗项目开发" aria-hidden="true">#</a> 花旗项目开发</h4>
<blockquote>
<p>开发流程如下</p>
</blockquote>
<ol>
<li>
<p>花旗项目开发写了 1 个表单项目和 2 个投票项目，花旗投票项目是一个可以给用户投票的项目，一共是 64 个人，可以进行对其进行投票，开始自己设计了一个简单页面的流程图然后交给设计做出设计稿。</p>
</li>
<li>
<p>进入项目首先是一个表单输入框，输入 <code>SEOID</code>，然后可以进行登录，登录之后会将 <code>SEOID</code> 存入服务器的数据库中进行保留，然后就会进入投票页面。</p>
</li>
<li>
<p>在投票页面，这个页面将数据结构整理成了一个数组的结构，数组中包含的是一个一个的对象，每个对象中存储的是 64 个人的头像和姓名，然后使用 <code>vue</code> 中的 <code>v-for</code> 循环，来遍历出所有参与的用户进行页面渲染。</p>
</li>
<li>
<p>投票的单选框采用的是 <code>vue3</code> 的移动端组件库 <code>vant</code> 来进行搭建的，当用户投完三票之后，会展示提示弹出框，点击确定之后会进入结果页面。</p>
</li>
<li>
<p>结果页面展示的票数信息是使用 <a href="https://echarts.apache.org/zh" target="_blank" rel="noopener noreferrer">Echarts<ExternalLinkIcon/></a> 的柱状图进行展示的，展示信息要求是降序排列，这里使用到了 <code>js</code> 算法<a href="https://tianyuhao.cn/blog/javascript/js-computed.html#%E5%86%92%E6%B3%A1%E6%8E%92%E5%BA%8F" target="_blank" rel="noopener noreferrer">冒泡排序<ExternalLinkIcon/></a>来实现。</p>
</li>
<li>
<p>整体项目使用最新版的生态框架 <code>vite</code> 构建项目，使用最新版的 <code>vue3</code> 版本的项目进行开发，组件库使用 <code>vant</code> 框架进行组件库搭建，使用 <code>Echarts</code> 进行可视化展示，下面是页面的部分截图：</p>
</li>
</ol>
<p><strong>投票页面</strong></p>
<img src="/annual_summary/vote1.jpg">
<p><strong>结果页面</strong></p>
<img src="/annual_summary/vote2.jpg">
<h3 id="年度工作中得到了什么" tabindex="-1"><a class="header-anchor" href="#年度工作中得到了什么" aria-hidden="true">#</a> 年度工作中得到了什么</h3>
<ol>
<li>另外在做<a href="https://www.infinitymcn.com/web/0705_renova_list/front_end" target="_blank" rel="noopener noreferrer">Renova 可视化<ExternalLinkIcon/></a>项目的时候，里面也同样用到了 <code>Echarts</code>，让我对 <code>Echarts</code> 这个可视化库搭配 <code>vue2</code> 使用的更加熟练了，技术也提示了。另外，在接近年末的时候，我将 <code>vue3</code> 整体自学了一遍，将各种新生的写法都了解了，那么后续也在最近的投票的三个项目中实际上手开发了。下面是 Renova 可视化项目的截图。</li>
</ol>
<p><strong>首页</strong>
<img src="/annual_summary/renova_1.jpg"></p>
<p><strong>详情页</strong>
<img src="/annual_summary/renova_2.jpg"></p>
<ol start="2">
<li>
<p>在工作的开发中，我学会了最新发布上线的 <code>vue3</code> 开发框架，对于这个开发框架在国内可是一时间变得十分火爆，那么在花旗最新的项目中，我也使用了 <code>vue3</code> 进行开发，与此同时，<code>vue3</code> 出现的同时，还带出来和它一起的小兄弟 <a href="https://cn.vitejs.dev" target="_blank" rel="noopener noreferrer">vite<ExternalLinkIcon/></a>，这是一个用于构建 <code>vue3</code> 项目的一个构建工具，它的特点就是：<strong>快</strong>，相比以往的 <code>vue cli</code> 的构建速度，可谓是快了 <strong>10</strong> 倍，所以在花旗的项目中使用了这两个工具进行开发，可谓是开发效率大幅度增加。</p>
</li>
<li>
<p>由于近期 <code>vue3</code> 框架在社区中的火爆，也迎来了众多了 ui 组件库的诞生，如 <code>element3</code> 、<code>element-plus</code> 等组件库，那么我也自主研发了一个基于 <code>vue3</code> 的组件库 <a href="https://tianyuhao.cn/tyhui/v3" target="_blank" rel="noopener noreferrer">tyh-ui<ExternalLinkIcon/></a>，目前在 <code>npm</code> 上的下载量还不错，那么在花旗的项目中，也使用到了这个组件库进行高效开发。</p>
</li>
</ol>
<img src="/annual_summary/tyhui.jpg">
<ol start="4">
<li>这里先贴一下 <code>Github</code> 代码提交记录</li>
</ol>
<img src="/annual_summary/tijiao.jpg">
<p>因为对于一个程序员来说，亮出来自己的 <a href="https://github.com/Tyh2001" target="_blank" rel="noopener noreferrer">Github<ExternalLinkIcon/></a> 也就是相当于做了个自我介绍，每日多次的代码提交数，使得我也是在 <code>Github</code> 上活跃了起来。</p>
<p>另外为了自己补充一写 <code>js</code> 的知识，最近正在读这本 <code>JavaScript高级程序设计(第四版)</code> 这本书，来提升自己的技术水平，通过自己看书学习，也学到了不少之前不懂的东西，比如 <code>对象的原型</code>、<code>原型链</code>、<code>构造函数</code>、<code>闭包函数</code>、<code>基础的算法</code> 相信这些以后都会用在工作中。</p>
<img src="/annual_summary/book.jpg">
<h3 id="_2022-年工作计划" tabindex="-1"><a class="header-anchor" href="#_2022-年工作计划" aria-hidden="true">#</a> 2022 年工作计划</h3>
<p>工作上我可以给咱们公司做一个官方网站，或者给 Renova 做一个官网，我可以担任一个项目负责人的角色，可以提升一下我的带动团队的能力也可以对业务更加的熟悉，也可以学习到更多的开发能力，提高自己的实战经验。</p>
<p>那么在 2022 年呢，希望可以将自己的工作做的更好，还可以做一些做更具有挑战性的工作，充分发挥自己的特长做到一专多能，未来能够更好的带动团队。</p>
<p>因为现在我们公司的开发部门只有我自己，所以我想们公司可以将开发部门也发展的更加强大一些，或许我们可以接一些比较大或更具有挑战性的项目来进行开发，我可以做各种前端网站的开发，也许也许开发部门也会有更多的成员的加入，来完成这些新的挑战。</p>
<h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h3>
<p>回顾 2021 年的工作，我在工作上，学习上，技术上都取得了新的进步。在今后的工作中，我将不断加强个人修养，努力学习，努力提高工作能力，把工作做的更好。</p>
</template>
