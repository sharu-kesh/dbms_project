const express = require("express")
const cors=require("cors")
const app=express()
const path=require("path")
require('dotenv').config()
const pg = require("pg")
// const errorHandler= require("./utils.js")
let { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;

function errorHandler(statusCode, message) {
    const error = new Error();
    error.statusCode = statusCode;
    error.message = message;
    return error;
  }

const db=new pg.Client({
    user:PGUSER,
    host:PGHOST,
    database:PGDATABASE,
    password:PGPASSWORD,
    port:5432,
    ssl:{
        require:true
    }
})
db.connect()
app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use(express.json())
app.post("/user/login",async(req,res,next)=>{
    console.log(req.body)
    const {email,password}=req.body
    try{
        const response=await db.query("select * from users where email=$1",[email]);
        if(!response.rowCount){
            console.log("here")
            return next(errorHandler(404,"User not found"))
        }else{
            const validPwd = password === response.rows[0].password;
            if(!validPwd) return next(errorHandler(401,"Wrong credentials"))
            res.status(200).json({success:true})
        }
    }catch(error){
        console.log(error)
        next(error)
    }
})

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    return res.status(statusCode).json({
      success: false,
      message,
      statusCode,
    });
  });
app.listen(5000,()=>{
    console.log("port connected");
})