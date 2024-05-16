const express = require("express")
const cors=require("cors")
const app=express()
const path=require("path")
require('dotenv').config()
const pg = require("pg")
const { log } = require("console")
// const errorHandler= require("./utils.js")
let { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;

function errorHandler(statusCode, message) {
    const error = new Error();
    error.statusCode = statusCode;
    error.message = message;
    return error;
  }

  function convertMonthsToString(months) {
    if (months === 1) {
      return '1 month';
    } else {
      return months + ' months';
    }
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
let u_id;
db.connect()
app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use(express.json())
app.post("/user/signup1",async (req,res,next)=>{
    const {fname,lname,gender,phone,address,email,aadhar,dob} = req.body;
    if(!fname || !lname || !phone || !dob || !address || !aadhar || !gender){
        return next(errorHandler(423,"Please provide all credentials properly"))
    }
    try{
    await db.query("INSERT INTO user_details(fname,lname,phone_no,dob,address,aadhar_no,gender) VALUES($1,$2,$3,$4,$5,$6,$7)"
    ,[fname,lname,phone,dob,address,aadhar,gender])
    u_id = (await db.query("Select user_id from user_details where aadhar_no=$1",[aadhar])).rows[0].user_id
    res.status(200).json({success:true,u_id,message:"Values entered successfully"})
    }
    catch(err){
        next(err);
    }
})
app.post("/user/signup2",async (req,res,next)=>{
    const {rno,rdate,vmake,vmodel,cno,ftype,userId} = req.body;
    try{
        if( !rno || !ftype || !cno || !vmake || !vmodel || !rdate){
            return next(errorHandler(423,"Please provide all credentials properly"))
        }
    await db.query("INSERT INTO vehicle_details(user_id,registration_no,fuel_type,vin,vehicle_make,vehicle_model,registration_date) VALUES($1,$2,$3,$4,$5,$6,$7    )"
    ,[userId,rno,ftype,cno,vmake,vmodel,rdate])
    res.status(200).json({success:true,message:"Values entered successfully"})
    }
    catch(err){
        next(err);
    }
})
app.post("/user/signup3",async (req,res,next)=>{
    const {lno,ino,isno,vcover,iprovider,pno,eno,vmake,rdate,userId,dob} = req.body
    console.log(req.body)
    if(!lno || !pno || !vmake || !eno || !rdate || !ino || !isno || !vcover || !iprovider || !userId || !dob){
        return next(errorHandler(423,"Please provide all credentials properly"))
    }
    const licenceDate=new Date(dob);
    const yearsToAdd = Math.floor(Math.random() * 7) + 19;
    licenceDate.setFullYear(licenceDate.getFullYear()+yearsToAdd)
    const expire=new Date(licenceDate)
    expire.setFullYear(expire.getFullYear()+20);
    const issue=new Date(rdate)
    issue.setMonth(issue.getMonth()+2)
    const monthsToAdd=Math.floor(Math.random()*6)
    const expiry=new Date(issue)
    expiry.setMonth(expiry.getMonth()+monthsToAdd)
    const diffInMonths=monthsToAdd
    const monthsString=convertMonthsToString(diffInMonths)
    const iIssue=new Date(rdate)
    iIssue.setMonth(iIssue.getMonth()+2)
    const expiryDate=new Date(issue)
    expiryDate.setFullYear(expiryDate.getFullYear()+10)
    try{
        await db.query("INSERT INTO licence(licence_no,issue_date,exp_date) VALUES($1,$2,$3)"
        ,[lno,licenceDate,expire])
        await db.query("INSERT INTO pollution_cer(pollution_cer_no,issue_date,validation,vehicle_make,engine_no) VALUES($1,$2,$3,$4,$5)"
        ,[pno,issue,monthsString,vmake,eno])
        await db.query("INSERT INTO insurance(insurance_no,issue_date,exp_date,scheme_no,vehicle_coverage,ins_provider) VALUES($1,$2,$3,$4,$5,$6)"
    ,[ino,iIssue,expiryDate,isno,vcover,iprovider])
        res.status(200).json({success:true,message:"All values inserted successfully"})
        await db.query("INSERT INTO documents(user_id,licence_no,insurance_no,pollution_cer_no) VALUES($1,$2,$3,$4)"
    ,[userId,lno,ino,pno])
    res.status(200).json({success:true,message:"Values entered successfully"})
    }
    catch(err){
        next(err);
    }
})


app.post("/user/signup4",async (req,res,next)=>{
    const {email,userId,password} = req.body;
    console.log(req.body);
    if(!email || !password || !userId ){
        return next(errorHandler(423,"Please provide all credentials properly"))
    }
    
    try{
        const response = await db.query("INSERT INTO users(user_id,email,pass_word) VALUES($1,$2,$3)"
    ,[userId,email,password])
    res.status(200).json({success:true,message:"Values entered successfully"})
    }
    catch(err){
        next(err);
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
                console.log("wtf")
            res.status(200).json({success:true, data:response.rows[0].user_id})
        }
    }catch(error){
        console.log(error)
        next(error)
    }
})

app.get("/home/vehicle/:id",async(req,res,next)=>{
    userId = req.params.id;
    try{
        const response=await db.query("select * from vehicle_details where user_id=$1",[userId]);
        if(!response.rowCount){
            console.log("here")
            return next(errorHandler(404,"User not found"))
        }else{
            res.status(200).json({success:true,data:response.rows[0]})
        }
    }catch(error){
        console.log(error)
        next(error)
    }
})

app.get("/home/vehicle/:id",async(req,res,next)=>{
    userId = req.params.id;
    try{
        const response=await db.query("select * from vehicle_details where user_id=$1",[userId]);
        if(!response.rowCount){
            console.log("here")
            return next(errorHandler(404,"User not found"))
        }else{
            res.status(200).json({success:true,data:response.rows[0]})
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