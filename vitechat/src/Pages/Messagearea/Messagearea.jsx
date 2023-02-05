import React from 'react'
import "./Messagearea.css"

function Messagearea() {
 let image="https://images.unsplash.com/photo-1535207010348-71e47296838a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29vbCUyMHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
 let data1 =[
  {
    description: "may be used as a placeholder before final may be used as a placeholder before final may be used as a placeholder before final may be used as a placeholder before final may be used as a placeholder before final "
  },
//   {
//     description: "final may be used as a placeholder before final may be used as a placeholder before final may be used as a placeholder before final may be used as a placeholder before final "
//   },
//     {
//     description: "placeholder before final may be used as a placeholder before final may be used as a placeholder before final may be used as a placeholder before final may be used as a placeholder before final "
//   },
//     {
//     description: "may be used as a placeholder before final may be used as a placeholder before final may be used as a placeholder before final may be used as a placeholder before final may be used as a placeholder before final "
//   },
//   {
//   description: "may be used as a placeholder before final may be used as a placeholder before final may be used as a placeholder before final may be used as a placeholder before final may be used as a placeholder before final "
// }
 ]
 let data2 =[
 
    {
    description: "may be used as a placeholder before final may be used as a placeholder before final may be used as a placeholder before final may be used as a placeholder before final may be used as a placeholder before final "
  },
//   {
//   description: "may be used as a placeholder before final may be used as a placeholder before final may be used as a placeholder before final may be used as a placeholder before final may be used as a placeholder before final "
// },
// {
//   description: "may be used as a placeholder before final may be used as a placeholder before final may be used as a placeholder before final may be used as a placeholder before final may be used as a placeholder before final "
// },
// {
// description: "may be used as a placeholder before final may be used as a placeholder before final may be used as a placeholder before final may be used as a placeholder before final may be used as a placeholder before final "
// }
 ]
  return (
    <div className='Messagearea'>
      <div className='Messagearea_container'>

        <div className='Messagearea_nav'>
          <img src={image} className="profile_images" alt="image" />
          <div className='Messagearea_names'>
            <h1>Mike</h1>
            <p>last seen 11:03pm</p>
          </div>
        </div>

    <div className='margintop'>
          {data1?.map((item) =>(
          <div className='receiver_message_chat_layout'>
              <p>
                {item?.description}
                
              </p>
            </div>)) }

          {data2?.map((items) =>( <div className='sender_message_chat_layout'>
              <p>
              {items?.description}
        
              </p>
            </div>))}
        </div>
      </div>
    </div>
  )
}

export default Messagearea
