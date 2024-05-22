const mongoose = require('mongoose')

const User = mongoose.model('User',{
    username:String,
    email:String,
    name:String,
    profileImage:String,
    bio:String
  
  })

  module.exports=User;