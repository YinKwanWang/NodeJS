// EventEmitter 类
// 系统提供的不需要给路径 自己创建的模块一定要给路径
var event = require("events");
/*js 事件
element.on("click",function(){
       // 具体执行的代码
});*/

// 实例化事件对象
var myElitter = new event.EventEmitter();

// 注册事件
myElitter.on("sbqEvent",function(msg){
	console.log(msg);
});

//  激活事件
myElitter.emit("sbqEvent","sbqEvent事件被触发！");