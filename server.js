// 引入系统给好的模块
var http = require("http");
var server = http.createServer(function(req,res){
       console.log("客户端和服务器已经建立通讯"+req.url);
       // 一定要给他响应头
       // 该方法会通知服务器，所有响应头和响应主体都已被发送，即服务器将其视为
       // 已完成。 每次响应都必须调用 response.end() 方法。
       res.writeHead(200,{"Content-type":"text/plain"});
       res.end("Hey NodeJS");
});
// 监听本机服务器和端口号
server.listen(3000,"127.0.0.1");

console.log("server is running...");