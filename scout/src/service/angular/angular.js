'use strict'
const fs = require('fs');
/**
 * 对传递过来的url进行转发，根据不同的规则
 * @param path url路径
 * @param response 回复给客户端的Response对象
 */
String.prototype.endWith=function(endStr){
    var d=this.length-endStr.length;
    return (d>=0&&this.lastIndexOf(endStr)==d)
}

function urlDispatcher(path,response){
    if(path.endWith('.html')){
        fs.readFile("."+path,function(error,data){
            if(error){
                console.log(error);
                response.writeHead(404, {'Content-Type': 'text/html'});
            }else{
                response.writeHead(200, {'Content-Type': 'text/html'});
                response.write(data.toString());
            }
            response.end();
        });
    }else{
        response.writeHead(206,{'Content-Type':'application/json','User-Site':'liuxu'});
        response.write('{"site":"localhost-angular-site"}');
        response.end();
    }
}


exports.urlDispatcher=urlDispatcher;