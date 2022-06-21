import{_ as s,c as n,o as a,b as p}from"./app.9006bf41.js";const F=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"godot/basics/\u8282\u70B9\u751F\u547D\u5468\u671F.md"}'),e={name:"godot/basics/\u8282\u70B9\u751F\u547D\u5468\u671F.md"},l=p(`<p>godot main \u542F\u52A8\u4E00\u4E2A\u8FDB\u7A0B \u52A0\u8F7D\u6240\u9700\u7684\u9A71\u52A8\u8BBE\u5907\uFF08\u6E32\u67D3 GLSL/GLES/Vulkan\u3001\u8F93\u5165\u63A7\u5236\u8BBE\u5907\u7B49\uFF09</p><p>\u4E3B\u5FAA\u73AF \u52A0\u8F7D\u4E00\u4E2A\u81EA\u52A8\u521B\u5EFA\u7684\u5BF9\u8C61 - sceneTree\uFF08\u573A\u666F\u7BA1\u7406\u7CFB\u7EDF\u5BF9\u8C61\uFF0C\u7528\u4E8E\u7BA1\u7406\u573A\u666F\u5668\uFF09</p><p>\u5BF9\u8C61\u5305\u542B\u4E00\u4E2A rootviewport - root\u8282\u70B9\uFF08\u4E00\u4E2Anode\uFF09 \u8BE5\u8282\u70B9\u9ED8\u8BA4\u5305\u542B\u4E00\u4E2Aviewport\uFF08\u9ED8\u8BA4\u6E32\u67D3\u7684\u8F93\u51FA\u89C6\u53E3\uFF09</p><p>\u7528\u6237\u7F16\u8F91\u4E00\u4E2A\u573A\u666F\u6587\u4EF6\uFF0C\u5E76\u8BBE\u7F6E\u4E3A\u542F\u52A8\u65F6\uFF0C\u8BE5\u573A\u666F\u6587\u4EF6\u7684\u6839\u8282\u70B9\u9644\u52A0\u5230rootviewport\u4E0A</p><p>\u8282\u70B9\u8FDB\u5165\u573A\u666F\u6811scenetree \u53D8\u4E3A\u6D3B\u52A8\u72B6\u6001</p><p>\u573A\u666F\u6811\u987A\u5E8F\u4F9D\u6B21\u56DE\u8C03\u5404\u4E2A\u8282\u70B9\u7684_init() _ready()\u7B49\u58F0\u660E\u51FD\u6570</p><p>\u8282\u70B9\u7684\u904D\u5386\u987A\u5E8F</p><p><code>\u7C7B</code> \u90FD\u6709\u6784\u9020\u65B9\u6CD5 \u9ED8\u8BA4\u7ED9\u65E0\u53C2 \u7528\u4E8Enew \u521B\u5EFA\u5BF9\u8C61\u5E76\u4E14\u8D4B\u503C\u7B80\u4FBF\u5199\u6CD5</p><p>\u5982\u679C\u6CA1\u6709\u6784\u9020\u65B9\u6CD5 \u5F97\u4E00\u4E2A\u5C5E\u6027\u4E00\u4E2A\u5C5E\u6027\u7684\u8C03\u7528set</p><p>init \u6240\u6709\u5BF9\u8C61\u90FD\u4F1A\u6709\u7684</p><p><strong>godot \u7C7B \u5C5E\u6027set get \u53D8\u91CF</strong></p><p>\u4E0B\u8FB9ready \u4E0B\u8FB9exit_tree\u53EA\u662F\u5220\u9664 free \u8FD9\u4E2A\u662F\u91CA\u653E</p><p>remove_child(name) \u53EA\u80FD\u79FB\u9664\u5B50\u8282\u70B9</p><p>\u8BED\u6CD5\u7CD6 $\u627E\u5230\u8282\u70B9</p><p><code>_exit_tree \u65F6 \u6DF1\u5EA6\u5012\u5E8F \u5E76\u4E14\u987A\u5E8F _enter_tree</code></p><p>\u95E8\u9762\u6A21\u5F0F \u5C01\u88C5\u65B9\u6CD5</p><p>nodeUtils.removeNode(self)</p><div class="language-js line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> nodeUtils </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">preload</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">res://xx.gd</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">static func </span><span style="color:#82AAFF;">removeNode</span><span style="color:#A6ACCD;">(node:Node) </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#FFCB6B;">void</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;">(node </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null</span><span style="color:#A6ACCD;">): # \u5224\u65AD\u8282\u70B9\u662F\u5426\u4E3A\u7A7A\uFF0C\u7A7A\u5219\u8FD4\u56DE</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">return</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> parent </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> node</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get_parent</span><span style="color:#A6ACCD;">() # \u5B9A\u4E49\u7236\u8282\u70B9</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;">(parent </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null</span><span style="color:#A6ACCD;">):  # \u5224\u65AD\u7236\u8282\u70B9\u662F\u5426\u4E3A\u7A7A\uFF0C\u7A7A\u4EE3\u8868\u6CA1\u6709\u4F7F\u7528\uFF0C</span></span>
<span class="line"><span style="color:#A6ACCD;">    node</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">queue_free</span><span style="color:#A6ACCD;">()  #\u91CA\u653E</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;font-style:italic;">return</span></span>
<span class="line"><span style="color:#A6ACCD;">  parent</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">remove_child</span><span style="color:#A6ACCD;">(node) # \u5982\u679C\u7236\u8282\u70B9\u4E0D\u4E3A\u7A7A\uFF0C\u7236\u8282\u70B9\u79FB\u9664\u5B50\u8282\u70B9node</span></span>
<span class="line"><span style="color:#A6ACCD;">  node</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">queue_free</span><span style="color:#A6ACCD;">()   # \u5B50\u8282\u70B9\u91CA\u653E</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">nodeUtils</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">removeNode</span><span style="color:#A6ACCD;">(self)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> root </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">get_tree</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">root</span></span>
<span class="line"><span style="color:#A6ACCD;">root</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">remove_child</span><span style="color:#A6ACCD;">(self)</span></span>
<span class="line"><span style="color:#A6ACCD;">self</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">queue_free</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>\u5DE5\u5177\u7C7B \u53EF\u4EE5\u91CD\u590D\u4F7F\u7528 zfoo</p>`,19),o=[l];function r(t,c,A,i,D,y){return a(),n("div",null,o)}var d=s(e,[["render",r]]);export{F as __pageData,d as default};
