import{_ as s,c as n,o as a,b as p}from"./app.9006bf41.js";const C=JSON.parse('{"title":"","description":"","frontmatter":"title:\u7C7B","headers":[],"relativePath":"godot/basics/\u7C7B.md"}'),l={name:"godot/basics/\u7C7B.md"},e=p(`<div class="language-html line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">class </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">.move()\b</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u7C7B/\u5BF9\u8C61</p><p>class_name \u5373\uFF1A.gd\u811A\u672C\u6CE8\u518C\u4E3A\u7C7B\uFF0C\u53EF\u8FDB\u884Cnew</p><div class="language-html line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">class_name myClass ,&quot;res://icon.png&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">func innerClassTest():</span></span>
<span class="line"><span style="color:#A6ACCD;">  var dog =Dog.new(1) #\u6784\u9020\u51FD\u6570\u4E2D\u53C2\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;">  dog.move()</span></span>
<span class="line"><span style="color:#A6ACCD;">  dog.info()</span></span>
<span class="line"><span style="color:#A6ACCD;">  dog.height()</span></span>
<span class="line"><span style="color:#A6ACCD;">  dog.info()</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><div class="language-html line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">var mc = myClass.new()</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><div class="language-html line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">mc.innerClassText()</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><div class="language-html line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">class Animal:</span></span>
<span class="line"><span style="color:#A6ACCD;">  extends object #\u5982\u679C\u4E0D\u5199 \u9ED8\u8BA4obejct</span></span>
<span class="line"><span style="color:#A6ACCD;">  const STATIC_FIELD = &quot;\u9759\u6001\u53D8\u91CF&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">  #\u5C5E\u6027</span></span>
<span class="line"><span style="color:#A6ACCD;">  var height:int</span></span>
<span class="line"><span style="color:#A6ACCD;">  func _init():</span></span>
<span class="line"><span style="color:#A6ACCD;">    print(&quot;animal \u6784\u9020\u65B9\u6CD5&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">  func move():</span></span>
<span class="line"><span style="color:#A6ACCD;">    print(&quot;animal \u79FB\u52A8\u65B9\u6CD5&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">  static func staticFunction()\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;">    pass</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><div class="language-html line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">class Dog:</span></span>
<span class="line"><span style="color:#A6ACCD;">  extends Animal</span></span>
<span class="line"><span style="color:#A6ACCD;">  func _init(height):</span></span>
<span class="line"><span style="color:#A6ACCD;">    self.height = height</span></span>
<span class="line"><span style="color:#A6ACCD;">    print(&quot;dog \u6784\u9020\u65B9\u6CD5&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">  func move()</span></span>
<span class="line"><span style="color:#A6ACCD;">    print(&quot;dog \u79FB\u52A8\u65B9\u6CD5&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    .move()  #\u8C03\u7528animal move \u65B9\u6CD5</span></span>
<span class="line"><span style="color:#A6ACCD;">  func info(parm = 100):</span></span>
<span class="line"><span style="color:#A6ACCD;">    print(&quot;height:&quot; + height as String) </span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u8C03\u7528\u987A\u5E8F</p><div class="language-html line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">Animal _init()    #\u7236\u7C7B</span></span>
<span class="line"><span style="color:#A6ACCD;">Dog _init()       #\u5B50\u7C7B</span></span>
<span class="line"><span style="color:#A6ACCD;">dog move()        #\u5B50\u7C7B\u5B9E\u4F8B</span></span>
<span class="line"><span style="color:#A6ACCD;">Animal move()     #\u7236\u7C7B</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u6982\u89C8\u6A21\u5F0F \u5199\u4F5C\u6A21\u5F0F</p><p>\u9762\u5411\u5BF9\u8C61 \u7EE7\u627F \u591A\u6001 \u91CD\u5199override</p>`,12),c=[e];function r(i,o,t,b,m,u){return a(),n("div",null,c)}var d=s(l,[["render",r]]);export{C as __pageData,d as default};
