const express=require('express');
//server creation
const app=express();
let port=4000;


app.listen(port,function(){
     console.log(`server is listening on port ${port}`);
});

//types of request
 app.get('/home',(req,res)=>{
     console.log(req.hostname);
     console.log(req.path);
     console.log(req.method);
     res.send('<h1>This is home</h1>');
 })