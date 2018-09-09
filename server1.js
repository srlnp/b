var express=require("express");
var app=express();
var port=1111;
app.use(express.static(__dirname+'/index1.html'));
console.log(__dirname+'/index1.html')
app.listen(port);
console.log("server started"+port);

var bodyparser=require("body-parser")
var mysql=require("mysql");
var conn=require("./db_connection");
var express=require("express");
var app=express();
app.get("/",function(req,res){
var connection=conn.getconnection();
connection.connect(); 
connection.query("select * from empn",function(err,result,fields){
if(err)
{
console.log(err);
console.log("error connection on database");
 res.send("error on connection on database");
}else
{if(result=='')
    {
        res.send("sorry data not exist sorry");
    } 
    else{
        res.send(result);
        res.end();}}});});
app.listen(3333,function(){
console.log("sir your server listning the prot no 3333");
});




