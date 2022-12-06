const express = require("express");
const router = express.Router();
const {signupUser,loginUser} = require("../../Database/dbUsers")

router.post("/signup",(req,res)=>{
    signupUser(req.body,(response)=>{
        res.json(response)
    })
})

router.post("/login",(req,res)=>{
    loginUser(req.body)
    .then((data)=>{
        res.json(data)
    })
    .catch((err)=>{
        res.json(err)
    })
})

module.exports = router;