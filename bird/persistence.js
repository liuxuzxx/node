//持久化数据信息
var fs = require("fs");
var express = require("express");
var app = express();
app.listen(12310);
app.get("/info",function(request,response){
	fs.writeFile("http.log",request.toString(),function(err){
		console.log(err);
	});
});

console.log("持久化服务启动，端口是：12310");

console.log(process.env);
