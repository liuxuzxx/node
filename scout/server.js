const express = require('express');
const app = express();
app.use('/public',express.static('src/public'));
app.listen(12306);

app.get('/',function (request,response) {
    response.write('hello world');
    response.end();
});

app.get('/index',function(request,response){
    response.write('首页界面信息,查看Express的路由拦截');
    response.end();
});



