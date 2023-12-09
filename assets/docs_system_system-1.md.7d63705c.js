import{_ as s,o as a,c as n,a as l}from"./app.7748d0de.js";const E=JSON.parse('{"title":"Windows 命令","description":"","frontmatter":{},"headers":[{"level":2,"title":"目录操作","slug":"目录操作","link":"#目录操作","children":[]},{"level":2,"title":"文件操作","slug":"文件操作","link":"#文件操作","children":[]},{"level":2,"title":"编辑文件","slug":"编辑文件","link":"#编辑文件","children":[]}],"relativePath":"docs/system/system-1.md"}'),e={name:"docs/system/system-1.md"},p=l(`<h1 id="windows-命令" tabindex="-1">Windows 命令 <a class="header-anchor" href="#windows-命令" aria-hidden="true">#</a></h1><h2 id="目录操作" tabindex="-1">目录操作 <a class="header-anchor" href="#目录操作" aria-hidden="true">#</a></h2><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 进入目录</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">/xxx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 返回上一层</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">..</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 进入指定盘</span></span>
<span class="line"><span style="color:#FFCB6B;">D:</span></span>
<span class="line"><span style="color:#FFCB6B;">C:</span></span>
<span class="line"></span></code></pre></div><h2 id="文件操作" tabindex="-1">文件操作 <a class="header-anchor" href="#文件操作" aria-hidden="true">#</a></h2><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 创建文件夹</span></span>
<span class="line"><span style="color:#FFCB6B;">mkdir</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">xxxx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 指定目录创建</span></span>
<span class="line"><span style="color:#FFCB6B;">mdkri</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">D:</span><span style="color:#BABED8;">\\a</span><span style="color:#C3E88D;">pp</span><span style="color:#BABED8;">\\d</span><span style="color:#C3E88D;">ocument</span><span style="color:#BABED8;">\\x</span><span style="color:#C3E88D;">xxx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 相对目录创建文件夹</span></span>
<span class="line"><span style="color:#FFCB6B;">mkdir</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">..</span><span style="color:#BABED8;">\\x</span><span style="color:#C3E88D;">xxx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 删除文件</span></span>
<span class="line"><span style="color:#FFCB6B;">del</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">xxx.txt</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 当前目录下创建新文件</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">.</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">xxx.txt</span></span>
<span class="line"></span></code></pre></div><h2 id="编辑文件" tabindex="-1">编辑文件 <a class="header-anchor" href="#编辑文件" aria-hidden="true">#</a></h2>`,6),t=[p];function o(c,i,r,d,y,h){return a(),n("div",null,t)}const x=s(e,[["render",o]]);export{E as __pageData,x as default};
