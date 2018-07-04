const express = require('express');
const app = express();
app.use(express.static(__dirname + '/public'));
app.listen(6000);
app.get('/',function (request,response) {
    response.write('hello world');
});



