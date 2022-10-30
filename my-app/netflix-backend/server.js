require("dotenv").config();
const express = require("express");
const cors = require("cors");
const {MongoClient} = require("mongodb");
const {dbConnection} = require("./Database/db.js");

const genresRouter = require("./Routes/genres");
const movieRouter = require("./Routes/movie");


const app = express();
//Middlewares
app.use(cors());

//Routes
app.use("/genres",genresRouter);
app.use("/movie",movieRouter);


app.listen(4000,async()=>{
    console.log("Server connected on port 4000 successsfully");
    await dbConnection((result)=>{
        console.log(result);
    });
})
