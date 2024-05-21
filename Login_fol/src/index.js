const express = require("express")
const session = require("express-session")
const cors=require("cors")
const app=express()
const path=require("path")
require('dotenv').config()
const pg = require("pg")
const { log } = require("console")
const { CgLayoutGrid } = require("react-icons/cg")
const cookieParser = require("cookie-parser")
// const errorHandler= require("./utils.js")
let { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;
app.use(cookieParser())
app.use(
    session(
        {
            secret : "key",
            resave : true,
            saveUninitialized : true,
            sameSite: 'lax',
        }
    )
);

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
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true,
}))
app.use(express.json())
app.post("/user/signup1",async (req,res,next)=>{
    const {fname,lname,gender,phone,address,email,aadhar,dob} = req.body;
    if(!fname || !lname || !phone || !dob || !address || !aadhar || !gender){
        return next(errorHandler(423,"Please provide all credentials properly"))
    }
    try{
        req.session.user = {email :email}
        req.session.user.dob =   dob
    await db.query("INSERT INTO user_details(fname,lname,phone_no,dob,address,aadhar_no,gender) VALUES($1,$2,$3,$4,$5,$6,$7)"
    ,[fname,lname,phone,dob,address,aadhar,gender])
    u_id = (await db.query("Select user_id from user_details where aadhar_no=$1",[aadhar])).rows[0].user_id
    req.session.user.id = u_id
    console.log(req.session.user)
    res.status(200).json({success:true,message:"Values entered successfully"})

    }
    catch(err){
        console.log(err)
        next(err);
    }
})
app.post("/user/signup2",async (req,res,next)=>{
    const {rno,rdate,vmake,vmodel,cno,ftype,eno} = req.body;
    console.log(req.body)
    const userId = req.session.user.id
    try{
        if( !rno || !ftype || !cno || !vmake || !vmodel || !rdate || !eno){
            return next(errorHandler(423,"Please provide all credentials properly"))
        }
    req.session.user.rDate = rdate
    req.session.user.vMake = vmake
    req.session.user.cNo = cno
    req.session.user.eNo = eno
    await db.query("INSERT INTO vehicle_details(user_id,registration_no,fuel_type,vin,vehicle_make,vehicle_model,registration_date) VALUES($1,$2,$3,$4,$5,$6,$7    )"
    ,[userId,rno,ftype,cno,vmake,vmodel,rdate])
    res.status(200).json({success:true,message:"Values entered successfully"})
    }
    catch(err){
        next(err);
    }
})
app.post("/user/signup3",async (req,res,next)=>{
    const {lno,ino,isno,iprovider,pno} = req.body
    const userId = req.session.user.id
    const eno = req.session.user.eNo
    const vmake = req.session.user.vMake
    const rdate = req.session.user.rDate
    const dob = req.session.user.dob
    console.log(req.body)
    if(!lno || !pno || !vmake || !eno || !rdate || !ino || !isno  || !iprovider || !userId || !dob){
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
    const monthsString=convertMonthsToString(6)
    const iIssue=new Date(rdate)
    iIssue.setMonth(iIssue.getMonth()+2)
    const expiryDate=new Date(issue)
    expiryDate.setFullYear(expiryDate.getFullYear()+10)
    try{
        await db.query("INSERT INTO licence(licence_no,issue_date,exp_date) VALUES($1,$2,$3)"
        ,[lno,licenceDate,expire])
        await db.query("INSERT INTO pollution_cer(pollution_cer_no,issue_date,validation,vehicle_make,engine_no) VALUES($1,$2,$3,$4,$5)"
        ,[pno,issue,monthsString,vmake,eno])
        await db.query("INSERT INTO insurance(insurance_no,issue_date,exp_date,scheme_no,ins_provider) VALUES($1,$2,$3,$4,$5)"
    ,[ino,iIssue,expiryDate,isno,iprovider])
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
    const password = req.body.password;
    const email = req.session.user.email
    const userId = req.session.user.id
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
app.post("/user/complaint",async (req,res,next)=>{
    const {cname,gender,dob,address,mobile,mail,mdate,place,descr} = req.body;
    const userId = req.session.user.id
    console.log(req.body);
    if(!cname || !gender || !dob || !address || !mobile || !mobile || !mail || !mdate || !place || !descr){
        return next(errorHandler(423,"Please provide all credentials properly"))

    }
    try{
    try{
    try{
        try{
    try{
        
        const response1 = await db.query("select registration_no from vehicle_details where user_id = $1",[userId])
        var regNo = response1.rows[0].registration_no;
        var regPin = regNo.slice(0,4);

    
    }
    catch(err){
        next(err);
    }
    const response2 = await db.query("select station_id from admins where office_id = $1",[regPin])
    var stationId = response2.rows[0].station_id;
}
catch(error)
{
    console.log(error)
    next(error)
}
    const response3 =  await db.query(" insert into user_complaints(user_id,vehicle_no,vehicle_lost_place,vehicle_description,vehicle_lost_date) values($1,$2,$3,$4,$5);",[userId,regNo,place,descr,mdate])
    }
    catch(error)
    {
        console.log(error)
        next(error)
    }

    const response4 = await db.query("select complaint_id from user_complaints where user_id = $1;",[userId])
    var complaintId = response4.rows[0].complaint_id;
}
   catch(error)
   {
    console.log(error)
    next(error)
   }
   const response5 =  await db.query(" insert into police_complaints(complaint_id,station_id,vehicle_lost_date) values($1,$2,$3);",[complaintId,stationId,mdate])
    res.status(200).json({success:true,message:"Values entered successfully"})
}

catch(error)
{
    console.log(error)
    next(error)
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
            req.session.user = {id:response.rows[0].user_id};
            req.session.police = {regNo:null}
            console.log(req.session.user)
            res.status(200).json({success:true, data:response.rows[0].user_id})
        }
    }catch(error){
        console.log(error)
        next(error)
    }
})

app.get("/police/home",async(req,res,next)=>
    {
    var stationId =  req.session.police.id;
    console.log(stationId)
    try{
        const response = await db.query("select * from complaint_details where station_id = $1",[stationId])
        if(!response.rowCount){
            console.log("here")
            return next(errorHandler(404,"Details Not Fetched"))
        }else{
            console.log(response.rows)
            res.status(200).json({success:true, data:response.rows})
    }}
    catch(error)
    {
        console.log(error)
        next(error)
    }
    
})
app.get("/police/home/:id",async(req,res,next)=>
    {
    const id = req.params.id
    try{
        const response = await db.query("select * from complaint_details where complaint_id = $1",[id])
        if(!response.rowCount){
            console.log("here")
            return next(errorHandler(404,"Details Not Fetched"))
        }else{
            console.log(response.rows)
            res.status(200).json({success:true, data:response.rows[0]})
    }}
    catch(error)
    {
        console.log(error)
        next(error)
    }
    
})
app.post("/police/login",async(req,res,next)=>{
    console.log(req.body)
    const {stationId,policePassword}=req.body
    try{
        const response=await db.query("select * from police where station_id=$1",[stationId]);
        if(!response.rowCount){
            console.log("here")
            return next(errorHandler(404,"User not found"))
        }else{
            const validPwd = policePassword === response.rows[0].password;
            if(!validPwd) return next(errorHandler(401,"Wrong credentials"))
            req.session.police = {id:response.rows[0].station_id}
            req.session.user = {id:null}
            res.status(200).json({success:true, data:response.rows})
        }
    }catch(error){
        console.log(error)
        next(error)
    }
})
app.post("/rto/login",async(req,res,next)=>{
    console.log(req.body)
    const {rtoid,password}=req.body
    try{
        const response=await db.query("select * from admins where office_id=$1",[rtoid]);
        if(!response.rowCount){
            console.log("here")
            return next(errorHandler(404,"User not found"))
        }else{
            const validPwd = password === response.rows[0].password;
            if(!validPwd) return next(errorHandler(401,"Wrong credentials"))
            req.session.rto = {id:response.rows[0].office_id}
            req.session.user = {id:null}
            res.status(200).json({success:true, data:response.rows})
        }
    }catch(error){
        console.log(error)
        next(error)
    }
})

app.post("/police/complaint/update",async(req,res,next)=>{
    console.log(req.body)
    const complaintId = req.body.complaint_id;
    try{
       const response1 = await db.query("update user_complaints set vehicle_found_date = (select current_date) where complaint_id = $1",[complaintId])
       try{
        const response2 = await db.query("update police_complaints set vehicle_found_date = (select current_date) where complaint_id = $1",[complaintId])
     }
     catch(error){
         console.log(error)
         next(error)
     }
     res.status(200).json({success:true})
    }
    catch(error){
        console.log(error)
        next(error)
    }
})

app.get("/home/vehicle",async(req,res,next)=>{
    userId = req.session.user.id;
    const regNo = req.session.police.regNo; 
    try{  
        if(regNo)
            {
                try{
                    const response1 = await db.query("select user_id from vehicle_details where registration_no = $1",[regNo])
                    userId = response1.rows[0].user_id;
                }
                catch(error)
                {
                    console.log(error)
                    next(error)
                }
            }

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



app.get("/home/insurance",async(req,res,next)=>{
    userId = req.session.user.id; 
    const regNo = req.session.police.regNo; 
    try{  
        if(regNo)
            {
                try{
                    const response1 = await db.query("select user_id from vehicle_details where registration_no = $1",[regNo])
                    userId = response1.rows[0].user_id;
                }
                catch(error)
                {
                    console.log(error)
                    next(error)
                }
            }   

        console.log(userId)
        const response=await db.query("select insurance.insurance_no,issue_date,exp_date,scheme_no,ins_provider from insurance , documents where documents.user_id=$1 and documents.insurance_no=insurance.insurance_no",[userId]);

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

// app.get()
app.get("/home/pollution",async(req,res,next)=>{
    userId = req.session.user.id;
    const regNo = req.session.police.regNo; 
    try{  
        if(regNo)
            {
                try{
                    const response1 = await db.query("select user_id from vehicle_details where registration_no = $1",[regNo])
                    userId = response1.rows[0].user_id;
                }
                catch(error)
                {
                    console.log(error)
                    next(error)
                }
            }   
    console.log(userId)

        const response=await db.query("select pollution_cer.pollution_cer_no,pollution_cer.issue_date,validation,pollution_cer.vehicle_make,vehicle_model,engine_no from pollution_cer,documents,vehicle_details where documents.user_id=$1 and documents.pollution_cer_no=pollution_cer.pollution_cer_no and vehicle_details.user_id=$1",[userId]);
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

app.get("/home/licence",async(req,res,next)=>{
    userId = req.session.user.id;
    const regNo = req.session.police.regNo; 
    try{  
        if(regNo)
            {
                try{
                    const response1 = await db.query("select user_id from vehicle_details where registration_no = $1",[regNo])
                    userId = response1.rows[0].user_id;
                }
                catch(error)
                {
                    console.log(error)
                    next(error)
                }
            }   
        const response=await db.query("select licence.licence_no,issue_date,exp_date from licence,documents where documents.user_id=$1 and documents.licence_no=licence.licence_no",[userId]);
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

app.get("/home/owner",async(req,res,next)=>{
    userId = req.session.user.id;
    const regNo = req.session.police.regNo;
    try{
        
        if(regNo)
            {
                try{
                    const response1 = await db.query("select user_id from vehicle_details where registration_no = $1",[regNo])
                    userId = response1.rows[0].user_id;
                }
                catch(error)
                {
                    console.log(error)
                    next(error)
                }
            }
        const response=await db.query("select concat(concat(fname,' '),lname) fullName,phone_no,address,aadhar_no,gender,email from user_details,users where user_details.user_id=$1 and users.user_id=$1",[userId]);
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
app.get("/home/transfer/owner",async(req,res,next)=>{
    userId = req.session.user.id;
    try{
        const response=await db.query("select fname,lname,phone_no,address,dob,aadhar_no,gender,email,registration_no from user_details,users,vehicle_details where user_details.user_id=$1 and users.user_id=$1 and vehicle_details.user_id=$1",[userId]);
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

app.get("/home/transfer",async(req,res,next)=>{
    const userId = req.session.user.id;
    console.log("userID : ",userId)
    try {
        const response = await db.query("select * from transfer where user_id = $1;",[userId])
        if(response.rowCount)
            res.status(200).json({success:true})
        else
            res.status(200).json({success:false})
    } catch (error) {
        console.log(error)
        next(error)
    }
})

app.post("/home/transfer",async(req,res,next)=>{
    const value = req.body;
    let sellerId;
    let buyerId;
    const regNo = value.sregno;
    const chassisNo = value.chano;
    const userId = req.session.user.id;
    const soldDate = value.sdate;
    value.userId = userId;
    const valArr = Object.values(value);
    const sellerArr = valArr.slice(1,9);
    const buyerArr = valArr.slice(-11,-2);
    console.log(valArr);
    console.log(sellerArr)
    console.log(buyerArr)
    console.log(regNo)
    try{
        const response = await db.query("select substring(vin,13,5) as chassis from vehicle_details where registration_no = $1;",[regNo])
        const validChassis = (response.rows[0].chassis) === (chassisNo)
        if(!validChassis) return next(errorHandler(401,"Wrong  CHASSIS_NUMBER "))
        try{
        try{
            try{
                const response4 =await db.query("select phone_no from seller_details");
                console.log(response4.rows)
                let phoneArr = (response4.rows).map((item) => item.phone_no)
                 console.log(phoneArr)
                if((phoneArr.includes(sellerArr[4])))  return next(errorHandler(401,"already exists"))
            }
            catch(error)
            {
                console.log(error)
                next(error)
            }
                       
            const response2 = await db.query("insert into seller_details(fname,lname,dob,gender,phone_no,aadhar_no,email,address) values ($1,$2,$3,$4,$5,$6,$7,$8);",sellerArr);
        try{
            const response3 = await db.query("select seller_id from seller_details where phone_no = $1",[sellerArr[4]]);
            console.log(response3.rows)
            sellerId = response3.rows[0].seller_id;
        }
        catch(error)
        {
            console.log(error)
            next(error)
        }
        try{
            const response5 = await db.query("insert into buyer_details(fname,lname,dob,gender,phone_no,aadhar_no,email,address,licence_no) values ($1,$2,$3,$4,$5,$6,$7,$8,$9);",buyerArr); 
            try{
                const response6 = await db.query("select buyer_id from buyer_details where phone_no = $1",[buyerArr[4]]);
                console.log(response6.rows)
                buyerId = response6.rows[0].buyer_id;
            }
            catch(error)
            {
                console.log(error)
                next(error)
            }
        }
        catch(error)
        {
            console.log(error)
            next(error)
        }
        }
        catch(error)
        {
            console.log(error)
            next(error)
        }
        const response1 = await db.query("INSERT INTO transfer(seller_id,buyer_id,vehicle_no,chassis_no,sold_date,user_id) values($1,$2,$3,$4,$5,$6);",[sellerId,buyerId,regNo,chassisNo,soldDate,valArr[valArr.length-1]])
        res.status(200).json({success:true})
        }
        catch(error){
            console.log(error)
            next(error)
        }
    }
    catch(error){
        console.log(error)
        next(error)
    }
})

app.post("/police/login/vehicle",async(req,res,next)=>{
    try{
        console.log(req.body)
        const regNo = req.body.regno
        const response = await db.query("select registration_no from vehicle_details;")
        let regisArr = (response.rows).map((item) => item.registration_no)
        console.log(regisArr)
        if(!(regisArr.includes(regNo)))
            return next(errorHandler(401,"Wrong credentials"))
            req.session.police.regNo = regNo;
            console.log(req.session.police)
            res.status(200).json({success:true})

    }
    catch(error)
    {
        console.log(error)
        next(error)
    }
})
app.post("/rto/login/vehicle",async(req,res,next)=>{
    try{
        console.log(req.body)
        const regNo = req.body.regno
        const response = await db.query("select registration_no from vehicle_details;")
        let regisArr = (response.rows).map((item) => item.registration_no)
        console.log(regisArr)
        if(!(regisArr.includes(regNo)))
            return next(errorHandler(401,"Wrong credentials"))
            req.session.police.regNo = regNo;
            console.log(req.session.police)
            res.status(200).json({success:true})

    }
    catch(error)
    {
        console.log(error)
        next(error)
    }
})

app.post("/user/login/update",async(req,res,next)=>{
    console.log(req.body)
    console.log(req.session)
    userId = req.session.user.id;
    
    const {oldPhoneNo,oldEmail,newEmail,newPhoneNo,address}=req.body
    try{
        const response=await db.query("select u.email,ud.phone_no from users u,user_details ud where u.user_id=$1 and ud.user_id = $1",[userId]);
        if(!response.rowCount){
            console.log("here")
            return next(errorHandler(404,"User not found"))
        }else{
            const validEmail = oldEmail === response.rows[0].email;
            const validPhoneNo = oldPhoneNo === response.rows[0].phone_no;
            if(validEmail)
                {
                if(validPhoneNo)
                {
                    try{
                        const response1 = await db.query("update users set email = $2 where user_id=$1",[userId,newEmail]);
                    }
                    catch(error)
                    {
                        console.log(error)
                        next(error)
                    }
                    try{
                        const response2 = await db.query("update user_details set phone_no = $2 , address = $3 where user_id = $1",[userId,newPhoneNo,address])
                    }
                    catch(error){
                        console.log(error)
                        next(error)
                    }
                }
                else{
                    return next(errorHandler(401,"Enter correct phone number"))
                }}
                else{
                    return next(errorHandler(401,"Enter correct email"))
                }
            }
            res.status(200).json({success:true})
        }
    catch(error){
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