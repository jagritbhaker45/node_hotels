const express=require('express');
const router=express.Router();
const menuitem=require('./../models/menuitem');


//post route to add a menuitem
router.post('/',async(req,res)=>{
  try{
    const data=req.body //assuming the request body contains the person data
  
    //create a new person document using the mongoose model
    const newmenuitem=newmenuitem(data);
  
    //save the new menuitem to the database
    const response=await newmenuitem.save();
     console.log('data saved');
    res.status(200).json(response);
  
  }
  catch(err){
      console.log(err);
      res.status(500).json({error:'internal server error'});
  }
  
  })


// get method to get the menuitem
router.get('/',async(req,res)=>{
  try{
    const data=await menuitem.find(); // fetches all records from the  database
    console.log('data fetched'); 
    res.status(200).json(data);
  } catch(err){
    console.log(err);
    res.status(500).json({error:'internal server error'});
  }
})

router.get('/:tastetype',async(req,res)=>{
  try{
    const tastetype=req.params.tastetype; // extract the tastetype from url parameter
    if(tastetype=='sweet' || tastetype=='spicy'|| tastetype=='sour'){

      const response=await menuitem.find({taste:tastetype});
      console.log('response fetched');
      res.status(200).json(response);
    }  else{
      res.status(404).json({error:'invalid work type'});
    }
  }  catch(err){
    console.log(err);
    res.status(500).json({error:'internal server error'});
  }
})

module.exports=router;