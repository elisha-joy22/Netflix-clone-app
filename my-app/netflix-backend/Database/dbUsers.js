require("dotenv").config();
const {getdb} = require("./db");
const objectId = require("mongodb").ObjectId;
const bcrypt = require("bcrypt");
var jwt = require('jsonwebtoken');

/* function to check the signup object follows the defined schema
i/p - signupObject   o/p - boolean */
function signupSchema(obj){
    let result =
        (typeof(obj.userName)==="string" &&
        obj.password.length>=6 &&
        (obj.subscription=="true"||obj.subscription=="false") &&
        typeof(obj.plan)==="string")
        ?
        true:false;
    return result;
}


/*
Checks user exists in db by querying with userName &
returns a boolean - true if user exists
Also calls calback with the user's Details if finds one
*/ 
async function getUser(userName,callback){
    await getdb().collection(process.env.MONGODB_USERS_COLLECTION_NAME)
        .findOne({"userName":userName},(err,res)=>{
            if(err){console.log(err)};
            if(res){
                callback(res);
            }
            else{
                callback(null)
            }
        })  
}

/*Inserts signupObject after validation of
signupSchema function anf findUser function*/
async function signupUser(signupobj,callback){
    !signupSchema(signupobj)?
        callback("Signup object doesn't match with schema")
    :getUser(signupobj.userName,(data)=>{
        data?
            callback("User Exists")
        :bcrypt.hash(signupobj.password,10)
            .then(async(hash)=>{
                signupobj.password = await hash;
                getdb().collection(process.env.MONGODB_USERS_COLLECTION_NAME)
                .insertOne(signupobj,(err,res)=>{
                    if(err)callback(err);
                    callback(JSON.stringify(res)+" document inserted successfully");
                })
            })  
    }); 
}

/*
Uses login variable as a promise
Inside that,uses getUser() to check user.
If it returns user, uses bcrypt compare to match password.
Finally returns a string  
*/

function loginUser(loginobj){
    const loginPromise = new Promise((resolve,reject)=>{
        getUser(loginobj.userName,(data)=>{
            !data?
                resolve("Incorrect Username")
                :bcrypt.compare(loginobj.password,data.password)
                .then((result)=>{
                    resolve( 
                        !result?
                            "Incorrect username or password"
                        :generateAccessToken(data._id)
                    )
                    reject("Server error during login in loginUser")
                })
        })
            
    })
    return loginPromise;
}





/*Auth functions  with JWT*/ 
//generate Access token
async function generateAccessToken(_id){
    let accessToken =
        _id? 
            await jwt.sign(
                {id:_id},
                process.env.JWT_SECRET_KEY,
                {expiresIn:"1800sec"}
            )
        :null;
    return {accesstoken: accessToken};    
}

//verifyAccess token
function verifyAccessToken(req,res,next){
    let authHeaders = req.headers["authorization"];
    let token = authHeaders && authHeaders.split(" ")[1];
    if(token==null) return res.sendStatus(401)
    else{
        jwt.verify(token,process.env.JWT_SECRET_KEY,(err,user)=>{
            console.log("t:",token);
            console.log("user",user);
            !user?
            res.status(401).send({error:"token expired"})
            :next();
        })    
    }
    
}

module.exports = {signupUser,loginUser,getUser,verifyAccessToken}
