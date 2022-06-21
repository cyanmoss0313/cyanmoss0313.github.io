import{_ as s,c as n,o as a,b as p}from"./app.9006bf41.js";const b=JSON.parse('{"title":"new \u4E00\u4E2Asprite\u8282\u70B9","description":"","frontmatter":"title:\u811A\u672C\u63A7\u5236\u8282\u70B9","headers":[],"relativePath":"godot/basics/\u811A\u672C\u63A7\u5236\u8282\u70B9.md"}'),l={name:"godot/basics/\u811A\u672C\u63A7\u5236\u8282\u70B9.md"},e=p(`<p>48\u8BFE \u5F15\u7528\u8BA1\u6570</p><p>\u521B\u5EFA</p><p>\u79FB\u52A8</p><p>\u65CB\u8F6C</p><p>base4</p><p>\u521B\u5EFA\u8282\u70B9new</p><div class="language-python line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;"># new \u4E00\u4E2Asprite\u8282\u70B9</span></span>
<span class="line"><span style="color:#A6ACCD;">var sprite </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Sprite</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">new</span><span style="color:#89DDFF;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u8BBE\u7F6E\u56FE\u7247</span></span>
<span class="line"><span style="color:#A6ACCD;">var icon </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">preload</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">res://icon.png</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">sprite</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">set_texture</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">icon</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u4FEE\u6539\u540D\u79F0</span></span>
<span class="line"><span style="color:#A6ACCD;">sprite</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">name</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">mynode</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u4FEE\u6539\u5750\u6807\u5C45\u4E2D</span></span>
<span class="line"><span style="color:#A6ACCD;">sprite</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">position</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">x</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">200</span></span>
<span class="line"><span style="color:#A6ACCD;">sprite</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">position</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">y</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">200</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u6DFB\u52A0\u5230\u5F53\u524D\u573A\u666F\u4E2D</span></span>
<span class="line"><span style="color:#82AAFF;">add_child</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">sprite</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">pass</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><div class="language-python line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#82AAFF;">get_tree</span><span style="color:#89DDFF;">().</span><span style="color:#82AAFF;">get_current_scene</span><span style="color:#89DDFF;">()</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p><code>get_tree()</code>\u672C\u8EAB\u4E0D\u80FD\u8FDB\u884C<code>add_child</code>\u64CD\u4F5C\uFF0C\u4F60\u5FC5\u987B\u627E\u5230\u5F53\u524D\u573A\u666F\u8FDB\u884C\u64CD\u4F5C</p>`,9),o=[e];function c(r,t,i,F,y,D){return a(),n("div",null,o)}var d=s(l,[["render",c]]);export{b as __pageData,d as default};
