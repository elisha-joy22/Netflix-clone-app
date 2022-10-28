const express=require("express");
const router=express.Router();
const {fetchMovies,pipelineHome}=require("../Database/dbOps");


const sort={"metaData.year":-1};
const project={_id:1,title_image:1};
const limit=8;    

router.get("/Recently_Added",async (req,res)=>{
    const result=await fetchMovies(pipelineHome({},sort,project,limit));
    console.log(result);
    res.json(result);
})


router.get("/Dramas",async (req,res)=>{
    const result=await fetchMovies(pipelineHome({genre:"Dramas"},sort,project,limit));
    console.log(result);
    res.json(result);
})

router.get("/Action_&_Adventure",async(req,res)=>{
    const result=await fetchMovies(pipelineHome({genre:"Action & Adventure"},sort,project,limit));
    console.log(result);
    res.json(result);
})

router.get("/Crime_Movies",async(req,res)=>{
    const result=await fetchMovies(pipelineHome({genre:"Crime Movies"},sort,project,limit));
    console.log(result);
    res.json(result);
})

router.get("/Thriller_Movies",async(req,res)=>{
    const result=await fetchMovies(pipelineHome({genre:"Thriller Movies"},sort,project,limit));
    console.log(result);
    res.json(result);
})

router.get("/Malayalam_Language_Movies",async(req,res)=>{
    const result=await fetchMovies(pipelineHome({genre:"Malayalam-Language Movies"},sort,project,limit));
    console.log(result);
    res.json(result);
})

router.get("/Sci-Fi_Movies",async(req,res)=>{
    const result=await fetchMovies(pipelineHome({genre:"Sci-Fi Movies"},sort,project,limit));
    console.log(result);
    res.json(result);
})



module.exports=router;