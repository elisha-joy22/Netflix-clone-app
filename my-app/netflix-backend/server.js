require("dotenv").config();
const express = require("express");
const cors = require("cors");
const {MongoClient} = require("mongodb");
const {dbConnection} = require("./Database/db.js");

const genresRouter = require("./Routes/movieRoutes/genre");
const movieRouter = require("./Routes/movieRoutes/movie");
const userRouter = require("./Routes/userRoutes/user");

const app = express();
//Middlewares
app.use(cors());

//Routes
app.use("/genre",genresRouter);
app.use("/movie",movieRouter);
app.use("/user",userRouter);

app.listen(process.env.SERVER_PORT,async()=>{
    console.log(`Server connected on ${process.env.SERVER_PORT} successsfully`);
    await dbConnection((result)=>{
        console.log(result);
    });
})
