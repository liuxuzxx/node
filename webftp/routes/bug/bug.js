/**
 * bug服务的操作
 */
const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'lx'
});


router.get('/', function (request, response) {
    connection.connect();
    connection.query("select * from bugs", function (err, rows, fields) {
        if (err) {
            throw err;
        }
        response.send('数据查询结果为:' + JSON.stringify(rows[0]));
    });
    connection.end();
});

router.get('/bug', function (request, response) {
    response.render('./bug/bug.html');
});

router.post('/bug', function (request, response) {
    console.log(request.body);
    let data = request.body;
    data.create_by = 'liuxu';
    data.update_by = 'liuxu';
    connection.connect();
    connection.query("Insert into bugs set ?", data, function (error, results, fields) {
        if (error) {
            throw error;
        }
        response.send('数据插入成功!');
    });
    connection.end();
});

router.put('/bug', function (request, response) {

});

router.delete('/bug', (request, response) => {

});

module.exports = router;