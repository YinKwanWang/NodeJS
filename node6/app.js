var express = require("express");// 传过来是一个方法
var  app = express();            // 调用方法拿到它里面的对象


app.get('/',(req,res) => {       //function(req,res){} 左边是es6函数写法
      //console.log(req);
      res.send("This is Home Page!");
});     // 路由  有多少个页面就写多少app.get()

app.get('/contact',(req,res) => {
	res.send("This is Contact Page!");
});

// 路由参数怎么设置
app.get('/blogs/:sbqid',(req,res) => {
	console.log(req);
	res.send("具体的路由参数为: "+req.params.sbqid);
});

app.listen(3000);// 会监听我的js文件 