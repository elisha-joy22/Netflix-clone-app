require("dotenv").config();
const { request } = require("express");
const express=require("express");
const {MongoClient}=require("mongodb");
const app=express();
const {dbConnection}=require("./Database/db.js");

const genreRouter=require("./Routes/genres")

app.use("/genres",genreRouter);



app.listen(4000,async()=>{
    console.log("Server connected on port 4000 successsfully");
    await dbConnection((result)=>{
        console.log(result);
    });
})
