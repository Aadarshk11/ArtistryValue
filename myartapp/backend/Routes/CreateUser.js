const express = require('express')
const router = express.Router()
const User = require('../models/User')

router.post("/createuser",async(request,res)=>{
    try {
        await User.create({
            name:"ayush J",
            location:"indore",
            email:"ayushj22@gmail.com",
            password:"2272272"
        })
        res.json({success:true});
    } 
    
    
    catch (error) {
        console.log(error)
        res.json({success:false});

    }
})

module.exports = router;