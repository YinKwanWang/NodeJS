// 路由介绍  /斜杠就是主页
var http = require("http");
var fs = require("fs");

var server = http.createServer(function(req,res){
        
        if(req.url !== "/favicon.icon"){
                //console.log(req.url);
                if (req.url == "/"||req.url == "/home") {
                        res.writeHead(200,{"Content-type":"text/html"});
                        var myReadStream = fs.createReadStream(__dirname + "/index.html","utf8");
                }else if (req.url == "/about"){
                        res.writeHead(200,{"Content-type":"text/html"});
                        var myReadStream = fs.createReadStream(__dirname + "/about.html","utf8");
                }else if (req.url == "/contact") {
                         res.writeHead(200,{"Content-type":"text/html"});
                        var myReadStream = fs.createReadStream(__dirname + "/lianxi.html","utf8");
                }else{
                        res.writeHead(200,{"Content-type":"text/html"});
                         var myReadStream = fs.createReadStream(__dirname + "/404.html","utf8");
                }
        }
        //res.writeHead(200,{"Content-type":"application/json"});
        // var myReadStream = fs.createReadStream(__dirname + "/index.html","utf8");

        myReadStream.pipe(res);
        
       
});

server.listen(3000,"127.0.0.1");
console.log("server is Running...");