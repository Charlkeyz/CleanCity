import Navbar from "../../Components/Navbar/Navbar"
import Home from "../Home/Home"
import Card from "../../Components/Card/Card"
import Faq from "../FAQ/Faq"
import MakeDifference from "../MakeDifference/MakeDifference"
import Footer from "../../Components/Footer/Footer"

const LandingPage = () => {
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
export default LandingPage
