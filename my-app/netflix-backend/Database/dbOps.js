require("dotenv").config();
const {getdb}=require("./db");
const objectId=require("mongodb").ObjectId;


// i/p - 4 objects   o/p - pipeline array
function pipelineHome(match,sort,project,limit){
    const pipeline=[
       {$match : match},
       {$sort : sort},
       {$project : project},
       {$limit : limit}
   ];
   return pipeline;

}


// i/p - pipeline array  o/p - Desired data in an array
async function fetchMovies(pipeline){
    try{
        const cursor=await getdb().collection(process.env.MONGODB_COLLECTION_NAME).aggregate(pipeline).toArray();
        return cursor;
     }
     catch(err){
         console.log("Fetching failed!!",err);
     }  
}



// i/p-genreArray   o/p- Array containing similar movies
async function similarMovies(genreArray,id){
    const match = {$and:[{_id:{$ne:objectId(id)}},{$or:genreArray}]}
    const sort = {"metaData.year":1}
    const project = {_id:1,template_image:1}
    const limit = 12
    const result = await fetchMovies(pipelineHome(match,sort,project,limit));
    return result;
}


module.exports = {fetchMovies,pipelineHome,similarMovies};