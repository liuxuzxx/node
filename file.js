var fs = require("fs");

var in_stream = fs.readFileSync('input.txt');
console.log(in_stream.toString());

var un_sync = fs.readFile("error.config",function(err,data){
    if(err){
        console.error(err);
    }
});

console.log("读取不存在的文件对象错误展示...");
