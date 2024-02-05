const express=require("express");
const cors=require("cors");
const client = require("./db");

const app=express();

app.use(cors());
app.use(express.json());

app.post("/signin",async function(req,res){
    const userId=req.body.userId;
    const password=req.body.password;


    try {
        const user=await client.query(`SELECT * FROM members WHERE userId='${userId}' AND password='${password}'`);
        if(!user.rowCount){
            return res.status(401).json({message:"Invalid credentials"});
        }else{
            return res.status(200).json({message:"Success",role:user.rows[0].role});
        }
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
})

app.get("/users",async function(req,res){
    const userId=req.query.userId;

    try {
        const user=await client.query(`SELECT * FROM members WHERE userid='${userId}'`);
        const role=user.rows[0].role;

        if(role==="basic"){
            return res.status(200).json(user.rows);
        }
        else{
            const users=await client.query("SELECT * FROM members");
            return res.status(200).json(users.rows);
        }
    } catch (error) {
        return res.status(501).json({message:error.message});
    }
})


app.listen(3000);
