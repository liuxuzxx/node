const http = require('http');
const express = require('express');
const ejs = require('ejs');
const path = require('path');

const app = express();
app.engine('html',ejs.__express);
app.set('views',path.join(__dirname,'views'));
app.set('views engine','html');
/**
 * 导入各个路由模块
 */
const userRouter = require('./routes/user/users');
app.use('/user',userRouter);
const dirRouter = require('./routes/file/dir');
app.use('/file',dirRouter);
const bugRouter = require('./routes/bug/bug');
app.use('/bug',bugRouter);



http.createServer(app).listen(9600,function (err) {
    if(!err){
        console.log(`服务器启动在9600端口`);
    }
});

app.get("/",function (request,response) {
    response.render('index.html');
});