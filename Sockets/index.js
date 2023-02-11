import  { Server }  from "socket.io";
const io = new Server({
    cors:{
        origin: "http://localhost:5173"
    }
})

//push scocket id and useriD which which are accessing from client
let users = []
//connected user
const addUser = ( userID , socketId ) =>{
    //if userID alredy existed dont push
    !users.some(user => user.userID === userID) && 
    users.push({userID , socketId })
}

//disconnected user
const removeUser = (socketId) =>{
    users = users.filter(user => user.socketId !== socketId)
}

io.on("connection", (socket) => {
    //get userID from client
    console.log("Connected")
    socket.on("addUser" , (userID)=>{
        addUser(userID,socket.id)
        // send socketId and userID to client
        io.emit("getUsers" , users)
    })
    socket.on("disconnect" , ()=>{
        console.log("disconnected")
        removeUser(socket.id)
        io.emit("getUsers" , users)
    })

  });

  io.listen(8900);