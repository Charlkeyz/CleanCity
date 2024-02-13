// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Card from './Components/Card/Card'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'
import Faq from './Pages/FAQ/Faq'
import Home from './Pages/Home/Home'
import MakeDifference from './Pages/MakeDifference/MakeDifference'

function App() {


  return (
    <>
      <Navbar/>
      <Home/>
      <Card/>
      <Faq/>
      <MakeDifference/>
      <Footer/>
    </>
  )
}

export default App
