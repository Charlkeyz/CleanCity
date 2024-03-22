import Logo from '../../assets/Dashboard_icons/logo.svg'
import Button from '../Button/Button'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import styles from './Navbar.module.css'
import Resources from '../../NavBarDropdown/Resources/Resources'
import Services from '../../NavBarDropdown/Services/Services';
import Support from '../../NavBarDropdown/Support/Support';
import { useDispatch, useSelector } from 'react-redux';
import { setResourcesState, setServiceState, setSupportState } from '../../Redux/slice/cleanCitySlice';
import { Link } from 'react-router-dom';


const Navbar = () => {
    const toggle = useSelector((state)=> state.Clean_City)
    const dispatch = useDispatch()

    function resourcesToggle(){
        dispatch(setResourcesState(!toggle.resourcesState))
        dispatch(setServiceState(false))
        dispatch(setSupportState(false))
    }

    function serviceToggle(){
        dispatch(setServiceState(!toggle.servicesState))
        dispatch(setResourcesState(false))
        dispatch(setSupportState(false))     
    }

    function supportToggle(){
        dispatch(setSupportState(!toggle.supportState))
        dispatch(setResourcesState(false))
        dispatch(setServiceState(false))
    }


   
    return(
       <>
            <div className={styles.navbar}>
                <div className={styles.navbar1}>
                        <img src={Logo}/>
                        <p className={styles.cleanCity}>Clean<span className={styles.city}>City</span></p>
                        <div className={styles.list}>
                            <ul className={styles.dropdown}>Resources <span ><MdOutlineKeyboardArrowDown onClick={resourcesToggle}/></span></ul>
                                { toggle.resourcesState && <Resources/> }

                            <ul className={styles.dropdown}>Services <span><MdOutlineKeyboardArrowDown onClick={serviceToggle}/></span></ul> 
                                {toggle.servicesState && <Services/>}

                            <ul className={styles.dropdown}>Support <span><MdOutlineKeyboardArrowDown onClick={supportToggle}/></span></ul>
                                { toggle.supportState && <Support/>}
                        </div>
                </div>
                <div className={styles.navbar2}>
                <Link to='/log_in' style={{textDecoration: "none"}}><ul className={styles.log_in}>Log in</ul></Link>
                        <Link to="/sign_up" style={{textDecoration: "none"}}><Button>Create Account</Button></Link>
                </div>

                


            </div>
       
       </>
    )
}
export default Navbar   