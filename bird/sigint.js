//测试nodejs接受信号的实验
process.stdin.resume();

process.on('SIGINT',function(){
	console.log("终止信号和进程");
	process.exit(0);
});
