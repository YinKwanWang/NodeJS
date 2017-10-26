var express = require("express");
var app = express();
// 在express中一定要有个引擎 调用set方法 模板引擎设为ejs
app.set("view engine","ejs");
//  前面是路径 后面是文件名  静态文件引入一定要用这个方法
app.use("/assets",express.static('./assets')); 
// 在这里要用sendFile方法发送
// html 与 express 无法进行对接 需要ejs模板引擎来联系
app.get("/",(req,res) => {
     //res.sendFile(__dirname+"/views/index.ejs");
     res.render("index");
});
app.get("/contact",(req,res) => {
     //res.sendFile(__dirname+"/views/contact.ejs");
     res.render("contact");
});

// 路由参数
app.get("/blogs/:sbqid",(req,res) => {

	 var sbqdata = [
	 {title:"博客1",author:"Henry",body:"this is first blog"},
	 {title:"博客2",author:"Bucky",body:"this is second blog"},
	 {title:"博客3",author:"Emily",body:"this is third blog"},
	 ];
     res.render("blog",{id:req.params.sbqid,data:sbqdata});//第二个参数一定是一个对象
});
app.listen(3000);