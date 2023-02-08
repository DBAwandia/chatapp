import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"
import conversationRouter from "./routes/Conversation.js"
import messageRouter from "./routes/Messages.js"
import userRouter from "./routes/Users.js"



const app = express()
app.use(cors())
app.use(express.json())
dotenv.config()

const PORT = process.env.PORT || 5000

mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URL , {useNewUrlParser: true})
const db = mongoose.connection
db.on("error" , ()=> console.log("Error"))
db.once("open", ()=>console.log("Conected to mongodb"))


app.use("/api/Conversation" , conversationRouter)
app.use("/api/Messages" , messageRouter)
app.use("/api/Users" , userRouter)



app.listen(`${PORT}` , ()=>console.log("Server working"))