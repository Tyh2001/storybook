import{_ as s,o as n,c as a,a as l}from"./app.89703bbc.js";const d=JSON.parse('{"title":"Mysql","description":"","frontmatter":{},"headers":[{"level":2,"title":"安装","slug":"安装","link":"#安装","children":[]},{"level":2,"title":"SQL 命令","slug":"sql-命令","link":"#sql-命令","children":[]},{"level":2,"title":"登录","slug":"登录","link":"#登录","children":[]}],"relativePath":"docs/server/server-2.md"}'),p={name:"docs/server/server-2.md"},e=l(`<h1 id="mysql" tabindex="-1">Mysql <a class="header-anchor" href="#mysql" aria-hidden="true">#</a></h1><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-hidden="true">#</a></h2><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">apt</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">update</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 安装</span></span>
<span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">apt</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">install</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">mysql-server</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 启动 mysql 服务</span></span>
<span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">systemctl</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">start</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">mysql</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 设置 MySQL 服务在系统启动时自动启动</span></span>
<span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">systemctl</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">enable</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">mysql</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 检查 MySQL 服务状态</span></span>
<span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">systemctl</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">status</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">mysql</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 进入 MySQL Shell 设置 mysql 密码</span></span>
<span class="line"><span style="color:#FFCB6B;">mysql</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-u</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">root</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-p</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 退出 mysql shell</span></span>
<span class="line"><span style="color:#FFCB6B;">quit</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="sql-命令" tabindex="-1">SQL 命令 <a class="header-anchor" href="#sql-命令" aria-hidden="true">#</a></h2><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">-- 查看有那些表</span></span>
<span class="line"><span style="color:#BABED8;">SHOW TABLES;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">-- 查看有那些数据库</span></span>
<span class="line"><span style="color:#BABED8;">SHOW DATABASES;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">-- 创建数据库</span></span>
<span class="line"><span style="color:#F78C6C;">CREATE</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">DATABASE</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">数据库名</span><span style="color:#BABED8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">-- 切换到指定的数据库</span></span>
<span class="line"><span style="color:#F78C6C;">USE</span><span style="color:#BABED8;"> 数据库名;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">-- 运行指定 sql 文件</span></span>
<span class="line"><span style="color:#BABED8;">source </span><span style="color:#89DDFF;">/</span><span style="color:#BABED8;">xxxx</span><span style="color:#89DDFF;">/</span><span style="color:#BABED8;">xxxx</span><span style="color:#89DDFF;">/</span><span style="color:#BABED8;">xxxx.sql</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">-- 查看表的数据</span></span>
<span class="line"><span style="color:#F78C6C;">select</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">*</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">from</span><span style="color:#BABED8;"> 表名;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">-- 查看所有用户</span></span>
<span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#BABED8;"> User </span><span style="color:#F78C6C;">FROM</span><span style="color:#BABED8;"> mysql.user;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">-- 将 abd 数据库名称修改为 def</span></span>
<span class="line"><span style="color:#BABED8;">RENAME </span><span style="color:#F78C6C;">DATABASE</span><span style="color:#BABED8;"> abc </span><span style="color:#F78C6C;">TO</span><span style="color:#BABED8;"> def;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">-- 删除数据库</span></span>
<span class="line"><span style="color:#F78C6C;">DROP</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">DATABASE</span><span style="color:#BABED8;"> xxx;</span></span>
<span class="line"></span></code></pre></div><h2 id="登录" tabindex="-1">登录 <a class="header-anchor" href="#登录" aria-hidden="true">#</a></h2><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">mysql</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-u</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">root</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-p</span></span>
<span class="line"></span></code></pre></div>`,7),o=[e];function t(c,r,i,y,B,E){return n(),a("div",null,o)}const A=s(p,[["render",t]]);export{d as __pageData,A as default};
