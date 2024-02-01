// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Card from './Components/Card/Card'
import Navbar from './Components/Navbar/Navbar'
import Faq from './Pages/FAQ/Faq'
import Home from './Pages/Home/Home'

function App() {


  return (
    <>
      <Navbar/>
      <Home/>
      <Card/>
      <Faq/>
    </>
  )
}

export default App
