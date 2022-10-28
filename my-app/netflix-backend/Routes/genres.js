const express=require("express");
const app=express();
const router=express.Router();
const db=require("../Database/dbOps");





router.get("/Recently_Added",async (req,res)=>{
    const result=await db.fetchMovies(pipelineHome({},-1));
    console.log(result);
    res.json(result);
})


router.get("/Dramas",async (req,res)=>{
    const result=await db.fetchMovies(pipelineHome({genre:"Dramas"},1));
    console.log(result);
    res.json(result);
})

router.get("/Action_&_Adventure",async(req,res)=>{
    const result=await db.fetchMovies(pipelineHome({genre:"Action & Adventure"},1));
    console.log(result);
    res.json(result);
})

router.get("/Crime_Movies",async(req,res)=>{
    const result=await db.fetchMovies(pipelineHome({genre:"Crime Movies"},1));
    console.log(result);
    res.json(result);
})

router.get("/Thriller_Movies",async(req,res)=>{
    const result=await db.fetchMovies(pipelineHome({genre:"Thriller Movies"},1));
    console.log(result);
    res.json(result);
})

router.get("/Malayalam_Language_Movies",async(req,res)=>{
    const result=await db.fetchMovies(pipelineHome({genre:"Malayalam-Language Movies"},1));
    console.log(result);
    res.json(result);
})

router.get("/Sci-Fi_Movies",async(req,res)=>{
    const result=await db.fetchMovies(pipelineHome({genre:"Sci-Fi Movies"},1));
    console.log(result);
    res.json(result);
})



module.exports=router;