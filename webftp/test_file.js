var fs = require("fs");

fs.readdir("/home/liuxu",function(err,files){
	if(err){
		console.log("读取文件列表信息错误...");
	}
	console.log(files);
});
