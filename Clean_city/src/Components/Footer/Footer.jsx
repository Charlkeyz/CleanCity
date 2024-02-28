import styles from './Footer.module.css'
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import LogoFooter from '../../assets/logo1.svg'
// import { PiCopyrightBold } from "react-icons/pi";
import { MdOutlineCopyright } from "react-icons/md";

const Footer = () => {
    return(
        <>
            <div className={styles.footer_container}>
                <div className={styles.footerList}>
                    <ul>
                        <li>Our Services</li>
                        <li>Residential Waste Collections</li>
                        <li>Recycling</li>
                        <li>One-time Collections</li>
                        <li>Request a Quote</li>
                    </ul>
                    <ul>
                        <li>Our Partners</li>
                        <li>LAGESC</li>
                        <li>FMWRS</li>
                    </ul>
                    <ul>
                        <li>Learn More</li>
                        <li>About Us</li>
                        <li>FAQ</li>
                        <li>Contact Us</li>
                    </ul>
                    <ul>
                        <li>Resources</li>
                        <li>Articles</li>
                        <li>Site Guides</li>
                        <li>Video Tutorials</li>
                    </ul>
                    <div className={styles.socialMediaLogo}>
                        <FaTwitter className={styles.socialMedia_logo}/>
                        <FaFacebook className={styles.socialMedia_logo}/>
                        <FaYoutube className={styles.socialMedia_logo}/>
                        <FaInstagram className={styles.socialMedia_logo}/>
                        <FaTiktok className={styles.socialMedia_logo}/>
                    </div> 

                </div>
                <div className={styles.line}></div>
                <div className={styles.logo_footer}>
                    <img src={LogoFooter} alt="logoFooter" className={styles.logo} />
                    <p className={styles.cleanCity}>Clean<span className={styles.city}>City</span></p>
                </div>
                <div className={styles.copyright_container}>
                    <p><MdOutlineCopyright style={{position: "relative", top: "2px"}}/>2024 Clean City Solutions Ltd. <span>Terms of Use</span><span>Privacy policy</span></p>
                </div>
            </div>
        </>
    )
}
export default Footer