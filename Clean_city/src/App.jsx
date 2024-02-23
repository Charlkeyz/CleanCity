// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CreateAccount from './Pages/Sign-Up/SignUp'
import LandingPage from './Pages/Landing Page/LandingPage'
import AccountSetUp from './Pages/AccountSetUp/AccountSetUp'
 
function App() {


  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/sign_up' element={<CreateAccount/>}/>
      <Route path='/account_setup' element={<AccountSetUp/>}/>
    </Routes>
   
   </BrowserRouter>
  )
}

export default App
