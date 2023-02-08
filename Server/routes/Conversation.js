import express from "express";
const router = express.Router()
import Conversation from "../models/Conversation.js"

//new conversation
router.post("/" , async ( req, res ) =>{
    const conversation = new Conversation({
        members: [ req.body.senderID,req.body.receiverID]
    })
    try{
        const saveMembers = await conversation.save()
        res.status(200).json(saveMembers)
    }catch(err){
        res.status(500).json(err)
    }
})

//get all conversation of a user where his/her id exists
router.get("/:id" , async ( req, res ) =>{
    try{
        const getMembers = await Conversation.find({members:{ $in: [req.params.id]}})
        res.status(200).json(getMembers)

    }catch(err){
        res.status(500).json(err)
    }
})

export default router
