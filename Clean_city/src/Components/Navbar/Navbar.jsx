import Logo from '../../assets/logo.svg'
import Button from '../Button/Button'
import './Navbar.css'

const Navbar = () => {
    return(
       <>
       <div className='navbar'>
           <div className='navbar1'>
                <img src={Logo}/>
                <p className='cleanCity'>Clean<span>City</span></p>
                <div className='list'>
                    <ul>Resources</ul>
                    <ul>Services</ul>
                    <ul>Support</ul>
                </div>
           </div>
           <div className='navbar2'>
                <p>Log in</p>
                <Button/>
           </div>
       </div>
       
       </>
    )
}
export default Navbar   