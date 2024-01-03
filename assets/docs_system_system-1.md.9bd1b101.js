import{_ as s,o as n,c as a,a as l}from"./app.0bf9f325.js";const D=JSON.parse('{"title":"Windows 命令","description":"","frontmatter":{},"headers":[{"level":2,"title":"命令行工具","slug":"命令行工具","link":"#命令行工具","children":[]},{"level":2,"title":"目录操作","slug":"目录操作","link":"#目录操作","children":[]},{"level":2,"title":"文件操作","slug":"文件操作","link":"#文件操作","children":[]},{"level":2,"title":"编辑文件","slug":"编辑文件","link":"#编辑文件","children":[]}],"relativePath":"docs/system/system-1.md"}'),p={name:"docs/system/system-1.md"},e=l(`<h1 id="windows-命令" tabindex="-1">Windows 命令 <a class="header-anchor" href="#windows-命令" aria-hidden="true">#</a></h1><h2 id="命令行工具" tabindex="-1">命令行工具 <a class="header-anchor" href="#命令行工具" aria-hidden="true">#</a></h2><p>windows 系统 主要有两个命令行工具</p><ul><li><a href="https://docs.microsoft.com/en-us/powershell" target="_blank" rel="noreferrer">PowerShell</a> PowerShell 是 Windows 系统自带的一种命令行工具，具有更强大的功能和更丰富的脚本支持。</li><li>[Cmder] Cmder 是一款 Windows 环境下非常简洁美观易用的 cmd 替代者，它属于一个跨平台的命令行增强工具，可以集成 windows batch, power shell, git, linux bash 等多种命令行于一体，支持了大部分的 Linux 命令。</li></ul><h2 id="目录操作" tabindex="-1">目录操作 <a class="header-anchor" href="#目录操作" aria-hidden="true">#</a></h2><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 进入目录</span></span>
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
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 当前目录下创建新文件</span></span>
<span class="line"><span style="color:#82AAFF;">type</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">nul</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">xxx.txt</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 查看当前目录下所有的文件（其他操作系统不支持）</span></span>
<span class="line"><span style="color:#FFCB6B;">dir</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 和 dir 一致（CMD 支持）</span></span>
<span class="line"><span style="color:#FFCB6B;">ls</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 复制文件</span></span>
<span class="line"><span style="color:#FFCB6B;">copy</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">1</span><span style="color:#C3E88D;">.txt</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">D:</span><span style="color:#BABED8;">\\a</span><span style="color:#C3E88D;">pp</span><span style="color:#BABED8;">\\d</span><span style="color:#C3E88D;">ocument</span><span style="color:#BABED8;">\\</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 移动文件</span></span>
<span class="line"><span style="color:#FFCB6B;">move</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">1</span><span style="color:#C3E88D;">.txt</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">D:</span><span style="color:#BABED8;">\\a</span><span style="color:#C3E88D;">pp</span><span style="color:#BABED8;">\\d</span><span style="color:#C3E88D;">ocument</span><span style="color:#BABED8;">\\</span></span>
<span class="line"></span></code></pre></div><h2 id="编辑文件" tabindex="-1">编辑文件 <a class="header-anchor" href="#编辑文件" aria-hidden="true">#</a></h2>`,9),o=[e];function t(c,r,i,y,d,B){return n(),a("div",null,o)}const h=s(p,[["render",t]]);export{D as __pageData,h as default};
