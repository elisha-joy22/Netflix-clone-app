const express=require("express");
const router=express.Router();
const {fetchMovies,pipelineHome,similarMovies}=require("../../Database/dbOps");
const objectId=require("mongodb").ObjectId;


router.get("/:id",async (req,res)=>{
    let genreArray=[];
    //Fetch full movie details object from db by ID
    const pipeline=[{$match:{_id:objectId(req.params.id)}}]; 
    const resultMovie = await fetchMovies(pipeline);
    
    //Fetch ID & template image url of similar movies
    await resultMovie[0].genre.forEach((item)=>{
        genreArray.push({genre:item});
    });
    
    const resultSimilarMovies=await similarMovies(genreArray,req.params.id);
    
    //Paste both movie details and similar movies array to an object
    const data={movie:resultMovie[0],similarMovies:resultSimilarMovies}
    console.log(data);
    res.json(data);
    //gives o/p of movie by Id and similarmovie array as data object  
});







module.exports = router;