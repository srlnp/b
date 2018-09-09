var express=require("express");
var app=express();
var port=1111;
app.use(express.static(__dirname+'/index1.html'));
console.log(__dirname+'/index1.html')
app.listen(port);
console.log("server started"+port);