import React, { useState } from 'react'
import "./Footer.css"

function Footer() {
  const [ newMessage, setNewMessage ] = useState("")
  const handleSubmit = (e) =>{

  }
  return (
    <div className='footer'>
      <div className='footer_input'>
        <input onChange={(e)=> setNewMessage(e.target.value)} className='input_footer' type="text" placeholder='Start message' />
        <button className='button_send' onClick={()=>handleSubmit}>Send</button>
      </div>
    </div>
  )
}

export default Footer
