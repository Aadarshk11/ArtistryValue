const express = require("express");
const router = express.Router();

router.post('/maindata', (req,res)=>{
    try {
        
        res.send([global.mainData, global.ArtCategory])
    } catch (error) {
        console.error(error.message);
        res.send("Server Error")
    }
})

module.exports = router;