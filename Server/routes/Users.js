import express from "express";
const router = express.Router()
import Users from "../models/Users.js"

//new conversation
router.post("/" , async ( req, res ) =>{
    const { name, email, password } = req.body
    const savedUsers = Users({name, email, password})
    try{
        const saveUser = await savedUsers.save()
        res.status(200).json(saveUser)
    }catch(err){
        res.status(500).json(err)
    }
})

//get conversations with userid in
router.get("/getusers" , async ( req, res ) =>{
    const userId = req.query.userId
    try{
        const getUser = await Users.findById(userId)
        res.status(200).json(getUser)
    }catch(err){
        res.status(500).json(err)
    }
})
export default router