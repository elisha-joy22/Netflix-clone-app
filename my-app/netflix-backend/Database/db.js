require("dotenv").config();
const {MongoClient}=require("mongodb");
const client=new MongoClient(process.env.MONGODB_URL);
const db=client.db(process.env.MONGODB_DB_NAME);
const state={
    db:null
}

async function dbConnection(callback){
    try{
       await client.connect();
       state.db=db;
       callback("Database connected successfully");
    }
    catch(e){
        callback("Error connecting db:"+e);
    }
    finally{
        if(state.db){
            setTimeout(()=>{
                client.close();
                console.log("connection closed due to timeout!!");
            },3*60*60*1000);
        }
    }
};


function getdb(){
    return state.db;
}




module.exports= {dbConnection,getdb};



