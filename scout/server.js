const http = require('http');
const httpProxy = require("http-proxy");
const fs = require("fs");
const url = require("url");

const hostName = 'localhost';
const port = 2018;

const curl = require('./src/service/curl-man/curl-man');
const angular = require('./src/service/angular/angular');

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

http.createServer(function(req, res){
    let requestUrl = req.url;
    console.log(`请求的URL：${requestUrl}`);
    let path = url.parse(requestUrl).pathname;
    angular.urlDispatcher(path,res);
}).listen(port, hostName, function(){
    console.log(`服务器启动了，监听地址是:http://${hostName}:${port}/`);
    var curlMessage = curl.license();
    console.log(curlMessage)
});



