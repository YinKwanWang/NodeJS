var bodyParser = require("body-parser");//在前台为静止流的形式所以我们要对她解析
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var data = [{item:"Dog"},{item:"East"},{item:"West"}];
module.exports = function(app){
	//console.log(app);
	app.get('/todo',(req,res) => {
          res.render("todos",{todos:data});
	});
	app.post('/todo',urlencodedParser,(req,res) => {
          // console.log(req.body);
          data.push(req.body);
          res.json(data);
	});
	app.delete('/todo/:name',(req,res) => {
          // console.log(req.params.name);
          // ES6 == es2015 ecma新标准专门针对数组的方法 （for...of filter map)
          // filter: 过滤 （条件不满足的干掉，满足的留下）
         /* data = data.filter(function(todo){
          	var value = todo.item!==req.params.name;
          	//console.log(value);
          	return value;
          });*/
          // for循环方法
          for (var i = 0; i < data.length; i++) {
          	if (data[i].item == req.params.name) {
          		data.splice(i,1);
          	}
          }
          res.json(data);
	});
}