const express=require("express");
const router=express.Router();
const {fetchMovies,pipelineHome}=require("../../Database/dbOps");


const sort={"metaData.year":-1};
const project={_id:1,title:1,template_image:1};
const limit=8;    

router.get("/Recently%20Added",async (req,res)=>{
    const result=await fetchMovies(pipelineHome({},sort,project,limit));
    console.log(result);
    res.json(result);
})


router.get("/Dramas",async (req,res)=>{
    const result=await fetchMovies(pipelineHome({genre:"Dramas"},sort,project,limit));
    console.log(result);
    res.json(result);
})

router.get("/Action%20&%20Adventure",async(req,res)=>{
    const result=await fetchMovies(pipelineHome({genre:"Action & Adventure"},sort,project,limit));
    console.log(result);
    res.json(result);
})

router.get("/Crime%20Movies",async(req,res)=>{
    const result=await fetchMovies(pipelineHome({genre:"Crime Movies"},sort,project,limit));
    console.log(result);
    res.json(result);
})

router.get("/Thriller%20Movies",async(req,res)=>{
    const result=await fetchMovies(pipelineHome({genre:"Thriller Movies"},sort,project,limit));
    console.log(result);
    res.json(result);
})

router.get("/Malayalam-Language%20Movies",async(req,res)=>{
    const result=await fetchMovies(pipelineHome({genre:"Malayalam-Language Movies"},sort,project,limit));
    console.log(result);
    res.json(result);
})

router.get("/Sci-Fi%20Movies",async(req,res)=>{
    const result=await fetchMovies(pipelineHome({genre:"Sci-Fi Movies"},sort,project,limit));
    console.log(result);
    res.json(result);
})

router.get("/Courtroom%20Movies",async (req,res)=>{
    const result=await fetchMovies(pipelineHome({genre:"Courtroom Movies"},sort,project,limit));
    console.log(result);
    res.json(result);
})



module.exports=router;