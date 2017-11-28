var EventEmitter = require("events").EventEmitter;
var eve = new EventEmitter();


eve.on('message',function(data){
	console.log("激发事件："+data);
});


eve.emit("message","接受来自网络的数据");


eve.on("process self",function(data){
	console.log(data);
});

eve.emit("process self","自我调用");
