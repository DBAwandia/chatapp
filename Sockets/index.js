import  { Server }  from "socket.io";
const io = new Server({
    cors:{
        origin: "http://localhost:5173"
    }
})

io.on("connection", (socket) => {
    console.log("a user connected")
    io.emit("welcome", "working")
  });

  io.listen(8900);