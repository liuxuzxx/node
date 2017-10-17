var http = require("http");
var fs = require("fs");
http.createServer(function(request,response){
    console.log(request);
	response.writeHead(200,{'Content-Type':'text/html',
                            'Country-code':'China',
                            'Camera-fov':'187'});
	response.end(fs.readFileSync("./html/login.html").toString());
}).listen(12306);

console.log("Start node server at prot:12306.");
