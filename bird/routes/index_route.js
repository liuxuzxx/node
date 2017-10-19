module.exports = function(app){
    app.get("/",function(req,res){
        res.send("The index home page...");
        res.end();
    });

    app.get("/home",function(req,res){
        res.send("Home页面");
        res.end();    
    });

    app.get("/login",function(req,res){
        res.send("Login登录页面");
        res.end();
    });
};
