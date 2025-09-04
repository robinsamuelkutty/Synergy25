import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
const App = () => {
  return (
    
    <BrowserRouter>
        <div>
          <Routes>
            <Route path='/' element={
              <>
                <Navbar />
                <Hero/>
                

              </>
              } />
            
          </Routes>
        </div>
    </BrowserRouter>
  )
}

export default App