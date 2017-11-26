var http = require("http");
var url = require("url");

http.createServer(function(request,response){
	var path = url.parse(request.url);
	console.log(path);	
}).listen(12307);

console.log("url解析服务启动在端口:12307");


