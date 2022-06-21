import{_ as s,c as n,o as a,b as l}from"./app.9006bf41.js";const D=JSON.parse('{"title":"\u65B9\u6CD5\u5185\u5BB9","description":"","frontmatter":"title:\u4FE1\u53F7","headers":[{"level":3,"title":"\u81EA\u5B9A\u4E49\u4FE1\u53F7","slug":"\u81EA\u5B9A\u4E49\u4FE1\u53F7"}],"relativePath":"godot/basics/\u4FE1\u53F7.md"}'),p={name:"godot/basics/\u4FE1\u53F7.md"},e=l(`<p>\u901A\u4FE1\u5A92\u4ECB\uFF0C\u7EA6\u5B9A\u65B9\u6CD5\u56DE\u8C03\u5F62\u5F0F</p><p>\u8BBE\u8BA1\u6A21\u5F0F\u4E0A\u79F0\u4E4B\u4E3A\u89C2\u5BDF\u8005\u8BBE\u8BA1\u6A21\u5F0F</p><blockquote><p>1\u3001\u89C2\u5BDF\u8005\u548C\u88AB\u89C2\u5BDF\u662F\u62BD\u8C61\u8026\u5408\u7684\uFF0C\u53EF\u4EE5\u89E3\u8026\u6A21\u5757 2\u3001\u5EFA\u7ACB\u7EDF\u4E00\u7684\u89E6\u53D1\u673A\u5236 \u7B2C\u4E00\u79CD\u4F7F\u7528\u65B9\u6CD5\uFF1A\u901A\u8FC7\u573A\u666F\u4E2D\u4FE1\u53F7\u63A5\u6536\u65B9\u6CD5</p></blockquote><div class="language-html line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">func _on_Button1_pressed():</span></span>
<span class="line"><span style="color:#A6ACCD;">  print(&quot;hello&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u7B2C\u4E8C\u5F20\u4F7F\u7528\u65B9\u6CD5\uFF1A\u901A\u8FC7\u4EE3\u7801\u63A5\u6536</p><div class="language-html line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">func _ready():</span></span>
<span class="line"><span style="color:#A6ACCD;">  $button2.connect(&quot;pressed&quot;,self,&quot;onbutton2&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;"># \u65B9\u6CD5\u5185\u5BB9</span></span>
<span class="line"><span style="color:#A6ACCD;">func onbutton2():</span></span>
<span class="line"><span style="color:#A6ACCD;">  print(&quot;button2 pressed&quot;)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u6240\u6709object \u90FD\u6709 connect \u65B9\u6CD5</p><p>button - BaseButton \u57FA\u7C7B</p><p>\u56DE\u8C03\u4E86\u4E00\u4E2A\u65B9\u6CD5</p><h3 id="\u81EA\u5B9A\u4E49\u4FE1\u53F7" tabindex="-1">\u81EA\u5B9A\u4E49\u4FE1\u53F7 <a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u4FE1\u53F7" aria-hidden="true">#</a></h3><div class="language-html line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;"># \u5B9A\u4E49\u4FE1\u53F7</span></span>
<span class="line"><span style="color:#A6ACCD;">signal name(a,b)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;"># \u53D1\u9001\u4FE1\u53F7 \u7ED1\u5B9A\u4FE1\u53F7</span></span>
<span class="line"><span style="color:#A6ACCD;">emit_signal(&quot;name&quot;,1,2)</span></span>
<span class="line"><span style="color:#A6ACCD;">#\u89E3\u9664\u7ED1\u5B9A\u4FE1\u53F7</span></span>
<span class="line"><span style="color:#A6ACCD;">disconnect(&quot;name&quot;,1,2)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\uFF1F\u5176\u4ED6\u9664\u4E86ui button \u600E\u4E48\u70B9\u51FB</p><h4 id="\u5F02\u6B65\u56DE\u8C03yield" tabindex="-1">\u5F02\u6B65\u56DE\u8C03yield <a class="header-anchor" href="#\u5F02\u6B65\u56DE\u8C03yield" aria-hidden="true">#</a></h4><p>\u672C\u8D28\u8BA9\u4E00\u4E2A\u51FD\u6570\u5728\u6267\u884C\u8FC7\u7A0B\u4E2D\u6302\u8D77\uFF0C\u63A5\u6536\u5230\u6062\u590D\u547D\u4EE4\u7EE7\u7EED\u6267\u884C</p><div class="language-html line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">yield(obj,signal) # \u51FD\u6570\u7ACB\u5373\u8FD4\u56DE\uFF0C\u5E76\u4E14\u4FDD\u5B58\u5F53\u524D\u6267\u884C\u7684\u4F4D\u7F6E\u548C\u72B6\u6001\b</span></span>
<span class="line"><span style="color:#A6ACCD;">GDScriptFunctionState yield(Object object = null , String signal = &quot;&quot;)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>yield \u8FD4\u56DEGDScriptFunctionState \u7C7B\u578B\u5BF9\u8C61\uFF0C\u7C7B\u4F3Cjava CompleteFuture</p><div class="language-html line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">GDScriptFunctionState \u662F\u8BB0\u5F55\u4E00\u4E2A\u534F\u7A0B\u72B6\u6001\u7684\u5BF9\u8C61\uFF0C\u5B9E\u9645\u4E0A\u5B83\u4EE3\u8868\u7740/\u5F15\u7528\u8BE5\u534F\u7A0B</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>resume \u6062\u590DGDScriptFunctionState \u4FDD\u5B58\u7684\u8C03\u7528\u51FD\u6570\u72B6\u6001</p><p>yield\u4E09\u79CD\u7528\u6CD5\uFF0C\u4F7F\u7528\u573A\u666F\uFF0C\u6D41\u7A0B\u56FE</p><div class="language-html line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">yield()\u548Cresume()\u7EC4\u5408\uFF0Cyield()\u6302\u8D77\uFF0C\u7528resume()\u6765\u6062\u590D</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><div class="language-html line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">yield(\u5BF9\u8C61\uFF0C\u4FE1\u53F7S)\u7684\u5F62\u5F0F\uFF0C\u628A\u534F\u7A0B(GDScriptFunctionState)\u6CE8\u518C\u4E3A\u8282\u70B9N\u4E0A\u4FE1\u53F7S\u7684\u63A5\u6536\u8005\uFF0C\u5F53\u8282\u70B9N\u53D1\u51FA\u4FE1\u53F7S\u4EE5\u540E\uFF0C\u51FD\u6570\u4F1A\u6062\u590D\u6267\u884C</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><div class="language-html line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;"> yield(\u534F\u7A0B\u5BF9\u8C61C\uFF0C&quot;completed&quot;)\u5F62\u5F0F\uFF0C\u534F\u7A0B\u5931\u8D25\uFF0C\u5373GDScriptFunctionState\u7684is_vaild\u4E3Afalse\uFF0C\u91CA\u653E\u4E00\u4E2Acompleted\u4FE1\u53F7\uFF0C\u7528\u8FD9\u4E2A\u4FE1\u53F7\u6062\u590D\u4E0A\u4E00\u5C42\u534F\u7A0B</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><div class="language-python line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">func </span><span style="color:#82AAFF;">_ready</span><span style="color:#89DDFF;">():</span></span>
<span class="line"><span style="color:#A6ACCD;">  self</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">connect</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">pressed</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">self</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">onButton</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># yieldResult01\u88AB\u5B9A\u4E49/\u63A5\u6536\u4E3A\u4E00\u4E2A\u65B9\u6CD5</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u53D6\u6D88resume() \u5219\u7EE7\u7EED_ready()\u65B9\u6CD5\uFF0C\u5373onButton\u65B9\u6CD5\uFF0C\u8F93\u51FAend</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># yield()\u8D77\u5230\u6682\u505C\u7A0B\u5E8F\u4F5C\u7528\uFF0C\u4ECEresume()\u5904\u8FDB\u884C\u987A\u5E8F\u6D41\u7A0B</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">func </span><span style="color:#82AAFF;">onButton</span><span style="color:#89DDFF;">():</span></span>
<span class="line"><span style="color:#A6ACCD;">  var yieldResult01 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">doSth</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">  yieldResult01</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">resume</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">end</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">func </span><span style="color:#82AAFF;">doSth</span><span style="color:#89DDFF;">():</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">yield</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">do some thing</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div>`,23),o=[e];function c(r,t,i,u,d,b){return a(),n("div",null,o)}var m=s(p,[["render",c]]);export{D as __pageData,m as default};
