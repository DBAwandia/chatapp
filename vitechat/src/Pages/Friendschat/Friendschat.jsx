import React, { useEffect, useState } from 'react'
import "./Friendschat.css"
import { DoneAll, RestorePageOutlined, Search } from "@mui/icons-material"
import { useNavigate } from "react-router-dom"
import { axiosInstance } from "../../baseUrl/BaseUrl"
import moment from 'moment';

function Friendschat() {
  const navigate = useNavigate()
  const emptyPhoto = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEXk5ueutLeqsbTn6eqpr7PJzc/j5ebf4eLZ3N2wtrnBxsjN0NLGysy6v8HT1tissra8wMNxTKO9AAAFDklEQVR4nO2d3XqDIAxAlfivoO//tEOZWzvbVTEpic252W3PF0gAIcsyRVEURVEURVEURVEURVEURVEURVEURVEURVEURflgAFL/AirAqzXO9R7XNBVcy9TbuMHmxjN6lr92cNVVLKEurVfK/zCORVvW8iUBnC02dj+Wpu0z0Y6QlaN5phcwZqjkOkK5HZyPAjkIjSO4fIdfcOwFKkJlX4zPu7Ha1tIcwR3wWxyFhRG6g4Je0YpSPDJCV8a2Sv2zd1O1x/2WMDZCwljH+clRrHfWCLGK8REMiql//2si5+DKWKcWeAGcFMzzNrXC/0TUwQ2s6+LhlcwjTMlYsUIQzPOCb7YBiyHopyLXIEKPEkI/TgeuiidK/R9FniUDOjRDpvm0RhqjMyyXNjDhCfIMYl1gGjIMIuYsnGEYRMRZOMMunaLVwpWRW008v6fYKDIzxCwVAeNSO90BJW6emelYBRF/kHpYGVaoxTDAaxOFsfP9y8hpJ4xd7gOcij7JNGQ1EYFgkPJa1jQEiYZXRaRINKxSDUW9n+FT82lSKadkiru9/4XPqSLWOekGPoY05TAvLm9orm+YWuwHoBHkZKijNBJGmeb61eL6Ff/6q7bLr7yvv3vKGhpDRjvgjGaPz+gUg6YgcvpyAR2FIZ9U6nEEyZRTovmEU32KichpGn7C17XrfyH9gK/c0CMP05HZIM2uf9sEveizKveBy9/6Qt7o89ne33D525cfcIMW6ab+TMEukQbQbu+xu7X3A9bChmWaCeAkG17bpntwXgWxHaMzGPmUaR5dQZiKqRVeUZ3047fi3nAu28h4CHxCsZAgmEH8Y27jJAhm8c+5RQzRQNVGhVFSfxOYIjp/pP7RxzjevYXVGf4eLt+BJ1vCuLuLkrgABgCGXZ2wik5uty+oBvNirI6mkzhAf4Gsb58Hcm67Jzd+KwD10BYPLL3e0MjvKrgAULnOfveF/O4N2Xb9BZom3gJes3F9X5Zze8/6Yt09b4CrqsEjUv8oFBaR2rl+6CZr2xVrp24o/WitBKuGrrpl1+bFkmK2qXTON4VpbdfLa7o7y/WdLxG7lm2Lqh2clOwTegbvc/vj2U78CwhA87Bn8G5Nk3eOb0Nsr9flz3sG78UUtue4kpv1xvjg3TMay62BMlTlP+vrOMnJsRmt/ze0jsfkPPYdAH57hK+34PeOyc8XIXu5xT2HsUkdZz+adwg8HGFfQ3K5jtDvbUiO4Di9/ywHGrL88pDizZ++oTp+an+SMX/ndymUCwmHMdO7yuOx83pUx/eEMU0AvxWndwgidAqOZ8ypCwdEfvvEo6D9HwpA8wzvmOJEqAg9ySu8g4x0Hb9hSB/BANEKJ+LbPBU0lzbAJs4xt1AoshKkUGQmiH8/jJ0gdhTTLmSegHlPE0oOdXALnqDjKYh3px//fSgSWG8UqfrrIICzYYSJXRr9BSPbpNzw7gBjKjKOYI7ReIGqQRIap5+5MdjyvuDkExvGeXSlONWZAP3/AZBwJohU7QJRGU+cTVH18ELmRPNBmibW6MT/k1b0XhdkRBvyT6SB6EYv/GvhSmRNpGngRULsAlxMCGNXp7w3FfdEbTEEDdLI9TdIKRUzUesa3I461ER8cpNT7gMRhpKmYVS9ELOgCUQsa4SsulciKiLbY+AnHD8cpuhISsnxpamI84sbDq9qYJgf8wiiOBrC7Ml7M7ZECCqKoiiKoiiKoiiKoijv5AvJxlZRyNWWLwAAAABJRU5ErkJggg=="

  const userId = "63e3aeac84e26cedb39862c4"
  const [ conversation , setConversation ] = useState([])
  const [ friendData, setFriendData ] = useState([])


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

let names = friendData.map((item)=>item?.name ).reverse()
  
  const data = [
    {
      id: 1,
      image:"https://images.unsplash.com/photo-1535207010348-71e47296838a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29vbCUyMHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      name: "Mike",
      message: "Hi ,how are you",
      date: "Thursday",
      time: "Thur, 12:03pm"
    },
    {
      id: 2,
      image:"https://images.unsplash.com/photo-1542596594-649edbc13630?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y29vbCUyMHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      name: "Ken",
      message: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without",
      date: "Friday",
      time: "Wed, 10:33pm"
    },
    {
      image:"https://images.unsplash.com/photo-1576828831022-ca41d3905fb7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNvb2wlMjBwZXJzb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      name: "Sarah",
      message: "Hi ,how are you doing",
      id: 3,
      date: "Thursday",
      time: "Thur, 12:03pm"
    },
    {
      image:"https://images.unsplash.com/photo-1592854899481-f78db4baccb6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y29vbCUyMHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      name: "Wadda",
      message: "Hi ,how are you",
      id: 4,
      date: "Thursday",
      time: "Thur, 12:03pm"
    },
    {
      image:"https://images.unsplash.com/photo-1535207010348-71e47296838a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29vbCUyMHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      name: "Wandia",
      message: "Hi ,how are you",
      id: 5,
      date: "Thursday",
      time: "Thur, 12:03pm"
    },
    {
      image:"https://images.unsplash.com/photo-1535207010348-71e47296838a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29vbCUyMHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      name: "Xcrx",
      message: "Hi ,how are you",
      id: 6,
      date: "Thursday",
      time: "Thur, 12:03pm"
    },
    {
      image:"https://images.unsplash.com/photo-1535207010348-71e47296838a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29vbCUyMHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      name: "Xcrx",
      message: "Hi ,how are you",
      id: 7,
      date: "Thursday",
      time: "Thur, 12:03pm"
    },
    {
      image:"https://images.unsplash.com/photo-1535207010348-71e47296838a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29vbCUyMHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      name: "Xcrx",
      message: "Hi ,how are you",
      id: 8,
      date: "Thursday",
      time: "Thur, 12:03pm"
    },
    {
      image:"https://images.unsplash.com/photo-1535207010348-71e47296838a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29vbCUyMHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      name: "Xcrx",
      message: "Hi ,how are you",
      id: 9,
      date: "Thursday",
      time: "Thur, 12:03pm"
    },
    {
      image:"https://images.unsplash.com/photo-1535207010348-71e47296838a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29vbCUyMHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      name: "Xcrx",
      message: "Hi ,how are you",
      id: 10,
      date: "Thursday",
      time: "Thur, 12:03pm"
    },
    {
      image:"https://images.unsplash.com/photo-1535207010348-71e47296838a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29vbCUyMHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      name: "Xcrx",
      message: "Hi ,how are you",
      id: 11,
      date: "Thursday",
      time: "Thur, 12:03pm"
    },
    {
      image:"https://images.unsplash.com/photo-1535207010348-71e47296838a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29vbCUyMHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      name: "Xcrx",
      message: "Hi ,how are you",
      id: 12,
      date: "Thursday",
      time: "Thur, 12:03pm"
    },
    {
      image:"https://images.unsplash.com/photo-1535207010348-71e47296838a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29vbCUyMHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      name: "Xcrx",
      message: "Hi ,how are you",
      id: 13,
      date: "Thursday",
      time: "Thur, 12:03pm"
    },
    {
      image:"https://images.unsplash.com/photo-1535207010348-71e47296838a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29vbCUyMHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      name: "Xcrx",
      message: "Hi ,how are you",
      id: 14,
      date: "Thursday",
      time: "Thur, 12:03pm"
    },
    {
      image:"https://images.unsplash.com/photo-1535207010348-71e47296838a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29vbCUyMHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      name: "Xcrx",
      message: "Hi ,how are you",
      id: 15,
      date: "Thursday",
      time: "Thur, 12:03pm"
    },
    {
      image:"https://images.unsplash.com/photo-1535207010348-71e47296838a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29vbCUyMHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      name: "Xcrx",
      message: "Hi ,how are you",
      id: 16,
      date: "Thursday",
      time: "Thur, 12:03pm"
    },
    {
      image:"https://images.unsplash.com/photo-1535207010348-71e47296838a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29vbCUyMHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      name: "Xcrx",
      message: "Hi ,how are you",
      id: 17,
      date: "Thursday",
      time: "Thur, 12:03pm"
    },
    {
      image:"https://images.unsplash.com/photo-1535207010348-71e47296838a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29vbCUyMHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      name: "Xcrx",
      message: "Hi ,how are you",
      id: 18,
      date: "Thursday",
      time: "Thur, 12:03pm"
    },
    {
      image:"https://images.unsplash.com/photo-1535207010348-71e47296838a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29vbCUyMHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      name: "Xcrx",
      message: "Hi ,how are you",
      id: 19,
      date: "Thursday",
      time: "Thur, 12:03pm"
    },
    {
      image:"https://images.unsplash.com/photo-1535207010348-71e47296838a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29vbCUyMHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      name: "Xcrx",
      message: "Hi ,how are you",
      id: 20,
      date: "Thursday",
      time: "Thur, 12:03pm"
    },
    {
      image:"https://images.unsplash.com/photo-1535207010348-71e47296838a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29vbCUyMHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      name: "Xcrx",
      message: "Hi ,how are you",
      id: 21,
      date: "Thursday",
      time: "Thur, 12:03pm"
    },
    {
      image:"https://images.unsplash.com/photo-1535207010348-71e47296838a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29vbCUyMHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      name: "Xcrx",
      message: "Hi ,how are you",
      id: 22,
      date: "Thursday",
      time: "Thur, 12:03pm"
    }
  ]
  // const desc = data.map(item => item.message)
  // const descLength = desc.length
  // console.log(descLength,desc)
  return (
    <div className='Friendschat'>
    <div className='Friendschat_container'>
      <div className='search'>
        <Search className='searchs'/>
        <input type='search' className='search_input' placeholder='Search or start new chat' />
      </div>

     { conversation?.map((item) =>{
     return <div className='chat_container' key={item?.id} onClick={()=>{
      navigate("/message")
     }}>
        <div className='Friendschat_image'>
          <img src={item?.image? item?.image: emptyPhoto} alt="image" className='profile_image' />
          
        <div className='Friendschat_info'>
          <h1>{names}</h1>
          <div className='chat_message'>
            <DoneAll />
            {/* <p>{item?.message.length > 6 ? item?.message.slice(0 , 17) + "..." : item?.message}</p> */}
          </div>
        </div>

        </div>

        <div className='Friendschat_timestamp'>
            <h2>
              {moment(item?.createdAt).format("dddd")}
            </h2>
            <p>
              {moment(item?.createdAt).format('L')}
            </p>
        </div>
          
        </div>})}

      </div>

  </div>
  )
}

export default Friendschat
