import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Components/Home/Home'
import Messagearea from './Pages/Messagearea/Messagearea'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/message' element={<Messagearea />} />

        </Routes>
      </Router>
    </div>
  )
}

export default App
