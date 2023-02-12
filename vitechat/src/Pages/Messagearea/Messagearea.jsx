import { Close } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import "./Messagearea.css"
import { useNavigate } from "react-router-dom"
import Footer from '../../Components/Footer/Footer'
import { axiosInstance } from '../../baseUrl/BaseUrl'
import { io } from "socket.io-client";
import Footer from "../../Components/Footer/Footer"
function Messagearea() {
  const navigate = useNavigate()
 let image="https://images.unsplash.com/photo-1535207010348-71e47296838a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29vbCUyMHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
 const userId = "63e3aeac84e26cedb39862c4"
  const [ conversation , setConversation ] = useState([])
  const [ friendData, setFriendData ] = useState([])
  const [ message, setMessage ] = useState([])
  const [ sockets, setSockets ] = useState(null)
  const [ newMessage, setNewMessage] = useState("")
  const [ arrivalMessage, setArrivalMessage] = useState(null)

  

  useEffect(()=>{
    setSockets(io("ws://localhost:8900"))
  }, [])

  useEffect(()=>{
    // send userId to server userID
    sockets?.emit("addUser",userId )

    //take socketId and userId from server
    sockets?.on("getUsers",(users)=>{
      console.log(users)
    } )

  }, [userId])


  //fetch conversation in which logged in account is
  useEffect(() => {
    const getConversations = async () => {
      try {
        const res = await axiosInstance.get("/Conversation/" + userId);
        setConversation(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getConversations();
  }, [userId]);



  //fetch message in which logged in account is
  useEffect(() => {
  let ids = conversation?.map(id=> id._id)
for(let id of ids){
    const getMessage = async () => {
      try {
        const res = await axiosInstance.get("/Messages/" + id);
        setMessage(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMessage();
  }
  }, []);
  
  let ownMessage = message.map(item => item.sender === userId)
  // //fetch friendsData
  useEffect(()=>{

    //filter my id only get friends ID
    const fetchFriendData = async () =>{
      let friendID = conversation.map(item => item.members.find(m=>m !== userId))

      //loop
      for(let id of friendID){
      try{
        const resp = await axiosInstance.get(`/Users/getusers?userId=${id}`)
        setFriendData([resp.data])
      }catch(err){}
    }
   }
    fetchFriendData()

  },[conversation])

  //lets get receiverID
  const receiverID = conversation.map((item) => item?.members.find(member => member !== userId)) 

  //hendleSubmit
  const handleSubmit = ()=>{
    sockets?.emit("sendMessage" , {
      senderId: userId,
      receiverID,
      text: newMessage
    })
  }

  //update message using sockets
  useEffect(()=>{
    sockets.on("getMessage" , data =>{
      setArrivalMessage({
        //destructure data because their names are different from mongodb
        senderId: data.senderId,
        text: data.text,
        createdAt: Date.now()
      })
    })
  },[])

   //update message using sockets
   useEffect(()=>{
    arrivalMessage && conversation.map((item) => item.members.includes(arrivalMessage.senderId)) &&
    setMessage( (prev) => [...prev, arrivalMessage])
  },[arrivalMessage , conversation])

let names = friendData.map((item)=>item?.name ).reverse()
  return (
    <div className='Messagearea'>
      <div className='footer_contain'>
        <Footer/>
      </div>
      
      <div className='Messagearea_container'>

        <div className='Messagearea_nav'>
          <img src={image} className="profile_images" alt="image" />
          <div className='Messagearea_names'>
            <h1>{names}</h1>
            <p>last seen 11:03pm</p>
          </div>
      <Close className='close' onClick={()=>{
        navigate("/")
      }}/>

        </div>

    <div className='margintop'>
          {message?.map((item,i) =>(
          <div className='receiver_message_chat_layout' key={i}>
              <p>
                {item?.text}
              </p>
            </div>)) }

          {message?.map((items,i) =>( 
          <div className='sender_message_chat_layout' key={i}>
              <p>
                {items?.text}
              </p>
            </div>))}
        </div>
      </div> 
      <Footer newMessage={newMessage} handleSubmit={handleSubmit}/>
    </div>
  )
}

export default Messagearea
