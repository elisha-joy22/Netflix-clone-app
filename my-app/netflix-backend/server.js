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


app.listen(process.env.SERVER_PORT,async()=>{
    console.log(`Server connected on ${process.env.SERVER_PORT} successsfully`);
    await dbConnection((result)=>{
        console.log(result);
    });
})
