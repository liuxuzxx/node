var http = require("http");
http.createServer(function(request,response){
    console.log(request);
	response.writeHead(200,{'Content-Type':'text/plain'});
	response.end("Hello world\n");
}).listen(12306);

console.log("Start node server at prot:12306.");
