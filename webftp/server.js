const express = require('express');
const app = express();
const hostName = 'localhost';
const port = 2018;


const server = app.listen(port,function(){
	console.log(`WebFTP服务器启动，地址：http://${hostName}:${port}/`);
});


app.get('/',(req,res)=>{
	res.send('你好，欢迎使用NodeJS版本的WebFTP。');
});
