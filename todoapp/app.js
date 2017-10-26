var express = require("express");
var app = express();
// 在express中一定要有个引擎 调用set方法 模板引擎设为ejs
app.set("view engine","ejs");
//  前面是路径 后面是文件名  静态文件引入一定要用这个方法
app.use("/assets",express.static(__dirname+"/assets"));

var todoController = require("./controller/todoController");

todoController(app);

app.listen(3000);