//  在Nodejs中经藏使用的函数表达式

// 正常

function sayHi1(){
	console.log("Hello XiaoChen!");
}

// 函数表达式 右左法则
var sayHi2 = function(){
	console.log("Hello MiaoJie!");
}
// sayHi();

function callFunction(foo){
	foo();
}
callFunction(sayHi1);