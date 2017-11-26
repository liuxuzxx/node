var express = require("express");
var app = express();

app.listen(12308);
console.log("启动Express服务，端口是：12308");

app.get("/about",function(request,response){
	response.send("这是介绍产品的页面");
	response.end();
});

app.post("/login",function(request,response){
	response.send("登录信息。。。");
	response.end();
});

app.get("/heart/:id",function(request,response){
	response.send("获取的id是："+request.params.id);
	response.end();
});
