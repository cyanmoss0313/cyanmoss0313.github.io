import{_ as s,c as n,o as a,b as p}from"./app.9006bf41.js";const y=JSON.parse('{"title":"\u83B7\u53D6\u5F53\u524D\u8282\u70B9","description":"","frontmatter":"title:\u8282\u70B9\u83B7\u53D6","headers":[],"relativePath":"godot/basics/\u8282\u70B9\u83B7\u53D6.md"}'),l={name:"godot/basics/\u8282\u70B9\u83B7\u53D6.md"},e=p(`<hr><div class="language-html line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;"># \u83B7\u53D6\u5F53\u524D\u8282\u70B9</span></span>
<span class="line"><span style="color:#A6ACCD;">var currentNode01 = $.</span></span>
<span class="line"><span style="color:#A6ACCD;">var currentNode02 = self</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;"># \u83B7\u53D6\u7236\u8282\u70B9</span></span>
<span class="line"><span style="color:#A6ACCD;">var parentNode01 = get_parent()</span></span>
<span class="line"><span style="color:#A6ACCD;">var parentNode02 = $&quot;../&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">\u83B7\u53D6\u5B50\u8282\u70B9</span></span>
<span class="line"><span style="color:#A6ACCD;">var subNode01 = $subNode02   # \u5B50\u8282\u70B9\u540D\u79F0</span></span>
<span class="line"><span style="color:#A6ACCD;">var subNode02 = $&quot;subNode02/subNode03&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">var subNode02 = get_node(&quot;root/parent&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">var sunNode03 = get_node(&quot;subNode02&quot;)  get_child()?</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;"># \u6839\u8282\u70B9\u67E5\u627E\uFF0C\u4F1A\u8FD4\u56DE\u8282\u70B9\u6811\u4E1B\u4E0A\u5230\u4E0B\u627E\u5230\u7684\u7B2C\u4E00\u4E2A\u8282\u70B9</span></span>
<span class="line"><span style="color:#A6ACCD;">var subNode04 = get_tree().root.find_node(&quot;subNode02&quot;,true,false)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">get_child()</span></span>
<span class="line"><span style="color:#A6ACCD;">find_node()</span></span>
<span class="line"><span style="color:#A6ACCD;">get_node()</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><div class="language-html line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;"># $\u8BED\u6CD5\u7CD6\u53EA\u80FD\u65B9\u6CD5\u5185\u4F7F\u7528</span></span>
<span class="line"><span style="color:#A6ACCD;"># \u5916\u90E8\u8C03\u7528\u9700\u8981\u52A0onready \u58F0\u660E \u5B58\u50A8\u8282\u70B9 \u7B49\u4E8E\u5728_ready()\u4E0B\u8D4B\u503C</span></span>
<span class="line"><span style="color:#A6ACCD;">onready var sub = $sub</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u6E38\u620F\u7F16\u7A0B\u57FA\u7840\u7B97\u6CD5</p><p>\u590D\u5236\u8282\u70B9node</p><div class="language-html line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">var orig = get_node(&quot;smNode&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">var copy = orig.duplicate()</span></span>
<span class="line"><span style="color:#A6ACCD;">add_child(copy)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u89E3\u6790json</p><div class="language-html line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">var d= {}</span></span>
<span class="line"><span style="color:#A6ACCD;">var err = d.parse_json(json_string)</span></span>
<span class="line"><span style="color:#A6ACCD;">if(err!=ok):</span></span>
<span class="line"><span style="color:#A6ACCD;">  print(&quot;error parsing json&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u591A\u7EF4\u6570\u7EC4</p><div class="language-html line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">var a = [[1,2],[3,4]]</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u672C\u5730\u5B58\u50A8</p><div class="language-html line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">var gold = 150</span></span>
<span class="line"><span style="color:#A6ACCD;">var f = File.new()</span></span>
<span class="line"><span style="color:#A6ACCD;">var err = f.open(&quot;user://some_data_file&quot;,File.WRITE)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">f.store_8(5)</span></span>
<span class="line"><span style="color:#A6ACCD;">f.store_string(&quot;some gold&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">f.store_var(gold) # \u5B58\u50A8\u53D8\u91CF</span></span>
<span class="line"><span style="color:#A6ACCD;">f.store_line(&quot;gold=&quot; + str(gold))</span></span>
<span class="line"><span style="color:#A6ACCD;">f.close() # close and save</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u8BFB\u53D6\u672C\u5730\u6587\u4EF6</p><div class="language-html line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">var my_num</span></span>
<span class="line"><span style="color:#A6ACCD;">var my_string</span></span>
<span class="line"><span style="color:#A6ACCD;">var my_gold</span></span>
<span class="line"><span style="color:#A6ACCD;">var save_file = &quot;user://some_data_file&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">var f = File.new()</span></span>
<span class="line"><span style="color:#A6ACCD;">if f.file_exists(save_file):  $ check if the file exists</span></span>
<span class="line"><span style="color:#A6ACCD;">  f.open(save_file,File.READ)  #try opening it with read access</span></span>
<span class="line"><span style="color:#A6ACCD;">    if f.is_open(): # we opened it , read some data</span></span>
<span class="line"><span style="color:#A6ACCD;">      my_num = f.get_8()  # retrieve the num \u68C0\u7D22</span></span>
<span class="line"><span style="color:#A6ACCD;">      my_string = f.get_string()</span></span>
<span class="line"><span style="color:#A6ACCD;">      my_gold = f.get_var()</span></span>
<span class="line"><span style="color:#A6ACCD;">      my_line = f.get_line()</span></span>
<span class="line"><span style="color:#A6ACCD;">      f.close()</span></span>
<span class="line"><span style="color:#A6ACCD;">      print(&quot;data loaded&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    else: # failed to open the file  maybe a permission issue</span></span>
<span class="line"><span style="color:#A6ACCD;">      print(&quot;unable to read file&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">else:   # file does not exist probably set vars to some defaults, etc.</span></span>
<span class="line"><span style="color:#A6ACCD;">  print(&quot;file does not exist&quot;)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>\u51FD\u6570\u7A7F\u53C2\u9ED8\u8BA4\u503C</p><div class="language-html line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">func funcName(param = &quot;default value&quot;)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u663E\u793A\u5E27\u6570FPS</p><div class="language-html line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">extends label # attach me to a label</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">func _ready():</span></span>
<span class="line"><span style="color:#A6ACCD;">  set_process(true)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">func _process(d)</span></span>
<span class="line"><span style="color:#A6ACCD;">  set_text(str(OS.get_fames_per_second()))</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u516D\u8FB9\u5F62*</p><div class="language-html line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">func _drawPolygon(pointArray):</span></span>
<span class="line"><span style="color:#A6ACCD;">  var i = 1</span></span>
<span class="line"><span style="color:#A6ACCD;">  var colors = [</span></span>
<span class="line"><span style="color:#A6ACCD;">    Color(0.5,0.5,0.5),</span></span>
<span class="line"><span style="color:#A6ACCD;">    Color(0.5,0.5,0.5),</span></span>
<span class="line"><span style="color:#A6ACCD;">    Color(0.5,0.5,0.5),</span></span>
<span class="line"><span style="color:#A6ACCD;">    Color(0.5,0.5,0.5),</span></span>
<span class="line"><span style="color:#A6ACCD;">  ];</span></span>
<span class="line"><span style="color:#A6ACCD;">  var uvs = []</span></span>
<span class="line"><span style="color:#A6ACCD;">  var prevpoint = null</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">  # fill the polygon shape</span></span>
<span class="line"><span style="color:#A6ACCD;">  draw_polygon(pointArray\uFF0C colors , uvs)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">  # then draw a circle at each point </span></span>
<span class="line"><span style="color:#A6ACCD;">  # and then lines between them</span></span>
<span class="line"><span style="color:#A6ACCD;">  for p in pointArray:</span></span>
<span class="line"><span style="color:#A6ACCD;">    draw_circle(p, 10, Color(1,1,1))</span></span>
<span class="line"><span style="color:#A6ACCD;">  # Draw a circle at the point, with a radius of </span></span>
<span class="line"><span style="color:#A6ACCD;">  # 10 and the color white</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span></span>
<span class="line"><span style="color:#A6ACCD;">  # Check if this point was the first point, if it isn&#39;t, </span></span>
<span class="line"><span style="color:#A6ACCD;">  # then draw a line from the previous point to this point</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">    if prevpoint != null:</span></span>
<span class="line"><span style="color:#A6ACCD;">      draw_line(prevpoint , p , Color(1,1,1), 5)</span></span>
<span class="line"><span style="color:#A6ACCD;">      prevponit = p</span></span>
<span class="line"><span style="color:#A6ACCD;">    else:</span></span>
<span class="line"><span style="color:#A6ACCD;">      prevpoint = p</span></span>
<span class="line"><span style="color:#A6ACCD;">    if i == point.size():</span></span>
<span class="line"><span style="color:#A6ACCD;">      draw_line(p, pointarray[0], Color(1,1,1),5)</span></span>
<span class="line"><span style="color:#A6ACCD;">      point(&quot;array end&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    i+=1</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><p>\u5168\u5C40\u53D8\u91CF</p><div class="language-html line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">Globals.set(&quot;my_global&quot;, 6)</span></span>
<span class="line"><span style="color:#A6ACCD;">print(Globals.get(&quot;my_global&quot;))</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u9000\u51FA\u6E38\u620F</p><div class="language-html line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">get_scene().quit()</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u66F4\u6539\u6807\u7B7E\u989C\u8272</p><div class="language-html line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">lable.add_color_override(&quot;font_color&quot; , </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">desired_color</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u9690\u85CF\u9F20\u6807</p><div class="language-html line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">Input.set_mouse_mode(Input.MOUSE_MODE_HIDDEN)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">\xA0</span></span>
<span class="line"><span style="color:#A6ACCD;">Input.set_mouse_mode(Input.MOUSE_MODE_VISIBLE)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u9F20\u6807\u6307\u5B9A\u56FE\u7247</p><div class="language-html line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">func _ready():</span></span>
<span class="line"><span style="color:#A6ACCD;">  Input.set_mouse_mode(Input.MOUSE_MODE_HIDDEN)</span></span>
<span class="line"><span style="color:#A6ACCD;">  var cursor = load(&quot;res://icon.png&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">  VisualServer.cursor_set_texture(cursor,Vector2(0,0),0)</span></span>
<span class="line"><span style="color:#A6ACCD;">  VisualServer.cursor_set_visible(true,0)</span></span>
<span class="line"><span style="color:#A6ACCD;">  set_process_input(true)</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"> func _input(ev):</span></span>
<span class="line"><span style="color:#A6ACCD;">   if(ev.type == InputEvent.MOUSE_MOTION):</span></span>
<span class="line"><span style="color:#A6ACCD;">     VisualServer.cursor_set_pos(ev.pos,0)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u68C0\u67E5\u6570\u636E\u7C7B\u578B</p><div class="language-html line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">var a_var = 1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">var type = typeof(a_var)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">if (type==TYPE_INT):</span></span>
<span class="line"><span style="color:#A6ACCD;">	print(&quot;it&#39;s an int&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">elif (type==TYPE_REAL):</span></span>
<span class="line"><span style="color:#A6ACCD;">	print(&quot;it&#39;s a float&quot;)</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u83B7\u53D6\u9F20\u6807\u5355\u51FB\u4F4D\u7F6E*</p><p>\u53EF\u4EE5\u5728_process \u6216 _input\u4E2D\u83B7\u53D6</p><div class="language-html line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">_process()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">func _ready():</span></span>
<span class="line"><span style="color:#A6ACCD;">  set_process(true)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">func _process(delta):</span></span>
<span class="line"><span style="color:#A6ACCD;">  if(Input.is_mouse_button_pressed(1)):</span></span>
<span class="line"><span style="color:#A6ACCD;">    print(&quot;left click: &quot;, Input.get_mouse_pos())</span></span>
<span class="line"><span style="color:#A6ACCD;">  if(Input.is_mouse_button_pressed(2)):</span></span>
<span class="line"><span style="color:#A6ACCD;">    print(&quot;right click: &quot;, Input.get_mouse_pos())</span></span>
<span class="line"><span style="color:#A6ACCD;">  if(Input.is_mouse_button_pressed(3)):</span></span>
<span class="line"><span style="color:#A6ACCD;">    print(&quot;middle click: &quot;, Input.get_mouse_pos())</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><div class="language-html line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">_input()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">func _ready():</span></span>
<span class="line"><span style="color:#A6ACCD;">  set_process_input(true)</span></span>
<span class="line"><span style="color:#A6ACCD;">func _input(ev):</span></span>
<span class="line"><span style="color:#A6ACCD;">  if(ev.type == InputEvent.MOUSE_BUTTON):</span></span>
<span class="line"><span style="color:#A6ACCD;">    print(&quot;Mouse event: &quot;, ev.pos)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u5982\u4F55\u68C0\u67E5\u76EE\u5F55\u662F\u5426\u5B58\u5728</p><div class="language-javascript line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;"># Checking </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> a directory exist </span><span style="color:#89DDFF;">in</span><span style="color:#A6ACCD;"> resource data directory</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> res_dir </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Directory</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">new</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;">(res_dir</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">dir_exists</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">res://my_dir</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)):</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">print</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">res://my_dir exist</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;"># Checking </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> a directory exist </span><span style="color:#89DDFF;">in</span><span style="color:#A6ACCD;"> user data directory</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> user_dir </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Directory</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">new</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">user_dir</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">open</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">user://</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> ( user_dir</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">dir_exists</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">user://my_dir</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">) ):</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#82AAFF;">print</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">user://my_dir exist!</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;"># Checking </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> a directory exist </span><span style="color:#89DDFF;">in</span><span style="color:#A6ACCD;"> file system</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> fs_dir </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Directory</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">new</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">fs_dir</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">open</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> ( fs_dir</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">dir_exists</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">c:</span><span style="color:#A6ACCD;">\\\\</span><span style="color:#C3E88D;">Windows</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">) ): # guilty </span><span style="color:#89DDFF;font-style:italic;">as</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">charged</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;"> marynate</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#82AAFF;">print</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">c:</span><span style="color:#A6ACCD;">\\\\</span><span style="color:#C3E88D;">Windows exist!</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div>`,38),r=[e];function o(c,i,t,b,A,u){return a(),n("div",null,r)}var m=s(l,[["render",o]]);export{y as __pageData,m as default};
