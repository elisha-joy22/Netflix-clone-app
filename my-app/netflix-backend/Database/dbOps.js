require("dotenv").config();
const db=require("./db");

function pipelineHome(match,sort){
    const pipeline=[
       {$match:match},
       {$sort:
           {"metaData.year":sort}
       },
       {$project:
           {_id:1,
           title_image:1}
       },
       {$limit:8}
   ];
   return pipeline;

}


async function fetchMovies(pipeline){
    try{
        const cursor=await getdb().collection(process.env.MONGODB_COLLECTION_NAME).aggregate(pipeline).toArray();
        return cursor;
     }
     catch(err){
         console.log("Fetching failed!!",err);
     }  
 }

module.exports = {fetchMovies};