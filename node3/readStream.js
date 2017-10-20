var fs = require("fs");
// 创建了实例化的对象
// __dirname追加了自身的目录路径，一般这样做的好处是，可以避免文件的混乱调用。
var myReadStream = fs.createReadStream(__dirname+"/readMe.txt","utf8");
// console.log(myReadStream);
myReadStream.on("data",function(chunk){
	   console.log("==============接受chunk============");
       console.log(chunk);
});