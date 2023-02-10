import React from 'react'
import Friendschat from '../../Pages/Friendschat/Friendschat'
import "./Home.css"
// import Messagearea from '../../Pages/Messagearea/Messagearea'

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
