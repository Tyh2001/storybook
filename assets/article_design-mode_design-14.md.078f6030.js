import{_ as s,o as n,c as a,a as l}from"./app.c712ce8f.js";const A=JSON.parse('{"title":"适配器模式","description":"","frontmatter":{},"headers":[{"level":2,"title":"了解适配器","slug":"了解适配器","link":"#了解适配器","children":[]},{"level":2,"title":"第二个例子","slug":"第二个例子","link":"#第二个例子","children":[]}],"relativePath":"article/design-mode/design-14.md"}'),p={name:"article/design-mode/design-14.md"},o=l(`<h1 id="适配器模式" tabindex="-1">适配器模式 <a class="header-anchor" href="#适配器模式" aria-hidden="true">#</a></h1><h2 id="了解适配器" tabindex="-1">了解适配器 <a class="header-anchor" href="#了解适配器" aria-hidden="true">#</a></h2><p>下面以一个例子了解适配器模式，通过一个渲染地图的例子</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> googleMap </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">show</span><span style="color:#89DDFF;">()</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">渲染谷歌地图</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> baiduMap </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">show</span><span style="color:#89DDFF;">()</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">渲染百度地图</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">renderMap</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">target</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#BABED8;">target</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">show</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">instanceof</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Function</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#BABED8;">target</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">show</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">renderMap</span><span style="color:#BABED8;">(googleMap) </span><span style="color:#676E95;font-style:italic;">// 渲染谷歌地图</span></span>
<span class="line"><span style="color:#82AAFF;">renderMap</span><span style="color:#BABED8;">(baiduMap) </span><span style="color:#676E95;font-style:italic;">// 渲染百度地图</span></span>
<span class="line"></span></code></pre></div><p>上面例子中，每个接口都提供了一致的 <code>show</code> 方法，但是第三方的接口并不在我们控制的方位只能，加入接口不是 <code>show</code>，而是 <code>display</code> 呢？下面解决方案：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> googleMap </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">show</span><span style="color:#89DDFF;">()</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">渲染谷歌地图</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> baiduMap </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">display</span><span style="color:#89DDFF;">()</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">渲染百度地图</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 适配器接口</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> baiduMapInterface </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">show</span><span style="color:#89DDFF;">()</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">baiduMap</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">display</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">renderMap</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">target</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#BABED8;">target</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">show</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">instanceof</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Function</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#BABED8;">target</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">show</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">renderMap</span><span style="color:#BABED8;">(googleMap) </span><span style="color:#676E95;font-style:italic;">// 渲染谷歌地图</span></span>
<span class="line"><span style="color:#82AAFF;">renderMap</span><span style="color:#BABED8;">(baiduMapInterface) </span><span style="color:#676E95;font-style:italic;">// 渲染百度地图</span></span>
<span class="line"></span></code></pre></div><h2 id="第二个例子" tabindex="-1">第二个例子 <a class="header-anchor" href="#第二个例子" aria-hidden="true">#</a></h2><p>接下来看下第二个例子，比如我们需要渲染地图，目前从第三方的资源中获取了城市和对应的 <code>id</code>，是一个数组中包含了对象，代码如下：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">getList</span><span style="color:#89DDFF;">()</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">res</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> [</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> name</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">tianjin</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> id</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> name</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hangzhou</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> id</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">2</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> name</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">fujian</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> id</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">3</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  ]</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">res</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">render</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">fn</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#BABED8;">document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">write</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">JSON</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">stringify</span><span style="color:#F07178;">(</span><span style="color:#82AAFF;">fn</span><span style="color:#F07178;">()))</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">render</span><span style="color:#BABED8;">(getList)</span></span>
<span class="line"></span></code></pre></div><p>但是后来因为数据不全，我们又在第三方找到了一些其他的数据，但是数据结构不同，新的数据结构为：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> newList </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">guangzhou</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">beijing</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">5</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>接下来又需要一个适配器来解决了：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> newList </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">guangzhou</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">beijing</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">5</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">getList</span><span style="color:#89DDFF;">()</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">res</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> [</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> name</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">tianjin</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> id</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> name</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hangzhou</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> id</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">2</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> name</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">fujian</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> id</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">3</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  ]</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">res</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 新增适配器接口</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">newListInterface</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">list</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">arr</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> [</span><span style="color:#89DDFF;">...</span><span style="color:#82AAFF;">getList</span><span style="color:#F07178;">()]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#F07178;"> (</span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">key</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">in</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">list</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">obj</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#BABED8;">obj</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">name</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">key</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#BABED8;">obj</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">id</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">list</span><span style="color:#F07178;">[</span><span style="color:#BABED8;">key</span><span style="color:#F07178;">]</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#BABED8;">arr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">obj</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">arr</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">render</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">fn</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#BABED8;">document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">write</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">JSON</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">stringify</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">fn</span><span style="color:#F07178;">))</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">render</span><span style="color:#BABED8;">(</span><span style="color:#82AAFF;">newListInterface</span><span style="color:#BABED8;">(newList))</span></span>
<span class="line"></span></code></pre></div>`,13),e=[o];function c(t,r,F,y,D,i){return n(),a("div",null,e)}const E=s(p,[["render",c]]);export{A as __pageData,E as default};