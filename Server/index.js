import { createServer } from "http";
import express from "express"
import cors from "cors"
import { Server } from "socket.io";
const httpServer = createServer();
const app = express()
app.use(cors())
app.use(express.json())

const io = new Server(httpServer, {
    // options
  });
  
  io.on("connection", (socket) => {
    // ...
  });
  
  httpServer.listen(3000,()=>console.log("socket connected"));