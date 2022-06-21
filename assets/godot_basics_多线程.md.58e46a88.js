import{_ as s,c as n,o as a,b as p}from"./app.9006bf41.js";const C=JSON.parse('{"title":"","description":"","frontmatter":"title:\u591A\u7EBF\u7A0B","headers":[],"relativePath":"godot/basics/\u591A\u7EBF\u7A0B.md"}'),l={name:"godot/basics/\u591A\u7EBF\u7A0B.md"},e=p(`<p>\u6BCF\u4E00\u4E2A\u7A0B\u5E8F\u90FD\u6709\u4E00\u4E2A <code>\u8FDB\u7A0B</code></p><p>\u8FDB\u884C\u6267\u884C\u591A\u4E2A\u4EFB\u52A1\uFF0C\u8981\u4F9D\u8D56\u7EBF\u7A0B\uFF0C\u4E00\u4E2A\u8FDB\u7A0B\u81F3\u5C11\u6709\u4E00\u4E2A <code>\u7EBF\u7A0B</code></p><p>\u4E32\u884C\uFF1A\u76F8\u5BF9\u4E8E\u5355\u6761\u7EBF\u7A0B\u6765\u6267\u884C\u591A\u4E2A\u4EFB\u52A1\uFF0C\u7EBF\u6027\u7ED3\u6784</p><p>\u5E76\u884C\uFF1A\u591A\u6761\u7EBF\u7A0B\u540C\u65F6\u6267\u884C\u4EFB\u52A1</p><div class="language-html line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">func _ready():</span></span>
<span class="line"><span style="color:#A6ACCD;">  self.connect(&quot;pressed&quot;,self,&quot;onButton&quot;)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">func onButton():</span></span>
<span class="line"><span style="color:#A6ACCD;">  var myThread = Thread.new()</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">  myThread.start(self,&quot;threadTest&quot;,null,0)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">  print(&quot;creat thread id&quot;, myThread.get_id)</span></span>
<span class="line"><span style="color:#A6ACCD;">  print(&quot;thread active:&quot;,myThread.is_active)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">  var waitForThread = myThread.wait_to_finish()</span></span>
<span class="line"><span style="color:#A6ACCD;">  print()</span></span>
<span class="line"><span style="color:#A6ACCD;">  print(&quot;thread is finished with result : &quot; , waitForThread)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">  func threadTest(param):</span></span>
<span class="line"><span style="color:#A6ACCD;">    print(:thread test start)</span></span>
<span class="line"><span style="color:#A6ACCD;">    return 999</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">button click</span></span>
<span class="line"><span style="color:#A6ACCD;">thread start</span></span>
<span class="line"><span style="color:#A6ACCD;">-8531541113526547403</span></span>
<span class="line"><span style="color:#A6ACCD;">True</span></span>
<span class="line"><span style="color:#A6ACCD;">Thread end</span></span>
<span class="line"><span style="color:#A6ACCD;">999</span></span>
<span class="line"><span style="color:#A6ACCD;">False</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><div class="language-html line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">var myThread = Thread.new()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">myThread.start() #  \u5F00\u542F\u7EBF\u7A0B \u7EBF\u7A0B\u5173\u95ED\u4E3Afalse</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u591A\u7EBF\u7A0B\u6709\u5E76\u53D1\u5904\u7406</p><p>\u6570\u636E\u4E0D\u4E00\u81F4</p><div class="language-html line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const mutex = [false , null]</span></span>
<span class="line"><span style="color:#A6ACCD;">const atomicInt:Array = [0]</span></span>
<span class="line"><span style="color:#A6ACCD;">static func getMutex() -&gt; Mutex:</span></span>
<span class="line"><span style="color:#A6ACCD;">  if mutex[0]:</span></span>
<span class="line"><span style="color:#A6ACCD;">    return mutex[1]</span></span>
<span class="line"><span style="color:#A6ACCD;">  var mutexInstance = Mutex.new()</span></span>
<span class="line"><span style="color:#A6ACCD;">  mutex[1] = mutexInstance</span></span>
<span class="line"><span style="color:#A6ACCD;">  return mutexInstance</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">static func getLocalIntId() -&gt; int:</span></span>
<span class="line"><span style="color:#A6ACCD;">  var mutexInstance = getMutex()</span></span>
<span class="line"><span style="color:#A6ACCD;">  mutexInstance.lock()</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">  var id = atomicInt[0] = id +1</span></span>
<span class="line"><span style="color:#A6ACCD;">  mutexInstance.unlock()</span></span>
<span class="line"><span style="color:#A6ACCD;">  return id</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><blockquote><p>\u4F7F\u7528\u591A\u7EBF\u7A0B\u7684\u573A\u666F \u6761\u4EF6 \u76EE\u7684\uFF1B\u5E76\u53D1\u98CE\u9669</p></blockquote>`,10),r=[e];function c(t,i,o,b,u,A){return a(),n("div",null,r)}var d=s(l,[["render",c]]);export{C as __pageData,d as default};
