var fs = require("fs");

// 同步读取文件

var readMe = fs.readFileSync('readMe.txt',"utf8");
// console.log(readMe);
// 同步写入文件

// var readMe = readMe+"Hello World!"; 不清除以前的东西

// fs.writeFileSync("writeMe.txt","Hello World!"); 

// 异步 读取 & 写入
/*fs.readFile("readMe.txt","utf8",function(err,data){
	if (err) throw err;
     
	//console.log(data);
         
});*/
//console.log(123);

/*fs.writeFile("readMe.txt","Hello  Everybody!",function(err,data){
	 if(err) throw err;
	 //console.log(data);
})*/
// 异步读取文件readMe.txt;
// 异步读取文件，并将读取的文件内容写入writeMe.txt中
// fs.readFile("readMe.txt","utf8",function(err,data){
// 	if (err) throw err;
   
//    fs.writeFile("writeMe.txt",data);
//  });
//console.log(123);
/*fs.unlink("writeMe.txt",function(err,result){
         if(err) throw err;
         console.log(result);
});*/

// 创建文件夹
fs.mkdir("stuff",function(){
      
});

// 删除文件夹
// fs.rmdir("stuff");