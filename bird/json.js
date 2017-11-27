var http = require("http");

var people = {
	name: '钟晓霞',
	age: 26
};

http.createServer(function(request,response){
	response.writeHead(200,{
		'Content-Type': 'application/json'
	});
	response.write(JSON.stringify(people));
	response.end();
}).listen(12311);

console.log("json服务器启动了，端口是：12311");
