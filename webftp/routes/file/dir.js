const express = require('express');
const fs = require('fs');
const router = express.Router();

router.get('/',function(req,res){
    res.send('查看文件数据信息');
    res.end();
});

module.exports=router;
