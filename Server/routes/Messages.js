import express from "express";
const router = express.Router()
import Messages from "../models/Messages.js";

//new message
router.post("/" , async ( req, res ) =>{
   const { conversationID,sender,text } = req.body
   const saveMessage = Messages({conversationID, sender,text})
    try{
        const saveMessages = await saveMessage.save()
        res.status(200).json(saveMessages)
    }catch(err){
        res.status(500).json(err)
    }
})

//get conversation of a user
router.get("/:id" , async ( req, res ) =>{
    try{
        const messages = await Messages.find({
            conversationID: req.params.id
        })
        res.status(200).json(messages)

    }catch(err){
        res.status(500).json(err)
    }
})

export default router