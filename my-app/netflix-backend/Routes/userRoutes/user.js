const express = require("express");
const router = express.Router();
const {signupUser,loginUser,verifyAccessToken} = require("../../Database/dbUsers");
const jwt = require('jsonwebtoken');

router.post("/signup",(req,res)=>{
    signupUser(req.body,(response)=>{
        res.json(response)
    })
})


router.get("/test",verifyAccessToken,(req,res)=>{
    res.json({tokenverification:"success"})
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