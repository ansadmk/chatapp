const { GoogleGenerativeAI } = require("@google/generative-ai");
const users = require("../Models/users")
const bcrypt = require("bcrypt")
const validator = require("email-validator");
const messages = require("../Models/messages");
const jwt=require('jsonwebtoken')
module.exports={
    register:async (req,res)=>{
        const {username,password,email}=req.body
        console.log(req.body);
        const saltRounds=10
        const salt = await bcrypt.genSalt(saltRounds);
        
           await users.create({
             password: await bcrypt.hash(password,salt),
              name:username,
              email:email
           })
           res.json({
            status:"success",
            
           })
       
    },
    anonymousRegister:async (req,res)=>{
        const {username}=req.body   
        const userDetail=await users.findOne({name:username})

        if (!userDetail) {

// // Access your API key as an environment variable (see "Set up your API key" above)
// const genAI = new GoogleGenerativeAI(process.env.API_KEY);

// async function run() {
//   // For text-only input, use the gemini-pro model
//   const model = genAI.getGenerativeModel({ model: "gemini-pro"});

//   const prompt = "Write a story about a magic backpack."

//   const result = await model.generateContent(prompt);
//   const response = await result.response;
//   const text = response.text();
//   console.log(text);
// }
// run();


            const user= await users.create({
                name:username
            })
            const token= jwt.sign({id:user._id},process.env.SECRET_TOKEN)
            console.log(token);    
            res.cookie('authcookie',token)
            res.json({
             status:"success",
             jwt:token 
            })
        } else{
            res.json({
                status:"failure",
                 
               })
        }
       
    },
    login:async (req,res)=>{
        const {password,email}=req.body
        
        const userDetail=await users.findOne({email:email})
        const verified=await bcrypt.compare(password,userDetail.password)
        console.log(verified);
       if (verified) {
          const token= jwt.sign({id:userDetail._id},process.env.SECRET_TOKEN)
          res.cookie('authcookie',token)
           res.json({
            status:"success",
            jwt:token
           })


       }else{
        res.json({
            status:"failure",
            message:"email does not exist"
           })
       }
    }

}