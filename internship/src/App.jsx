import React from 'react'
import Signup from './pages/Signup'
import Formpage from './pages/Formpage'
import { Route,Routes } from 'react-router-dom'
import './index.css'
function App() {
  return (
    <Routes>
      <Route path='/' element={<Signup/>}/>
      <Route path='/form' element={<Formpage/>}/>
    </Routes>
    
     
      
    
  )
}

export default App
