# NodeJS lesson-2
### node4 讲述把json数据用node.js搭建的服务器进行解析
### text/plain 返回的是文本 text/html 返回的是html application/json 返回的是json 

### node5 讲述node环境里路由的介绍 / __dirname + "/index.html" 绝对路径的拼接 通过管道pipe(res)发送实现页面跳转

### node6 讲述npm终端命令 es6=es2015函数用法()=>{} 通过路由参数有多少个页面请求多少次app.get('/contact',(req,res) => {res.send("This is Contact Page!");});

### 测试时用node app.js 或者nodemon app 命令

### 1.确认自己node环境版本 node -v  ctrl + c 是取消当前操作
### 2.安装cnpm镜像网址http://riny.net/2014/cnpm/  cnpm --version确认自己npm镜像是否安装成功
### N : Node一定要有node环境才可以使用      需要依赖的环境
### P : Package                         需要拥有的文件
### M : Manage                          需要管理的模块
### 3.初始化 package.json npm init (需要添加对应信息) 
### npm init --yes 是默认快速生成package.json文件
### 4.安装模块与删除模块npm install jquery 有上面一步才可以使用 若需卸载需用npm uninstall jquery 
###  npm cache clear 清除缓存 清除debug错误
###  cnpm install 快速下载放到nodemudle模块
###  5.nodemon全局安装命令(监控代码变化自加载)npm install -g nodemon(window)    sudo npm install -g nodemon (mac) ->全局下载 
###  npm init --yes  package文件创建 | cnpm install express --save  express 框架安装| cnpm install ejs --save      ejs模版引擎 安装

### node7 讲述express开发框架应用 （html 与 express 无法进行对接 需要ejs模板引擎来联系）
### 在引用express模块后注意一定要用 var app = express();调出
### 在express中一定要有个引擎 调用set方法 模板引擎设为ejs app.set("view engine","ejs");
### 引入静态文件要用use方法 app.use("/assets",express.static('./assets')); 
### 在get方法里res.render("index");渲染到浏览器页面
### 在ejs文件中引入其他文件 有自己的语法<% include ../public/nav.ejs %>
### ejs语法遍历 例子： <% data.forEach(function(data){ %>
###             <li>
###             	<strong>标题:</strong><%= data.title %>
###				<br>
###				<strong>内容:</strong><%= data.body %>
###				<br>
###				<strong>作者:</strong><%= data.author %>
###             </li>
###   	  <% }) %>
### 注意：引入文件要加上路径

### todoapp 用express实现的小Demo
### juery ajax请求实现增删改查 后台交互
