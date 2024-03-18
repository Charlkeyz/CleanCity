import Navbar from "../../Components/Navbar/Navbar"
import Home from "../Home/Home"
import Card from "../../Components/Card/Card"
import Faq from "../FAQ/Faq"
import MakeDifference from "../MakeDifference/MakeDifference"
import Footer from "../../Components/Footer/Footer"
import AboutUs from "../AboutUsPage/AboutUs"

const LandingPage = () => {
  return (
    <main>
     <Navbar/>
      <Home/>
      <Card/>
      <AboutUs/>
      <Faq/>
      <MakeDifference/>
      <Footer/>
    </main>
  )
}
export default LandingPage
