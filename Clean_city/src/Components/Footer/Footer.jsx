import styles from './Footer.module.css'
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import LogoFooter from '../../assets/logo1.svg'

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
                        <FaTwitter className={styles.twitter}/>
                        <FaFacebook className={styles.facebook}/>
                        <FaYoutube className={styles.youtube}/>
                        <FaInstagram className={styles.instagram}/>
                        <FaTiktok className={styles.tiktok}/>
                    </div> 

                </div>
                <div className={styles.line}></div>
                <div className={styles.logo_footer}>
                    <img src={LogoFooter} alt="logoFooter" className={styles.logo} />
                    <p className={styles.cleanCity}>Clean<span className={styles.city}>City</span></p>
                </div>
            </div>
        </>
    )
}
export default Footer