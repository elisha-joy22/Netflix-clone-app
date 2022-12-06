require("dotenv").config();
const express = require("express");
const cors = require("cors");
const multer  = require('multer')
const {MongoClient} = require("mongodb");
const {dbConnection} = require("./Database/db.js");

const genresRouter = require("./Routes/movieRoutes/genre");
const movieRouter = require("./Routes/movieRoutes/movie");
const userRouter = require("./Routes/userRoutes/user");

const app = express();
const upload = multer()
//Middlewares
app.use(cors());
app.use(express.json());

//Routes
app.use("/genre",genresRouter);
app.use("/movie",movieRouter);
app.use("/user",upload.none(),userRouter);


app.listen(process.env.SERVER_PORT,async()=>{
    console.log(`Server connected on ${process.env.SERVER_PORT} successfully`);
    await dbConnection((result)=>{
        console.log(result);
    });
})
