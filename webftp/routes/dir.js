const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
	res.send('服务器可以进入目录了...');
});

router.get('/home/*',(req,res)=>{
	res.send('访问地址是:'+req.params[0]);
});

module.exports=router;
