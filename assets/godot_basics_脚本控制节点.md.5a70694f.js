import{_ as s,c as n,o as a,b as e}from"./app.9006bf41.js";const u=JSON.parse('{"title":"new \u4E00\u4E2Asprite\u8282\u70B9","description":"","frontmatter":"title:\u811A\u672C\u63A7\u5236\u8282\u70B9","headers":[],"relativePath":"godot/basics/\u811A\u672C\u63A7\u5236\u8282\u70B9.md"}'),p={name:"godot/basics/\u811A\u672C\u63A7\u5236\u8282\u70B9.md"},l=e(`<p>48\u8BFE \u5F15\u7528\u8BA1\u6570</p><p>\u521B\u5EFA</p><p>\u79FB\u52A8</p><p>\u65CB\u8F6C</p><p>base4</p><p>\u521B\u5EFA\u8282\u70B9new</p><div class="language-html line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;"># new \u4E00\u4E2Asprite\u8282\u70B9</span></span>
<span class="line"><span style="color:#A6ACCD;">var sprite = Sprite.new()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;"># \u8BBE\u7F6E\u56FE\u7247</span></span>
<span class="line"><span style="color:#A6ACCD;">var icon = preload(&quot;res://icon.png&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">sprite.set_texture(icon)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;"># \u4FEE\u6539\u540D\u79F0</span></span>
<span class="line"><span style="color:#A6ACCD;">sprite.name = &quot;mynode&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;"># \u4FEE\u6539\u5750\u6807\u5C45\u4E2D</span></span>
<span class="line"><span style="color:#A6ACCD;">sprite.position.x = 200</span></span>
<span class="line"><span style="color:#A6ACCD;">sprite.position.y = 200</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;"># \u6DFB\u52A0\u5230\u5F53\u524D\u573A\u666F\u4E2D</span></span>
<span class="line"><span style="color:#A6ACCD;">add_child(sprite)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">pass</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><div class="language-html line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">get_tree().get_current_scene()</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p><code>get_tree()</code>\u672C\u8EAB\u4E0D\u80FD\u8FDB\u884C<code>add_child</code>\u64CD\u4F5C\uFF0C\u4F60\u5FC5\u987B\u627E\u5230\u5F53\u524D\u573A\u666F\u8FDB\u884C\u64CD\u4F5C</p>`,9),r=[l];function c(i,o,t,b,d,_){return a(),n("div",null,r)}var A=s(p,[["render",c]]);export{u as __pageData,A as default};
