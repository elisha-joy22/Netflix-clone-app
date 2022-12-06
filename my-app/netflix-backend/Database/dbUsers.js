require("dotenv").config();
const {getdb} = require("./db");
const objectId = require("mongodb").ObjectId;
const bcrypt = require("bcrypt");

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
                        result?
                        "Login success"
                        :"Incorrect username or password"
                    )
                    reject("Server error during login in loginUser")
                })
        })
            
    })
    return loginPromise;
}

module.exports = {signupUser,loginUser,getUser}
