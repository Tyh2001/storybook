import{_ as s,c as i,o as a,V as n}from"./chunks/framework.AX1JQ_e6.js";const g=JSON.parse('{"title":"Windows 命令","description":"","frontmatter":{},"headers":[],"relativePath":"docs/system/1.md","filePath":"docs/system/1.md"}'),l={name:"docs/system/1.md"},h=n(`<h1 id="windows-命令" tabindex="-1">Windows 命令 <a class="header-anchor" href="#windows-命令" aria-label="Permalink to &quot;Windows 命令&quot;">​</a></h1><h2 id="命令行工具" tabindex="-1">命令行工具 <a class="header-anchor" href="#命令行工具" aria-label="Permalink to &quot;命令行工具&quot;">​</a></h2><p>windows 系统 主要有两个命令行工具</p><ul><li><a href="https://docs.microsoft.com/en-us/powershell" target="_blank" rel="noreferrer">PowerShell</a> PowerShell 是 Windows 系统自带的一种命令行工具，具有更强大的功能和更丰富的脚本支持。</li><li>[Cmder] Cmder 是一款 Windows 环境下非常简洁美观易用的 cmd 替代者，它属于一个跨平台的命令行增强工具，可以集成 windows batch, power shell, git, linux bash 等多种命令行于一体，支持了大部分的 Linux 命令。</li></ul><h2 id="目录操作" tabindex="-1">目录操作 <a class="header-anchor" href="#目录操作" aria-label="Permalink to &quot;目录操作&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 进入目录</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /xxx</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 返回上一层</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ..</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 进入指定盘</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">D:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">C:</span></span></code></pre></div><h2 id="文件操作" tabindex="-1">文件操作 <a class="header-anchor" href="#文件操作" aria-label="Permalink to &quot;文件操作&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 创建文件夹</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mkdir</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> xxxx</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 指定目录创建</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mdkri</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> D:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\a</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">pp</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ocument</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\x</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">xxx</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 相对目录创建文件夹</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mkdir</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ..</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\x</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">xxx</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 删除文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">del</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> xxx.txt</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 当前目录下创建新文件</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> xxx.txt</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 当前目录下创建新文件</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">type</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nul</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> xxx.txt</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 查看当前目录下所有的文件（其他操作系统不支持）</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">dir</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 和 dir 一致（CMD 支持）</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ls</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 复制文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">copy</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.txt D:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\a</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">pp</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ocument</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 移动文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">move</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.txt D:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\a</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">pp</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ocument</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\</span></span></code></pre></div><h2 id="编辑文件" tabindex="-1">编辑文件 <a class="header-anchor" href="#编辑文件" aria-label="Permalink to &quot;编辑文件&quot;">​</a></h2>`,9),p=[h];function t(e,k,d,r,F,c){return a(),i("div",null,p)}const C=s(l,[["render",t]]);export{g as __pageData,C as default};
