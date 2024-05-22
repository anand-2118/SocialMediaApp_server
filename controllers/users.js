const User = require('../models/User')

const fetchUsers = async(req,res)=>{
    try{
        const users =  await User.find()
        res.json({
            status:'success',
            data: users
        })
    }
    catch(error){
        res.json({
            status:'failed',
            message:'something went wrong'
        })
    }
}

const createUser = async(req,res)=>{
    try{
        const {username,email,name,profileImage,bio} = req.body
        await User.create({username,email,name,profileImage,bio} )
        res.json({
            status:'success',
            message : "user created successfully"
        })
    }
    catch(error){
        res.json({
            status:'failed',
            message:'something went wrong'
        })
    }
}

const updateUser = async(req,res)=>{
    try{
        const {id} = req.params
        const {username,email,name,profileImage,bio} = req.body
        await User.findByIdAndUpdate(id,{username,email,name,profileImage,bio} )

        res.json({
            status:'success',
            message : "user updated successfully"
        })
    }
    catch(error){
        res.json({
            status:'failed',
            message:'something went wrong'
        })
    }
}

const deleteUser = async(req,res)=>{
    try{
        const {id} = req.params
        await User.findByIdAndDelete(id )

        res.json({
            status:'success',
            message : "user deleted successfully"
        })
    }
    catch(error){
        res.json({
            status:'failed',
            message:'something went wrong'
        })
    }
}

module.exports = {
    fetchUsers,
    createUser,
    updateUser,
    deleteUser
}