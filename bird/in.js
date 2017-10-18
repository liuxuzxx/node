var express = require("express");
var app = express();

app.use(express.static(__dirname + '/public'));

app.listen(12307);
console.log("服务器启动了，在端口：12307");
