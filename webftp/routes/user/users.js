const express = require('express');
const router = express.Router();

router.get('/',function (request,response) {
   response.send('欢迎来到用户界面');
   resposne.end();
});

router.get('/login',function(request,response){
    response.send('登录界面');
    response.end();
});

module.exports = router;