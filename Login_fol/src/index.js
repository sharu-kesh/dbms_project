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
app.post("/user/signup",async (req,res,next)=>{
    console.log(req.body)
    try{
        if(!req.body.fname || !req.body.lname || !req.body.phone || !req.body.dob || !req.body.address || !req.body.aadhar || !req.body.gender){
            return res.status(400).json({ error: "Missing required fields" });
        }
    const response = await db.query("INSERT INTO user_details(fname,lname,phone_no,dob,address,aadhar_no,gender) VALUES($1,$2,$3,$4,$5,$6,$7)"
    ,[req.body.fname,req.body.lname,req.body.phone,req.body.dob,req.body.address,req.body.aadhar,req.body.gender])
    }
    catch(err){
        console.error("Error occurred:", err);
        res.status(500).json({ error: "An internal server error occurred" });
    }
})
app.post("/user/signup",async (req,res,next)=>{
    console.log(req.body)
    try{
        if( !req.body.rno || !req.body.ftype || !req.body.cno || !req.body.vmake || !req.body.vmodel || req.body.rdate || !req.body.aadhar){
            return res.status(400).json({ error: "Missing required fields" });
        }
        const userResult = await db.query("SELECT user_id FROM user_details WHERE aadhar_no = $1", [req.body.aadhar]);
        const user_id = userResult.rows[0].user_id;
    const response = await db.query("INSERT INTO vehicle_details(user_id,registration_no,fuel_type,vin,vehicle_make,vehicle_model,registration_date) VALUES($1,$2,$3,$4,$5)"
    ,[user_id,req.body.rno,req.body.ftype,req.body.cno,req.body.vmake,req.body.vmodel,req.body.rdate])
    }
    catch(err){
        console.error("Error occurred:", err);
        res.status(500).json({ error: "An internal server error occurred" });
    }
})
app.post("/user/signup",async (req,res,next)=>{
    console.log(req.body)
    try{
        if(!req.body.lno){
            return res.status(400).json({ error: "Missing required fields" });
        }
    const licenceDate=new Date(req.body.dob);
    const yearsToAdd = Math.floor(Math.random() * 7) + 19;
    licenceDate.setFullYear(licenceDate.getFullYear()+yearsToAdd)
    const expire=new Date(licenceDate)
    expire.setFullYear(expire.getFullYear()+20);
    const response = await db.query("INSERT INTO licence(licence_no,issue_date,exp_date) VALUES($1,$2,$3)"
    ,[req.body.lno,licenceDate,expire])
    }
    catch(err){
        console.error("Error occurred:", err);
        res.status(500).json({ error: "An internal server error occurred" });
    }
})
app.post("/user/signup",async (req,res,next)=>{
    console.log(req.body)
    try{
        if(!req.body.pno || !req.body.vmake || !req.body.eno || !req.body.rdate){
            return res.status(400).json({ error: "Missing required fields" });
        }
    const issue=new Date(req.body.rdate)
    issue.setMonth(issue.getMonth()+2)
    const monthsToAdd=Math.floor(Math.random()*6)
    const expire=new Date(issue)
    expire.setMonth(expire.getMonth()+monthsToAdd)
    const diffInMonths=monthsToAdd
    const monthsString=convertMonthsToString(diffInMonths)
    const response = await db.query("INSERT INTO pollution_cer(pollution_cer_no,issue_date,validation,vehicle_make,engine_no) VALUES($1,$2,$3,$4,$5)"
    ,[req.body.pno,issue,monthsString,req.body.vmake,req.body.eno])

    function convertMonthsToString(months) {
        if (months === 1) {
          return '1 month';
        } else {
          return months + ' months';
        }
      }
    }
    catch(err){
        console.error("Error occurred:", err);
        res.status(500).json({ error: "An internal server error occurred" });
    }
})
app.post("/user/signup",async (req,res,next)=>{
    console.log(req.body)
    try{
        if(!req.body.ino || !req.body.isno || !req.body.vcover || !req.body.iprovider || !req.body.rdate){
            return res.status(400).json({ error: "Missing required fields" });
        }
        const issue=new Date(req.body.rdate)
        issue.setMonth(issue.getMonth()+2)
        const expire=new Date(issue)
        expire.setFullYear(expire.getFullYear()+10)
        const response = await db.query("INSERT INTO insurance(insurance_no,issue_date,exp_date,scheme_no,vehicle_coverage,ins_provider) VALUES($1,$2,$3,$4,$5,$6)"
    ,[req.body.ino,issue,expire,req.body.isno,req.body.vcover,req.body.iprovider])
    }
    catch(err){
        console.error("Error occurred:", err);
        res.status(500).json({ error: "An internal server error occurred" });
    }
})
app.post("/user/signup",async (req,res,next)=>{
    console.log(req.body)
    try{
        if(!req.body.lno || !req.body.ino || !req.body.pno || !req.body.aadhar){
            return res.status(400).json({ error: "Missing required fields" });
        }
        const userResult = await db.query("SELECT user_id FROM user_details WHERE aadhar_no = $1", [req.body.aadhar]);
        const user_id = userResult.rows[0].user_id;
    const response = await db.query("INSERT INTO documents(user_id,licence_no,insurance_no,pollution_cer_no) VALUES($1,$2,$3,$4)"
    ,[user_id,req.body.lno,req.body.ino,req.body.pno])
    }
    catch(err){
        console.error("Error occurred:", err);
        res.status(500).json({ error: "An internal server error occurred" });
    }
})
app.post("/user/signup",async (req,res,next)=>{
    try{
        if(!req.body.email || !req.body.password || !req.body.cpassword || !req.body.aadhar || !req.body.user_id){
            return res.status(400).json({ error: "Missing required fields" });
        }
        if (req.body.password !== req.body.cpassword) {
            return res.status(400).json({ error: "Password and confirm password do not match" });
        }
        const userResult = await db.query("SELECT user_id FROM user_details WHERE aadhar_no = $1", [req.body.aadhar]);
        const user_id = userResult.rows[0].user_id;
        const response = await db.query("INSERT INTO users(user_id,email,pass_word) VALUES($1,$2,$3)"
    ,[user_id,req.body.email,req.body.password])
    }
    catch(err){
        console.error("Error occurred:", err);
        res.status(500).json({ error: "An internal server error occurred" });
    }

})
app.post("/user/login",async(req,res,next)=>{
    console.log(req.body)
    const {email,password}=req.body
    try{
        const response=await db.query("select * from users where email=$1",[email]);
        if(!response.rowCount){
            console.log("here")
            return next(errorHandler(404,"User not found"))
        }else{
            const validPwd = password === response.rows[0].pass_word;
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