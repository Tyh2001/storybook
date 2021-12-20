<template><h1 id="其它技术" tabindex="-1"><a class="header-anchor" href="#其它技术" aria-hidden="true">#</a> 其它技术</h1>
<h2 id="githubpages-部署" tabindex="-1"><a class="header-anchor" href="#githubpages-部署" aria-hidden="true">#</a> GitHubPages 部署</h2>
<h3 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h3>
<p>很多的静态网站都是部署在 GitHub Pages 上的，比如 Vue 的官方文档，阮一峰的个人网站，还有很多其它的个人网站、博客等等，那么部署在 GitHub Pages 上有什么好处呢？
稳定，可靠，不花钱，更新维护容易，操作简单，适合新手操作，那么接下来来详细说一下部署流程</p>
<h3 id="准备一个自己的域名" tabindex="-1"><a class="header-anchor" href="#准备一个自己的域名" aria-hidden="true">#</a> 准备一个自己的域名</h3>
<p>这里使用阿里云举例
GitHub 默认的免费域名强制开启 https
在 https 协议中无法发出 http 请求
如果项目中使用的接口都是 http 协议的，那么就需要准备一个自己的域名，因为自定义域名可以选择使用 http 协议或者 https 协议
或者你让接口开发者为接口服务提供 https 的支持</p>
<h3 id="在添加记录中进行设置" tabindex="-1"><a class="header-anchor" href="#在添加记录中进行设置" aria-hidden="true">#</a> 在添加记录中进行设置</h3>
<p>记录类型：CNAME - 将域名指向另一个域名
主机记录：我设置是二级域名，名称叫 <code>shengbang</code>（可以自定义）
解析线路：默认即可
记录值：因为是部署在 Github 上，所以要写 Github 的记录值，是<strong>你的 Github 用户名 + github.io</strong>
TTL：默认即可
注意：
记录值必须是<strong>你的 Github 用户名 + github.io</strong>，否则域名会设置不生效
详细设置参数请参考阿里云官方说明
<img src="/other/github_1.png" alt="image" style="zoom:50%;" /></p>
<h3 id="添加-cname-文件" tabindex="-1"><a class="header-anchor" href="#添加-cname-文件" aria-hidden="true">#</a> 添加 CNAME 文件</h3>
<p>在项目的 public 目录中添加 CNAME 文件</p>
<p><code>shengbang.tianyuhao.icu</code> 文件名叫 <code>CNAME</code>没有后缀名
内容是你之前设置是主机记录值+ .你的域名</p>
<h3 id="生成-github-访问令牌" tabindex="-1"><a class="header-anchor" href="#生成-github-访问令牌" aria-hidden="true">#</a> 生成 GitHub 访问令牌</h3>
<ol>
<li>点击用户设置
<img src="/other/github_2.png" alt="image" style="zoom:50%;" /></li>
<li>选择 Developer settings
<img src="/other/github_3.png" alt="image" style="zoom:50%;" /></li>
<li>选择 <code>Personal access tokens</code> → <code>Generate new token</code>
<img src="/other/github_4.png" alt="image" style="zoom:50%;" /></li>
<li>给 <code>Token</code>设置一个名字，不能是中文
再选中 <code>repo</code>和 <code>workflow</code>之后拉到最下面进生成 Token
<img src="/other/github_5.png" alt="image" style="zoom:50%;" />
<img src="/other/github_6.png" alt="image" style="zoom:50%;" /></li>
<li>生成时候会显示出 Token 但是 Token 只显示一次！需要复制保存处理！
如果 Token 没有保存后丢失，请重新上述步骤进行重新生成！
<img src="/other/github_7.png" alt="image" style="zoom:50%;" /></li>
<li>创建远程仓库
此处省略创建仓库步骤，创建完成之后暂时不要提交代码！</li>
<li>在远程仓库中设置，将 GitHub 访问令牌添加到远程仓库的 secrets 中
<img src="/other/github_8.png" alt="image" style="zoom:50%;" />
<img src="/other/github_9.png" alt="image" style="zoom:50%;" />
Name：<code>ACCESS_TOKEN</code>（必须是这个名字）
Value: <code>之前生成的 GitHub 访问令牌</code>
设置完成之后进行添加，添加完成效果如下：
<img src="/other/github_10.png" alt="image" style="zoom:50%;" />
这样就添加成功了！！！</li>
</ol>
<h3 id="添加配置文件" tabindex="-1"><a class="header-anchor" href="#添加配置文件" aria-hidden="true">#</a> 添加配置文件</h3>
<p>在项目<code>根目录</code>创建：
<code>.github/workflows/main.yml</code>
文件夹名称和文件名必须是上面的！！！
<code>main.yml</code>中写入下面代码段：</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">name</span><span class="token punctuation">:</span> build and deploy

<span class="token comment"># 当 master 分支 push 代码的时候触发 workflow</span>
<span class="token key atrule">on</span><span class="token punctuation">:</span>
  <span class="token key atrule">push</span><span class="token punctuation">:</span>
    <span class="token key atrule">branches</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> master

<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token key atrule">build-deploy</span><span class="token punctuation">:</span>
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest
    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token comment"># 下载仓库代码</span>
      <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v2

      <span class="token comment"># 缓存依赖</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Get yarn cache
        <span class="token key atrule">id</span><span class="token punctuation">:</span> yarn<span class="token punctuation">-</span>cache
        <span class="token key atrule">run</span><span class="token punctuation">:</span> echo "<span class="token punctuation">:</span><span class="token punctuation">:</span>set<span class="token punctuation">-</span>output name=dir<span class="token punctuation">:</span><span class="token punctuation">:</span>$(yarn cache dir)"
      <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/cache@v1
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">path</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> steps.yarn<span class="token punctuation">-</span>cache.outputs.dir <span class="token punctuation">}</span><span class="token punctuation">}</span>
          <span class="token key atrule">key</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> runner.os <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">-</span>yarn<span class="token punctuation">-</span>$<span class="token punctuation">{</span><span class="token punctuation">{</span> hashFiles('<span class="token important">**/yarn.lock')</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>
          <span class="token key atrule">restore-keys</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
            ${{ runner.os }}-yarn-</span>

      <span class="token comment"># 安装依赖</span>
      <span class="token punctuation">-</span> <span class="token key atrule">run</span><span class="token punctuation">:</span> yarn

      <span class="token comment"># 打包构建</span>
      <span class="token punctuation">-</span> <span class="token key atrule">run</span><span class="token punctuation">:</span> yarn build

      <span class="token comment"># 发布到 GitHub Pages</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Deploy
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> peaceiris/actions<span class="token punctuation">-</span>gh<span class="token punctuation">-</span>pages@v2
        <span class="token key atrule">env</span><span class="token punctuation">:</span>
          <span class="token key atrule">PERSONAL_TOKEN</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.ACCESS_TOKEN <span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token comment"># 访问秘钥</span>
          <span class="token key atrule">PUBLISH_BRANCH</span><span class="token punctuation">:</span> gh<span class="token punctuation">-</span>pages <span class="token comment"># 推送分支</span>
          <span class="token key atrule">PUBLISH_DIR</span><span class="token punctuation">:</span> ./dist <span class="token comment"># 部署目录</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br></div></div><blockquote>
<p>配置好后即可将项目推送至远程仓库</p>
</blockquote>
<h3 id="怎么部署" tabindex="-1"><a class="header-anchor" href="#怎么部署" aria-hidden="true">#</a> 怎么部署？</h3>
<p>上传远程仓库后 Github 会帮助我们自动部署
部署会有一个打包的过程，时间不会太长，等待一下即可
下面是查看部署的状态
<img src="/other/github_11.png" alt="image" style="zoom:50%;" />
<img src="/other/github_12.png" alt="image" style="zoom:50%;" />
<img src="/other/github_13.png" alt="image" style="zoom:50%;" />
当所有选项都打上勾之后就代表部署完成了
我们可以通过仓库设置下面来查看部署状态：
<img src="/other/github_14.png" alt="image" style="zoom:50%;" />
<img src="/other/github_15.png" alt="image" style="zoom:50%;" />
找到 GitHub Pages 选项 出现上面对号表示项目已经部署成功，部署的网址就是后面的网址，打开即可部署完成！！！</p>
<h3 id="怎么更新" tabindex="-1"><a class="header-anchor" href="#怎么更新" aria-hidden="true">#</a> 怎么更新？</h3>
<p>很简单，修改源代码，把更新提交到远程仓库即可。说白了你可以忽略网站部署这件事儿了。然后你可以通过仓库中的 Action 查看构建部署状态（非必须）。不想看的话就等一会儿就可以了。</p>
<h2 id="git-常用命令" tabindex="-1"><a class="header-anchor" href="#git-常用命令" aria-hidden="true">#</a> Git 常用命令</h2>
<table>
<thead>
<tr>
<th>命令</th>
<th>简要说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>git clone 仓库地址</td>
<td>克隆版本库</td>
</tr>
<tr>
<td>git status</td>
<td>查看状态</td>
</tr>
<tr>
<td>git add .</td>
<td>添加至暂存区</td>
</tr>
<tr>
<td>git commit -m '说明'</td>
<td>提交并添加说明</td>
</tr>
<tr>
<td>git push -u origin master</td>
<td>推送至远程仓库 master 分支</td>
</tr>
<tr>
<td>git branch -a</td>
<td>列出所有分支</td>
</tr>
<tr>
<td>git branch test</td>
<td>创建 test 分支</td>
</tr>
<tr>
<td>git checkout test</td>
<td>切换到 test 分支</td>
</tr>
<tr>
<td>git merge test</td>
<td>把 test 分支合并到 master 分支</td>
</tr>
<tr>
<td>git branch -d test</td>
<td>删除 test 分支</td>
</tr>
<tr>
<td>git pull origin master</td>
<td>同步分支到本地</td>
</tr>
<tr>
<td>git pull origin master</td>
<td>同步分支到本地</td>
</tr>
<tr>
<td>git reset --hard 版本号</td>
<td>获取历史版本</td>
</tr>
</tbody>
</table>
<h2 id="npm-一些命令" tabindex="-1"><a class="header-anchor" href="#npm-一些命令" aria-hidden="true">#</a> Npm 一些命令</h2>
<p><code>--save</code> 是什么意思？</p>
<p><code>npm i xxx --save</code> 是把依赖写入进 dependencies 对象里面，</p>
<p>dependencies 是生产环境下的依赖，项目刚需的依赖在这里，比如 UI 框架，字体文件等线上必需的东西</p>
<p><code>-d</code> 什么意思？</p>
<p><code>npm i xxx -g</code> 就是安装到全局下，在命令行的任何地方都可以操作，不会提示“命令不存在等错误”</p>
<h2 id="第三方库推荐" tabindex="-1"><a class="header-anchor" href="#第三方库推荐" aria-hidden="true">#</a> 第三方库推荐</h2>
<h3 id="rollup-plugin-visualizer" tabindex="-1"><a class="header-anchor" href="#rollup-plugin-visualizer" aria-hidden="true">#</a> Rollup Plugin Visualizer</h3>
<p><strong>介绍</strong></p>
<p><a href="https://github.com/btd/rollup-plugin-visualizer" target="_blank" rel="noopener noreferrer">rollup-plugin-visualizer<ExternalLinkIcon/></a> 是一个汇总插件可视化工具，项目执行 <code>npm run build</code> 之后，项目根目录下会生成一个 <code>stats.html</code> 可以展示安装的第三方包文件大小</p>
<p><strong>安装</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> --save-dev rollup-plugin-visualizer
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>配置</strong></p>
<p><code>vite.config.js</code> 中：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> vue <span class="token keyword">from</span> <span class="token string">'@vitejs/plugin-vue'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vite'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> visualizer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'rollup-plugin-visualizer'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">visualizer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="json-bigint" tabindex="-1"><a class="header-anchor" href="#json-bigint" aria-hidden="true">#</a> json-bigint</h3>
<p>js 能够精准的表示的整数范围在 -2^53 到 -2^53 之间（不含两个端点），超出这个范围，则无法正常显示这个值，这使得 JavaScript 不适合金融和科学方面的计算</p>
<p>通常我么在使用<strong>axios</strong>发送请求的时候，后台可能会返回比较大的一个数字，因为<strong>axios</strong>会把 JSON 格式字符串转换为 JS 对象，那么如果这个数字很大，那么就会出现问题，比如：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token string">'{ "id": 158464848747369549 }'</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">.</span>id<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>这样输出的<code>id</code>就不是原始的数据了</p>
<p>因为这个数字超出了 JS 的安全整数范围，所以不能正常表示了，那么<strong>json-bigint</strong>就可以很好的帮助解决这个问题</p>
<p><strong>json-bigint</strong> Github 仓库地址：<a href="https://github.com/sidorares/json-bigint" target="_blank" rel="noopener noreferrer">json-bigint<ExternalLinkIcon/></a></p>
<p>安装 <strong>json-bigint</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i json-bigint
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>可以通过 json-bigint 内置的方法来获取这样大的数据</p>
<ol>
<li>将 JSON 数据转换为 JavaScript 对象</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>JSONbig<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>等同于</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>通过<code>JSONbig.parse()</code>转换为的是一个 js 对象，其实它只是换了一种形式表示出了这个数字，那么想要再获得这个数据，还需要<code>toString()</code>一下就可以获取到了</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 引入 json-bigint</span>
<span class="token keyword">import</span> JSONbig <span class="token keyword">from</span> <span class="token string">'json-bigint'</span>

<span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token string">'{ "id": 158464848747369549 }'</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">.</span>id<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>JSONbig<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">.</span>id<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ol start="2">
<li>将 JavaScript 对象转换为 JSON 字符串</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>JSONbig<span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>等同于</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>虽然这个两个方法的等同于的，但是通过<code>JSONbig.parse()</code>转换为的 JavaScript 对象使用<code>JSON.stringify()</code>转换为 JSON 字符串会有一定的问题</p>
<blockquote>
<p>所以。用什么转来的，就用什么转回去就不会有问题了</p>
</blockquote>
<h2 id="github-提交代码不增加小绿格" tabindex="-1"><a class="header-anchor" href="#github-提交代码不增加小绿格" aria-hidden="true">#</a> Github 提交代码不增加小绿格?</h2>
<p>事情是这样的，我在公司和在家里都会往 GIthub 上提交代码，但是大多数时间都是在公司提交，但是在公司提交就不会增加首页下方小绿格的贡献度数量，后来发现公司电脑的邮箱不是 Github 绑定的邮箱才导致的，所以解决方案是</p>
<p>修改全局默认的用户名和邮箱</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> config --global user.name <span class="token string">'xxxxx'</span>
<span class="token function">git</span> config --global user.email <span class="token string">'xxxxx@qq.com'</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>这样修改之后再提交就会增加贡献度和下方小绿格了。</p>
<h2 id="进制转换" tabindex="-1"><a class="header-anchor" href="#进制转换" aria-hidden="true">#</a> 进制转换</h2>
<h3 id="进制的概念" tabindex="-1"><a class="header-anchor" href="#进制的概念" aria-hidden="true">#</a> 进制的概念</h3>
<p><strong>二进制：</strong> 0、1
<strong>八进制：</strong> 0、1、2、3、4、5、6、7
<strong>十进制：</strong> 0、1、2、3、4、5、6、7、8、9
<strong>十六进制：</strong> 0、1、2、3、4、5、6、7、8、9、A、B、C、D、E</p>
<table>
<thead>
<tr>
<th>二进制</th>
<th>八进制</th>
<th>十进制</th>
<th>十六进制</th>
</tr>
</thead>
<tbody>
<tr>
<td>1 -&gt; 1</td>
<td>7 -&gt; 7</td>
<td>9 -&gt; 9</td>
<td>14 -&gt; D</td>
</tr>
<tr>
<td>2 -&gt; 10</td>
<td>8 -&gt; 10</td>
<td>10 -&gt; 10</td>
<td>15 -&gt; E</td>
</tr>
<tr>
<td>3 -&gt; 11</td>
<td>9 -&gt; 11</td>
<td>11 -&gt; 11</td>
<td>16 -&gt; 10</td>
</tr>
<tr>
<td>4 -&gt; 100</td>
<td>10 -&gt; 12</td>
<td>12 -&gt; 12</td>
<td>17 -&gt; 11</td>
</tr>
</tbody>
</table>
<h3 id="进制转换-1" tabindex="-1"><a class="header-anchor" href="#进制转换-1" aria-hidden="true">#</a> 进制转换</h3>
<p><strong>将十进制转换为二 八 十六进制</strong></p>
<p>公式: <code>除N 求余 倒序</code> 一直将除到商为 0 时，在将余数倒序</p>
<p>想要将十进制转换为其他进制,就除多少,比如下面将十进制的 21 转换</p>
<p><strong>转换为二进制:</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>21 / 2 = 10 …… 1
10 / 2 = 5 …… 0
5 / 2 = 2 …… 1
2 / 2 = 1 …… 0
1 / 2 = 0 …… 1
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>所以 21 的二进制结果为 <code>10101</code></p>
<p><strong>转换为八进制:</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>21 / 8 = 2 …… 5
2 / 8 = 0 …… 2
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>所以 21 的八进制结果为 <code>25</code></p>
<p><strong>转换为十六进制:</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>21 / 16 = 1 …… 5
1 / 16 = 0 …… 1
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>所以 21 的十六进制结果为 <code>15</code></p>
<p><strong>将二 八 十六进制转换为十进制</strong></p>
<p>上面介绍了将将十进制转换为二 八 十六进制，下面介绍将二 八 十六进制转换为十进制</p>
<p><strong>二进制转换为十进制</strong></p>
<p><code>10101</code> 转换为十进制就是</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>1 * 2⁰ + 0 * 2¹ + 1 * 2² + 0 * 2³ + 1 * 2⁴ = 1 + 0 + 4 + 0 + 16 = 21
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><blockquote>
<p>一个数的零次方都是 1</p>
</blockquote>
<p><strong>八进制转换为十进制</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>5 * 8⁰ + 2 * 8¹ = 5 + 16 = 21
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>十六进制转换为十进制</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>5 * 16⁰ + 1 * 16¹ = 16 + 5 = 21
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="怎么将-html-文件以端口形式打开" tabindex="-1"><a class="header-anchor" href="#怎么将-html-文件以端口形式打开" aria-hidden="true">#</a> 怎么将 html 文件以端口形式打开</h2>
<p>VScode 安装 Live Server</p>
<p>html 文件中右键点击 <code>Open with Live Server</code> 就可以启动一个端口了</p>
<p>当编辑器中代码保存后浏览器不需要刷新就可以进行同步</p>
</template>
