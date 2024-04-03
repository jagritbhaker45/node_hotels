const express=require('express');
const app=express();
const db=require('./db');
require('dotenv').config();
const bodyparser=require('body-parser');
app.use(bodyparser.json());
const PORT=process.env.PORT || 3000;


app.get("/",function(req,res){
  res.send("welcome to my hotel");
});



//import the router files
const personroutes=require('./routes/personroutes');
const menuitemroutes=require('./routes/menuitemroutes');

// use the routers
app.use('/person',personroutes);
app.use('/menuitem',menuitemroutes);


app.listen(3000,()=>{
  console.log("server is running at port no 3000");
});

