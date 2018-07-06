/**
 * bug服务的操作
 */
const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'lx'
});


router.get('/',function (request, response) {
    connection.connect();
    connection.query("select * from bugs",function (err,rows,fields) {
        if(err){
            throw err;
        }
        response.send('数据查询结果为:'+JSON.stringify(rows[0]));
    })
    connection.end();
});

module.exports = router;