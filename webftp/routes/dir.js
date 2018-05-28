const express = require('express');
const fs = require('fs');
const router = express.Router();

router.get('/*',(req,res)=>{
    res.send(fs.readdir('/home/user'));
});

module.exports=router;
