/**
 * Created by liuxu on 2018-12-06 09:21:02
 * description: 商品的restful服务
 */

let products = [{
    name: 'iPhone8',
    price: 6889
}, {
    name: 'Dell笔记本',
    price: 7869
}];

module.exports = {
    'GET /api/rest/products': async (ctx, next) => {
        ctx.response.type = 'application/json';
        ctx.response.body = {
            products: products
        };
    },
    'POST /api/rest/product': async (ctx, next) => {
        const newProduct = ctx.request.body;
        products.push(newProduct);
        ctx.response.type = 'application/json';
        ctx.response.body = 'Add success!';
    }
};