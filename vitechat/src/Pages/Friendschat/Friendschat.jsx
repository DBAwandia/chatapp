import React from 'react'
import "./Friendschat.css"
import { DoneAll, Search } from "@mui/icons-material"

function Friendschat() {
  const data = [
    {
      image:"https://images.unsplash.com/photo-1535207010348-71e47296838a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29vbCUyMHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      name: "Mike",
      message: "Ndio kutokea",
      date: "Thursday",
      time: "Thur, 12:03pm"
    },
    {
      image:"https://images.unsplash.com/photo-1542596594-649edbc13630?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y29vbCUyMHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      name: "Ken",
      message: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without",
      date: "Friday",
      time: "Wed, 10:33pm"
    },
    {
      image:"https://images.unsplash.com/photo-1576828831022-ca41d3905fb7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNvb2wlMjBwZXJzb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      name: "Sarah",
      message: "Ndio kutokea",
      date: "Thursday",
      time: "Thur, 12:03pm"
    },
    {
      image:"https://images.unsplash.com/photo-1592854899481-f78db4baccb6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y29vbCUyMHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      name: "Mike",
      message: "Ndio kutokea",
      date: "Thursday",
      time: "Thur, 12:03pm"
    },
    {
      image:"https://images.unsplash.com/photo-1535207010348-71e47296838a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29vbCUyMHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      name: "Mike",
      message: "Ndio kutokea",
      date: "Thursday",
      time: "Thur, 12:03pm"
    },
    {
      image:"https://images.unsplash.com/photo-1535207010348-71e47296838a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29vbCUyMHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      name: "Mike",
      message: "Ndio kutokea",
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

       { data?.map((item, i) =>{
       return <div className='chat_container'>
          <div className='Friendschat_image'>
            <img src={item?.image} alt="image" className='profile_image' />
            
          <div className='Friendschat_info'>
            <h1>{item?.name}</h1>
            <div className='chat_message'>
              <DoneAll className={item.name === "Ken" ?"view" : "viewed"}/>
              <p>{item?.message.length > 6 ? item?.message.slice(0 , 35) + "..." : item?.message}</p>
            </div>
          </div>


          </div>

          <div className='Friendschat_timestamp'>
            <h2>{item?.date}</h2>
            <p>{item?.time}</p>
          </div>
            
          </div>})}

        </div>

    </div>
  )
}

export default Friendschat
