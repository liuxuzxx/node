var http = require("http");

var options = {
	host :"www.baidu.com",
	port :80,
	path :"/"
};

http.get(options,function(response){
	if(response.statusCode == 200){
		console.log("正常的Http请求回答");
		console.log(response);
	}
}).on("error",function(err){
	console.log("错误信息："+err);
});
