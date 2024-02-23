import Button from "../../Components/Button/Button"
import styles from "./AccountSetUp.module.css"
import TypeOfBuilding from "./TypeOfBuilding/TypeOfBuilding"
import WasteCollection from "./WasteCollectionPreference/WasteCollection";
import WelcomePage from "./welcome_page/WelcomePage"
import { FaArrowLeft } from "react-icons/fa";
 const AccountSetUp = () => {
  return (
    <main className={styles.mainWelcome}>
        <section className={styles.sectionWelcome}>
            <img src="/src/assets/BackgroundImages/Background_image.jpg" alt="image" />
            <div className={styles.setUp_account_container}>
              <div className={styles.arrow_container}>
                <FaArrowLeft/>
              </div>
              <div className={styles.account_tracker}>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
              </div>
              <div className={styles.welcome_container}>
                {/* <WelcomePage/> */}
                {/* <TypeOfBuilding/> */}
                <WasteCollection/>
              </div>
              <div className={styles.next_page}>
                <Button btnStyling = "next">Continue</Button>
                <span>Skip</span>
            </div>
            </div>
            
        </section>
    </main>
  )
}
export default AccountSetUp
