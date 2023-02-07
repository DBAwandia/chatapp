import React from 'react'
import "./Footer.css"
function Footer() {
  return (
    <div className='footer'>
      <div className='footer_input'>
        <input className='input_footer' type="text" placeholder='Start message' />
        <button className='button_send'>Send</button>
      </div>
    </div>
  )
}

export default Footer
