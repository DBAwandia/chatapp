import React from 'react'
import Friendschat from '../../Pages/Friendschat/Friendschat'
import Messagearea from '../../Pages/Messagearea/Messagearea'
import "./Home.css"

function Home() {
  return (
    <div className='Home'>
      <div className='Home_container'>
      <div className='Friendchats_home'>
            <Friendschat />
        </div>
        <div className='Messaging_home'>
            <h1>MESSANGER</h1>
        </div>
      </div>
    </div>
  )
}

export default Home
