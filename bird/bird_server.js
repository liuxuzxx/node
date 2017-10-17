var express = require("express");
var ejs = require("ejs");
var router = express.Router();

router.get("/",function(req,res){
	res.send("首页界面...");
	res.end();
});

router.get("/login",function(req,res){
	ejs.renderFile("",function(err,data){
		if(err){
			console.log("文件读取失败");
		}else{
			res.send(data);
			res.end();
		}
	});
});
