// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CreateAccount from './Pages/Sign-Up/SignUp'
import LandingPage from './Pages/Landing Page/LandingPage'
function App() {


  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/Sign_up' element={<CreateAccount/>}/>
    </Routes>
   
   </BrowserRouter>
  )
}

export default App
