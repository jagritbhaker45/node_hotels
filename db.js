const mongoose=require("mongoose");
require('dotenv').config();

// Define the mongodb connection url
//const mongoURL='mongodb://localhost:27017/hotels'
const mongoURL=process.env.MONGODB_URL;

//set up mongodb connection
mongoose.connect(mongoURL,{
  useNewUrlParser:true,
  useUnifiedTopology:true
})

//get the default connection
//mongoose maintains a default connection object representing the mongodb connection
const db=mongoose.connection;

// define event listeners for database connection
db.on('connected',()=>{
  console.log('connected to mongodb server');
});

db.on('error',()=>{
  console.log('mongodb connection error');
});

db.on('disconnected',()=>{
  console.log('mongodb disconnected');
});

//exports the database connection
module.exports=db;