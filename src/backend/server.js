const express=require('express');
const mysql=require('mysql');
const cors=require('cors');

const app=express();

app.use(cors());
const db=mysql(
    {
        host:"local",
        user:"root",
        password:"",
        database:"logindb"
    }
)

app.post('./login',(req,res)=>{
    const sql="SELECT * FROM logintable WHERE username=? AND password=?"
    const values=[
        req.body.user,
        req.body.password
    ]
    db.query(sql,[values],(err,data)=>{
        if(err) return res.json("Login Failed");
        return res.json(data);
    })
})

app.listen(8081,()=>{
    console.log("Listening...");
})