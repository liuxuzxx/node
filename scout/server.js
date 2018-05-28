const http = require('http');
const httpProxy = require("http-proxy");

const hostName = 'localhost';
const port = 2018;

/**
 * 生成一个代理服务器，然后使用这个proxy进行前端请求的转发工作
 */
const proxy = httpProxy.createProxyServer({});
proxy.on('error', function (err, req, res) {
    res.writeHeaders(500, {
        'Content-Type': 'text/plain'
    });
    res.end('服务器出现错误，请等待管理员处理');
});

const server = http.createServer(function(req, res){
    var host = req.headers.host;
    console.log(`请求的域名是：${host}`);
    switch (host) {
        case 'localhost:2018':
            res.statusCode = 200;
            res.setHeader('Content-Type','application/json');
            res.end('{"Host地址信息":"Localhost地址信息"}');
            break;
        case '127.0.0.1:2018':
            res.statusCode = 200;
            res.setHeader('Content-Type','application/json');
            res.end('{"127的地址信息":"127.0.0.1:2018"}');
            break;
        default:
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end('{"info":"侦查兵...update"}');
    }
});

server.listen(port, hostName, function(){
    console.log(`服务器启动了，监听地址是:http://${hostName}:${port}/`);
});



