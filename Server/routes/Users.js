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
router.get("/:id" , async ( req, res ) =>{
    try{
        const getUser = await Users.findById(req.params.id)
        res.status(200).json(getUser)
    }catch(err){
        res.status(500).json(err)
    }
})
export default router