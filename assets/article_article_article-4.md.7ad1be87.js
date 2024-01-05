import{_ as a,o as e,c as s,a as n}from"./app.669799b3.js";const y=JSON.parse('{"title":"GitHubPages 部署项目","description":"","frontmatter":{},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"域名解析","slug":"域名解析","link":"#域名解析","children":[]},{"level":2,"title":"生成 GitHub 访问令牌","slug":"生成-github-访问令牌","link":"#生成-github-访问令牌","children":[]},{"level":2,"title":"配置远程仓库","slug":"配置远程仓库","link":"#配置远程仓库","children":[]},{"level":2,"title":"添加 CNAME 文件","slug":"添加-cname-文件","link":"#添加-cname-文件","children":[]},{"level":2,"title":"添加配置文件","slug":"添加配置文件","link":"#添加配置文件","children":[]},{"level":2,"title":"一些问题","slug":"一些问题","link":"#一些问题","children":[]}],"relativePath":"article/article/article-4.md"}'),l={name:"article/article/article-4.md"},p=n(`<h1 id="githubpages-部署项目" tabindex="-1">GitHubPages 部署项目 <a class="header-anchor" href="#githubpages-部署项目" aria-hidden="true">#</a></h1><h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-hidden="true">#</a></h2><p>很多的静态网站都是部署在 <code>GitHub Pages</code> 上的，比如很多其它的个人网站、博客等等，那么部署在 <code>GitHub Pages</code> 上有什么好处呢？</p><p>稳定、可靠、不花钱、更新维护容易、操作简单、适合新手操作，那么接下来详细说一下部署流程，下面使用 <code>vue3</code> 项目进行演示。</p><h2 id="域名解析" tabindex="-1">域名解析 <a class="header-anchor" href="#域名解析" aria-hidden="true">#</a></h2><p>如果没有域名，可以跳过此步骤</p><p>这里演示直接使用一个二级域名进行演示</p><ol><li>在阿里云的域名解析中添加记录</li><li>记录类型选择 CNAME</li><li>主机记录填写二级域名的前缀。比如你希望以后的地址是 <code>demo.xxx.com</code> 那么就填写 <code>demo</code>，也就是二级域名的前缀</li><li>解析线路默认</li><li>记录值为 <code>你的 Github 用户名 + github.io</code>，比如我就填写 <code>tyh2001.github.io</code></li><li>TTL 默认</li></ol><p><img src="https://www.hualigs.cn/image/621262dd9c842.jpg" alt=""></p><p>内容是你之前设置是<code>主机记录值.你的域名</code></p><h2 id="生成-github-访问令牌" tabindex="-1">生成 GitHub 访问令牌 <a class="header-anchor" href="#生成-github-访问令牌" aria-hidden="true">#</a></h2><p>依次进入进入 Github 的 <code>setting / Developer settings / Personal access tokens / Generate new token</code> 中，进行添加访问令牌。</p><p>直接点击<a href="https://github.com/settings/tokens/new" target="_blank" rel="noreferrer">这里</a>可直接跳转添加页面。</p><p>随便设置一个 <code>token</code> 的名称，然后勾选 <code>repo</code> 和 <code>workflow</code> 两个选项</p><p><img src="https://www.hualigs.cn/image/621262df9b33d.jpg" alt=""></p><p>最后滚动到最下面，点击 <code>Generate token</code> 进行创建 <code>token</code></p><p>创建完成之后，点击复制先保存 <code>token</code>，因为<strong>token 只会显示一次，如果关闭页面或者刷新了页面之后，token 就再也找不到了</strong>。如果意外丢失，只能重新创建一个新的。</p><p><img src="https://www.hualigs.cn/image/621262df39863.jpg" alt=""></p><h2 id="配置远程仓库" tabindex="-1">配置远程仓库 <a class="header-anchor" href="#配置远程仓库" aria-hidden="true">#</a></h2><p>进入需要部署的远程仓库，在远程仓库的 <code>Settings / Secrets / Actions</code> 的设置界面中，点击 <code>New repository secret</code>，进行添加 <code>新存储库机密</code>。</p><p><img src="https://www.hualigs.cn/image/621262dfe94ef.jpg" alt=""></p><ul><li>Name: <code>ACCESS_TOKEN</code>（必须是这个名字）</li><li>Value: 之前生成的 GitHub 访问令牌</li></ul><p>然后点击下面 <code>Add secret</code> 按钮，进行添加。</p><h2 id="添加-cname-文件" tabindex="-1">添加 CNAME 文件 <a class="header-anchor" href="#添加-cname-文件" aria-hidden="true">#</a></h2><p>在项目的 <code>public</code> 目录下，新建 <code>CNAME</code> 文件，没有后缀名，里面填写将来要部署的地址位置，我在之前二级域名添加了 <code>demo</code> 的二级域名，那么我的 <code>CNAME</code> 文件就填写 <code>demo.tianyuhao.cn</code>。</p><h2 id="添加配置文件" tabindex="-1">添加配置文件 <a class="header-anchor" href="#添加配置文件" aria-hidden="true">#</a></h2><p>在项目 <code>根目录</code> 创建：<code>.github/workflows/main.yml</code><code>main.yml</code>中写入下面代码段：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">name: build and deploy</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"># 当 master 分支 push 代码的时候触发 workflow</span></span>
<span class="line"><span style="color:#babed8;">on:</span></span>
<span class="line"><span style="color:#babed8;">  push:</span></span>
<span class="line"><span style="color:#babed8;">    branches:</span></span>
<span class="line"><span style="color:#babed8;">      - master</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">jobs:</span></span>
<span class="line"><span style="color:#babed8;">  build-deploy:</span></span>
<span class="line"><span style="color:#babed8;">    runs-on: ubuntu-latest</span></span>
<span class="line"><span style="color:#babed8;">    steps:</span></span>
<span class="line"><span style="color:#babed8;">      # 下载仓库代码</span></span>
<span class="line"><span style="color:#babed8;">      - uses: actions/checkout@v2</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">      # 缓存依赖</span></span>
<span class="line"><span style="color:#babed8;">      - name: Get yarn cache</span></span>
<span class="line"><span style="color:#babed8;">        id: yarn-cache</span></span>
<span class="line"><span style="color:#babed8;">        run: echo &quot;::set-output name=dir::$(yarn cache dir)&quot;</span></span>
<span class="line"><span style="color:#babed8;">      - uses: actions/cache@v1</span></span>
<span class="line"><span style="color:#babed8;">        with:</span></span>
<span class="line"><span style="color:#babed8;">          path: \${{ steps.yarn-cache.outputs.dir }}</span></span>
<span class="line"><span style="color:#babed8;">          key: \${{ runner.os }}-yarn-\${{ hashFiles(&#39;**/yarn.lock&#39;) }}</span></span>
<span class="line"><span style="color:#babed8;">          restore-keys: |</span></span>
<span class="line"><span style="color:#babed8;">            \${{ runner.os }}-yarn-</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">      # 安装依赖</span></span>
<span class="line"><span style="color:#babed8;">      - run: yarn</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">      # 打包构建</span></span>
<span class="line"><span style="color:#babed8;">      - run: yarn build</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">      # 发布到 GitHub Pages</span></span>
<span class="line"><span style="color:#babed8;">      - name: Deploy</span></span>
<span class="line"><span style="color:#babed8;">        uses: peaceiris/actions-gh-pages@v2</span></span>
<span class="line"><span style="color:#babed8;">        env:</span></span>
<span class="line"><span style="color:#babed8;">          PERSONAL_TOKEN: \${{ secrets.ACCESS_TOKEN }} # 访问秘钥</span></span>
<span class="line"><span style="color:#babed8;">          PUBLISH_BRANCH: gh-pages # 推送分支</span></span>
<span class="line"><span style="color:#babed8;">          PUBLISH_DIR: ./dist # 部署目录</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><p>配置好之后，将项目推送至远程仓库，即可自动部署了。</p><h2 id="一些问题" tabindex="-1">一些问题 <a class="header-anchor" href="#一些问题" aria-hidden="true">#</a></h2><ul><li>怎么查看部署？</li></ul><p>在远程仓库的 <code>Actions</code> 中可以查看是否部署完成。</p><ul><li>怎么更新？</li></ul><p>不需要手动更新，更改代码之后，直接提交，就会自动打包部署了。</p><ul><li>怎么查看部署地址？</li></ul><p>在远程仓库的 <code>Setting / page</code>，中查看部署的地址和分支。</p>`,36),c=[p];function o(t,i,d,r,b,h){return e(),s("div",null,c)}const g=a(l,[["render",o]]);export{y as __pageData,g as default};
