#   NodeJS  分支lesson-1
### 对外公开 只有使用module.exports之后，其他文件才可以引用
###  module.exports = {counter : counter,adder : adder,pi : pi};
###  异步 读取 & 写入
###  异步读取
###  fs.readFile("readMe.txt","utf8",function(err,data){if (err) throw err;//console.log(data);}); 
###   异步写入
###   fs.writeFile
###     创建文件夹fs.mkdir("stuff",function(){});
###   删除文件夹
###   fs.rmdir("stuff");
###   __dirname追加了自身的目录路径，一般这样做的好处是，可以避免文件的混乱调用。
###   创建实例化对象 然后分流
###   var myReadStream = fs.createReadStream(__dirname+"/readMe.txt","utf8");
###  console.log(myReadStream);
###   myReadStream.on("data",function(chunk){
###	   console.log("==============接受chunk============");
###       console.log(chunk);
###   });

###   在node.js环境下搭建服务器
###   引入系统给好的模块
###   var http = require("http");
###   var server = http.createServer(function(req,res){
	       console.log("客户端与服务器已经建立通讯"+req.url);
	       res.writeHead(200,{"Coutent":"text/plain"});
	       res.end("Hey NodeJS");
});
###    监听本机服务器端口号
###    server.listen(3000,"127.0.0.1");
