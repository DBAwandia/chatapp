import React from 'react'
import "./Messagearea.css"

function Messagearea() {
 let image="https://images.unsplash.com/photo-1535207010348-71e47296838a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29vbCUyMHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"

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

    <div className='receiver_message_chat_layout'>
      <p>In publishing and graphic design, 
        Lorem ipsum is a placeholder text 
        commonly used to demonstrate the visual 
        
      </p>
    </div>

    <div className='sender_message_chat_layout'>
      <p>In publishing and graphic design, 
        Lorem ipsum is a placeholder text 
        commonly used to demonstrate the visual 
        form of a document or a typeface without 
        relying on meaningful content. Lorem ipsum
         may be used as a placeholder before final 
         copy is available.
      </p>
    </div>

    <div className='receiver_message_chat_layout'>
      <p>In publishing and graphic design, 
        Lorem ipsum is a placeholder text 
        commonly used to demonstrate the visual 
        form of a document or a typeface without 
        relying on meaningful content. Lorem ipsum
         may be used as a placeholder before final 
         copy is available.
      </p>
    </div>

    <div className='sender_message_chat_layout'>
      <p>In publishing and graphic design, 
        Lorem ipsum is a placeholder text 
        commonly used to demonstrate the visual 
        form of a document or a typeface without 
        relying on meaningful content. Lorem ipsum
         may be used as a placeholder before final 
         copy is available.
      </p>
    </div>
    <div className='receiver_message_chat_layout'>
      <p>
        relying on meaningful content. Lorem ipsum
         may be used as a placeholder before final 
         copy is available.
      </p>
    </div>
    <div className='receiver_message_chat_layout'>
      <p>In publishing and graphic design, 
        Lorem ipsum is a placeholder text 
      </p>
    </div>

    <div className='sender_message_chat_layout'>
      <p>In publishing and graphic design, 
        Lorem ipsum is a placeholder text 
        commonly used to demonstrate the visual 
        form of a document or a typeface without 
        relying on meaningful content. Lorem ipsum
         may be used as a placeholder before final 
         copy is available.
      </p>
    </div> <div className='sender_message_chat_layout'>
      <p>In publishing and graphic design, 
        Lorem ipsum is a placeholder text 
        commonly used to demonstrate the visual 
        form of a document or a typeface without 
        relying on meaningful content. Lorem ipsum
         may be used as a placeholder before final 
         copy is available.
      </p>
    </div>

      </div>
    </div>
  )
}

export default Messagearea
