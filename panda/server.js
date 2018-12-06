const Koa = require('koa');
const productRest = require('./rest/productRest');
const app = new Koa();

app.use(async ctx=>{
	ctx.body = 'Hello Koa!';
});

app.listen(12306);