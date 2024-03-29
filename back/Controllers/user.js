const users = require("../Models/users")

module.exports={
    profile:async (req,res)=>{
        const user=await users.findOne({_id:res.token})
        if (user) {
            res.json({
                Status:'success',
                data:user
            })
        }else{
            res.json({
                Status:'failed',
                data:"user not found"
            }) 
        }
    }
}