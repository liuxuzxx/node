//产生子进程的实验
var spawn = require("child_process").spawn;

var ping = spawn('ping',['www.baidu.com']);

ping.stdout.setEncoding('utf8');

ping.stdout.on('data',function(data){
	console.log(data);
});
