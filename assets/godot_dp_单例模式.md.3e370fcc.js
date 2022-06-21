import{_ as s,c as n,o as a,b as p}from"./app.9006bf41.js";const A=JSON.parse('{"title":"\u5355\u4F8B\u6A21\u5F0F","description":"","frontmatter":{"title":"\u5355\u4F8B\u6A21\u5F0F"},"headers":[],"relativePath":"godot/dp/\u5355\u4F8B\u6A21\u5F0F.md"}'),l={name:"godot/dp/\u5355\u4F8B\u6A21\u5F0F.md"},e=p(`<h5 id="\u5B9A\u4E49" tabindex="-1">\u5B9A\u4E49 <a class="header-anchor" href="#\u5B9A\u4E49" aria-hidden="true">#</a></h5><blockquote><p>\u786E\u4FDD\u4E00\u4E2A\u7C7B\u53EA\u6709\u4E00\u4E2A\u5B9E\u4F8B\uFF0C\u800C\u4E14\u81EA\u884C\u5B9E\u4F8B\u5316\u5E76\u5411\u6574\u4E2A\u7CFB\u7EDF\u63D0\u4F9B\u8FD9\u4E2A\u5B9E\u4F8B</p></blockquote><ul><li>\u7C7B\u5728\u6574\u4E2A\u7CFB\u7EDF\u4E2D\u53EA\u6709\u4E00\u4E2A\u5B9E\u4F8B\uFF08\u6784\u9020\u65B9\u6CD5\u4E3Aprivate\uFF09</li><li>\u8FD9\u4E2A\u5B9E\u4F8B\u53EF\u4EE5\u5728\u6574\u4E2A\u7CFB\u7EDF\u88AB\u8BBF\u95EE</li></ul><h5 id="\u4F7F\u7528\u573A\u666F" tabindex="-1">\u4F7F\u7528\u573A\u666F <a class="header-anchor" href="#\u4F7F\u7528\u573A\u666F" aria-hidden="true">#</a></h5><ul><li>\u8D44\u6E90\u7BA1\u7406\u7C7B</li><li>\u6838\u5FC3\u6570\u636E\u7C7B</li></ul><div class="language-c#"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">/* c# version */</span></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Singleton</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">static</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Singleton</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">instance</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Singleton</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">static</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Singleton</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Instance</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#F78C6C;">get</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">instance </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null){</span></span>
<span class="line"><span style="color:#A6ACCD;">        instance </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Singleton</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> instance</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>\u5B9E\u73B0\u5355\u4F8B\u6A21\u5F0F\u7684\u6838\u5FC3\u8981\u7D20\u662F\uFF0C\u9700\u8981\u4E00\u4E2A <code>\u9759\u6001\u53D8\u91CF</code> \u6307\u5411\u8BE5\u7C7B\u552F\u4E00\u7684\u5B9E\u4F8B\uFF0C\u5E76\u4F5C\u4E3A\u5224\u5B9A\u6709\u65E0\u5B9E\u4F8B\u7684\u6807\u8BC6\u4F4D</p><p>\u56E0\u4E3AGDScript\u4E2D\u65E0 <code>\u9759\u6001\u53D8\u91CF</code> \uFF0C\u6240\u4EE5\u65E0\u6CD5\u4F7F\u7528\u4F20\u7EDF\u5355\u4F8B\u6A21\u5F0F\uFF0C\u4F7F\u7528AUTOLOAD\u81EA\u52A8\u52A0\u8F7D\u6765\u5B9E\u73B0</p><p>\u5355\u4F8B\u7C7B\u3001\u5355\u4F8B\u573A\u666F \u4E24\u79CD\u65B9\u5F0F</p><hr><h5 id="\u5355\u4F8B\u7C7B" tabindex="-1"><strong>\u5355\u4F8B\u7C7B</strong> <a class="header-anchor" href="#\u5355\u4F8B\u7C7B" aria-hidden="true">#</a></h5><p>1\u3001\u5B9A\u4E49\u8981\u5355\u4F8B\u5316\u7684\u7C7B</p><div class="language-cpp line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;"># \u5B58\u50A8\u6E38\u620F\u6570\u636E\u7684\u7C7B\u5355\u4F8B\u5316</span></span>
<span class="line"><span style="color:#A6ACCD;"># GameGata</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">gd</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">extend Node</span></span>
<span class="line"><span style="color:#A6ACCD;">var score </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span></span>
<span class="line"><span style="color:#A6ACCD;">var hp </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span></span>
<span class="line"><span style="color:#A6ACCD;">var level </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">6</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>2\u3001\u8BBE\u7F6E\u81EA\u52A8\u52A0\u8F7D <code>\u9879\u76EE\u8BBE\u7F6E</code> &gt; <code>\u81EA\u52A8\u52A0\u8F7D</code> &gt; <code>\u62D6\u52A8GameData.gd</code> \uFF08\u540D\u79F0\u5373\u662F\u7A0B\u5E8F\u4E2D\u8C03\u7528\u7684\u53D8\u91CF\u540D\uFF0C\u53EF\u4FEE\u6539\uFF09</p><p>3\u3001\u6D4B\u8BD5</p><div class="language-cpp line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;"># \u65B0\u5EFA\u573A\u666F</span></span>
<span class="line"><span style="color:#A6ACCD;">#SingletonTest.gd</span></span>
<span class="line"><span style="color:#A6ACCD;">extends Node</span></span>
<span class="line"><span style="color:#FFCB6B;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">_ready</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">player hp:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">+</span><span style="color:#82AAFF;">str</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">GameData</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">hp</span><span style="color:#89DDFF;">))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;"># out: player hp </span><span style="color:#F78C6C;">5</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><hr><h5 id="\u5355\u4F8B\u573A\u666F" tabindex="-1">\u5355\u4F8B\u573A\u666F <a class="header-anchor" href="#\u5355\u4F8B\u573A\u666F" aria-hidden="true">#</a></h5><p>1\u3001\u5B9A\u4E49\u8981\u5355\u4F8B\u5316\u7684\u573A\u666F <code>Manager.tscn</code></p><div class="language-cpp line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;"># Manager.tscn\u6839\u8282\u70B9\u811A\u672C</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">#Manager.gd</span></span>
<span class="line"><span style="color:#A6ACCD;">extends Node</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">play</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">name</span><span style="color:#A6ACCD;"> : </span><span style="color:#FFCB6B;">String</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">		var sfx </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">find_node</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> sfx is AudioStreamPlayer: # is</span><span style="color:#89DDFF;">?</span></span>
<span class="line"><span style="color:#A6ACCD;">				sfx</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">play</span><span style="color:#89DDFF;">()</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>2\u3001\u8BBE\u7F6E\u81EA\u52A8\u52A0\u8F7D</p><p><code>\u9879\u76EE\u8BBE\u7F6E</code>&gt;<code>\u81EA\u52A8\u52A0\u8F7D</code>&gt;\u9009\u62E9\u573A\u666F<code>Manager.tscn</code></p><p>3\u3001\u6D4B\u8BD5</p><div class="language-cpp line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;"># ScoreArea</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">gd</span></span>
<span class="line"><span style="color:#A6ACCD;">extends Area2D</span></span>
<span class="line"><span style="color:#FFCB6B;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">_ready</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#82AAFF;">connect</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">body_exited</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">self</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">_on_body_exited</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#FFCB6B;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">_on_body_exited</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">body</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> _body</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">bird</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">		Manager</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">play</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">sfx_point</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> # \u97F3\u6548</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><blockquote><p>\u8FD0\u884C\u6E38\u620F\u65F6\uFF0C\u5728\u8FDC\u7A0B\u7A97\u53E3\u4E0B\u53EF\u4EE5\u770B\u5230\u6E38\u620F\u8FD0\u884C\u65F6\u573A\u666F\u6811\u72B6\u6001\uFF0C\u5355\u4F8B\u7684\u7C7B/\u573A\u666F\uFF0C\u88AB\u81EA\u52A8\u52A0\u8F7D\u4EE5\u540E\u4F5C\u4E3A\u573A\u666F\u6811<code>root</code>\u76F4\u63A5\u5B50\u8282\u70B9\uFF0C\u51FA\u73B0\u5728\u5176\u4ED6\u8282\u70B9\u4E0A\u65B9</p></blockquote><p>\uFF1F \u88AB\u8C03\u7528\u7684\u65F6\u5019\u51FA\u73B0\u4E0D\u53EF\u4EE5\u5417\uFF1F \u5168\u5C40\u51FA\u73B0\u5417\uFF1F</p><hr><hr><p>\u9488\u5BF9\u4E0D\u540C\u7684\u7C7B\u8FDB\u884C\u5F00\u53D1\uFF0C\u9700\u8981\u7528new\uFF08\uFF09\u6765\u4F7F\u7528 \u5B9E\u4F8B\u5316 \u7C7B\u7684\u5B9E\u4F8B \u53EF\u4EE5\u521B\u5EFA\u591A\u4E2A</p><p>\u5E94\u8BE5\u552F\u4E00\u5B58\u5728\u7684\u3002\u6BD4\u5982\u7BA1\u7406\u5668 \u58F0\u97F3\u7BA1\u7406\u5668 \u8D44\u6E90\u7BA1\u7406\u5668 UI\u7BA1\u7406\u5668 \u7F51\u7EDC\u7BA1\u7406\u5668</p><p>\u65B9\u4FBF\u5F15\u5165\u65B9\u6CD5\uFF0C\u5C01\u88C5\u4E0D\u5F15\u5165\u5C5E\u6027</p><hr><p>\u4E3B\u89D2\u63A7\u5236\u5668</p><p>\u602A\u7269\u63A7\u5236\u5668</p><p>enemy\u627E\u5230\u4E3B\u89D2\u4F4D\u7F6E\uFF08obj\uFF09</p><p>centroller</p><p>\u9759\u6001\u53D8\u91CF \u901A\u8FC7\u7C7B\u540D\u4F7F\u7528</p><p>public static ClassName instance</p><p>Private void Awake()</p><p>\u200B instance = this</p><p>\u76F8\u5F53\u4E8E instance = ClassName.new()</p><hr><p>\u7F51\u7EDC\u6E38\u620F player\u9488\u5BF9\u591A\u4E2A\u5B9E\u4F8B \u4E0D\u53EF\u4EE5</p><p>\u5355\u4F8B \u6574\u4E2A\u4E16\u754C\u4E2D \u53EA\u6709\u4E00\u4E2A\u7684 \u7BA1\u7406\u5668 \u8BBF\u95EE \u65B9\u6CD5\u8C03\u7528 \u5F88\u65B9\u4FBF</p><p>\u5355\u4F8B\u95EE\u9898</p><p>\u5355\u4F8B\u521D\u59CB\u5316 \u4E0D\u77E5\u9053\u54EA\u4E00\u4E2A\u5148\u6267\u884C \u811A\u672C\u751F\u547D\u5468\u671F</p><p>\u521D\u59CB\u5316\u5DE5\u4F5C\u3002xxC.instance.init\uFF08\uFF09\u521D\u59CB\u5316</p><p>\u5199\u5C5E\u6027</p><div class="language-cpp line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">static</span><span style="color:#A6ACCD;"> PlayerC instance \u771F\u6B63\u7684\u5B9E\u4F8B</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">public </span><span style="color:#C792EA;">static</span><span style="color:#A6ACCD;"> PlayerC Instance </span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">	get</span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">==</span><span style="color:#F07178;"> null</span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> instance </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">FinObjectType</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">PlayerC</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">instance obj </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">GameObject</span><span style="color:#89DDFF;">())</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">obj</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">AddComponent</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">PlayerC</span><span style="color:#89DDFF;">&gt;()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">instance </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">obj</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">AddComponent</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">PlayerC</span><span style="color:#89DDFF;">&gt;()</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> instance</span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">	set</span><span style="color:#89DDFF;">{}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">playerC</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">instance</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">transform</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">pos \u5B9E\u4F8B\u53D8\u91CF</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">playerC</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Instance</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">transform</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">pos \u5C5E\u6027\u3002\u4E0D\u7528\u62C5\u5FC3\u662F\u5426\u5B9E\u4F8B\u5316\u51FA\u6765 \u56E0\u4E3A\u5728\u5C5E\u6027\u91CC \u5224\u65AD</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><hr><p>\u4F7F\u7528\u573A\u666F\u3002\u53EA\u6709\u4E00\u4E2A\u7684\u65F6\u5019 \u552F\u4E00\u6027</p><p>\u591A\u4E2A \u89C2\u5BDF\u8005\u6A21\u5F0F</p><p>\u6A21\u7248\u7C7B \u7528\u6CDB\u578B</p><p>\u5C11\u7528\u7EE7\u627F</p><div class="language-cpp line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">Public </span><span style="color:#C792EA;">class</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">UnirySingleton</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">&gt;</span><span style="color:#F07178;"> : </span><span style="color:#FFCB6B;">monobe</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">	where T : </span><span style="color:#FFCB6B;">Component</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#C792EA;">private</span><span style="color:#F07178;"> static T instance. \u771F\u6B63\u5B58\u50A8\u7684   \u7BA1\u7406\u5668\u4E2D</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#C792EA;">public</span><span style="color:#F07178;"> static T Instance</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u4F18\u70B9</p><ul><li>\u540C\u65F6\u95F4\u53EA\u5B58\u5728\u4E00\u4E2A\u5BF9\u8C61</li><li>\u5FEB\u901F\u83B7\u53D6\u5BF9\u8C61\u7684\u65B9\u6CD5</li><li>\u9002\u5408\u6E38\u620F\u4E2D\u5355\u4E00\u529F\u80FD\u7684\u7BA1\u7406\u5668</li></ul><p>\u200B \u5546\u4E1A\u5F00\u53D1\u539F\u5219 \u5982\u679C\u7F51\u7EDC\u6E38\u620F \u4E3B\u89D2\u4E0D\u8981\u5355\u4F8B\u6A21\u5F0F</p><hr><p>\u72B6\u6001\u6A21\u5F0F state</p><p>\u89E3\u51B3\u95EE\u9898 \u4E0D\u540C\u7684\u72B6\u6001 if else switch \u5224\u65AD \u7528\u679A\u4E3Eenum \u7F51\u7EDC\u8BF7\u6C42</p><div class="language-c#"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">state</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">switch</span><span style="color:#A6ACCD;">(state)</span></span>
<span class="line"><span style="color:#A6ACCD;">    case&quot;\u72B6\u60011&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    	break</span></span>
<span class="line"><span style="color:#A6ACCD;">    case&quot;\u72B6\u60012&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u6BCF\u4E00\u4E2A\u7BA1\u7406\u7C7B \u7BA1\u7406\u81EA\u5DF1 \u5728\u7C7B\u4E2D\u7BA1\u7406\u81EA\u5DF1 \uFF1B\u52A8\u753B\u72B6\u6001\u6781 idle -&gt; attack</p><p>\u573A\u666F</p><p>\u52A0\u8F7D\u7A7A\u573A\u666F</p><p>\u521D\u59CB\u5316\u573A\u666F \u521D\u59CB\u5316\u8FC7\u7A0B \u52A0\u8F7D \u70ED\u66F4</p><p>\u4E3B\u6E38\u620F\u573A\u666F \u6807\u9898\u573A\u666F</p><p>\u6E38\u620F\u573A\u666F</p><p>\u72B6\u6001\u590D\u7C7B</p><p>\u865A\u65B9\u6CD5</p><div class="language-c#"><span class="copy"></span><pre><code><span class="line"></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ISceneState</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">m_StateName</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">IsceneState</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">StateName</span><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F78C6C;">get</span><span style="color:#89DDFF;">{</span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> m_StateName</span><span style="color:#89DDFF;">;}</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F78C6C;">set</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">m_StateName </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> value</span><span style="color:#89DDFF;">;}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">protected</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ISceneC</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">m_controller</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">publick</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ISceneState</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">ISceneC</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ssc</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">        m_controller = ssc</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	Public </span><span style="color:#C792EA;">virtual</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">StateBegin</span><span style="color:#89DDFF;">(){}</span></span>
<span class="line"><span style="color:#A6ACCD;">	Public </span><span style="color:#C792EA;">virtual</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">StateEnd</span><span style="color:#89DDFF;">(){}</span></span>
<span class="line"><span style="color:#A6ACCD;">	Public </span><span style="color:#C792EA;">virtual</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">StateBegin</span><span style="color:#89DDFF;">(){}</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><ul><li>MVC</li><li>Factory</li><li>Facade</li><li>Mediator</li><li>State machine</li></ul><p>\u7EC4\u548C\u4FE1\u53F7\u7ED9\u51FA\u7684\u89C2\u5BDF\u8005/\u53EF\u89C2\u5BDF\u6A21\u5F0F</p><hr><p>Python 16\u4E2D\u8BBE\u8BA1\u6A21\u5F0F</p><blockquote><p><a href="https://www.bilibili.com/video/BV1Ta411c7mt?p=14" target="_blank" rel="noopener noreferrer">Python\u4E4B\u6700\u5E38\u7528\u768416\u79CD\u8BBE\u8BA1\u6A21\u5F0F\uFF08\u5B8C\u6574\u7248\uFF09_\u54D4\u54E9\u54D4\u54E9_bilibili</a></p></blockquote><blockquote><p><a href="https://www.jb51.net/article/214860.htm" target="_blank" rel="noopener noreferrer">Python\u5B9E\u73B0\u5355\u4F8B\u6A21\u5F0F\u76845\u79CD\u65B9\u6CD5_python_\u811A\u672C\u4E4B\u5BB6 (jb51.net)</a></p></blockquote><p><a href="https://www.bilibili.com/video/BV1af4y1y7sS?spm_id_from=333.337.search-card.all.click" target="_blank" rel="noopener noreferrer">\u4E94\u5206\u949F\u5B66\u8BBE\u8BA1\u6A21\u5F0F.01.\u5355\u4F8B\u6A21\u5F0F_\u54D4\u54E9\u54D4\u54E9_bilibili</a></p><p><a href="https://www.bilibili.com/video/BV16D4y1c7GL?spm_id_from=333.337.search-card.all.click" target="_blank" rel="noopener noreferrer">13 \u5355\u4F8B\u8BBE\u8BA1\u6A21\u5F0F\u8BE6\u89E3_\u54D4\u54E9\u54D4\u54E9_bilibili</a></p>`,79),o=[e];function c(r,t,i,y,D,F){return a(),n("div",null,o)}var b=s(l,[["render",c]]);export{A as __pageData,b as default};
