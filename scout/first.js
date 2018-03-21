const http = require('http');

const hostName = 'localhost';
const port = 2018;

const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','application/json');
    res.end('侦查兵...');
});

server.listen(port,hostName,()=>{
    console.log(`服务器启动了，监听地址是:http://${hostName}:${port}/`);
});
