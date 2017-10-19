var express = require("express");
var app = express();
var routes = require("./routes/index_route.js")(app);

app.listen(12307);
console.log("服务启动在端口：12307");
