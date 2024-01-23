import Logo from '../../assets/logo.svg'
import Button from '../Button/Button'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import './Navbar.css'

const Navbar = () => {
    return(
       <>
       <div className='navbar'>
           <div className='navbar1'>
                <img src={Logo}/>
                <p className='cleanCity'>Clean<span className='city'>City</span></p>
                <div className='list'>
                    <ul>Resources <span className='ul'><MdOutlineKeyboardArrowDown/></span></ul>
                    <ul>Services <span className='ul'><MdOutlineKeyboardArrowDown/></span></ul>
                    <ul>Support <span className='ul'><MdOutlineKeyboardArrowDown/></span></ul>
                </div>
           </div>
           <div className='navbar2'>
                <p className='log-in'>Log in</p>
                <Button>Create Account</Button>
           </div>
       </div>
       
       </>
    )
}
export default Navbar   