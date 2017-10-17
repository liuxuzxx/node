var events = require("events");

var eventEmitter = new events.EventEmitter();

var connectHandler = function connected(){
	console.log("连接成功...");
}

eventEmitter.on("starts",connectHandler);

eventEmitter.emit("starts");
console.log("服务器开始关闭...");
