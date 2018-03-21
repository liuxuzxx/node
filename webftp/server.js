var http = require("http");
var fs = require("fs");

port = 10086;

http.createServer(answer).listen(port);

function answer(request,response){
    console.log(request);
	response.writeHead(301,{'Content-Type':'text/html',
                            'Country-code':'China',
                            'Camera-fov':'187',
							'Location':"http://sina.com"});
	response.end(fs.readFileSync("./html/login.html").toString());
}

console.log("启动nodejs服务器，端口是："+port);
