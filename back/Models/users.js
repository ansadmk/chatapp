const mongoose=require('mongoose')
const user=mongoose.Schema({
    name:String,
    password:String,
    gmail:String,
})
module.exports=mongoose.model('user',user)