import { useState } from "react";
import Button from "../../Components/Button/Button"
import styles from "./AccountSetUp.module.css"
import TypeOfBuilding from "./TypeOfBuilding/TypeOfBuilding"
import WasteCollection from "./WasteCollectionPreference/WasteCollection";
import WelcomePage from "./welcome_page/WelcomePage"
import { FaArrowLeft } from "react-icons/fa";
 const AccountSetUp = () => {

  const [pageIndex, setPageIndex] = useState(0);

  function next(){
    setPageIndex(prev => prev + 1)
  }
  function prev(){
    setPageIndex(prev => prev - 1)
  }



  return (
    <main className={styles.mainWelcome}>
        <section className={styles.sectionWelcome}>
            <img src="/src/assets/BackgroundImages/Background_image.jpg" alt="image" />
            <div className={styles.setUp_account_container}>
              <div className={styles.arrow_container}>
                {pageIndex !== 0 &&<FaArrowLeft onClick={prev}/>}
              </div>
              <div className={styles.account_tracker}>
                <span style={{backgroundColor: "#0486A8"}}></span>
                <span style={{backgroundColor: pageIndex === 1 || pageIndex === 2 ? "#0486A8" : ""}}></span>
                <span style={{backgroundColor: pageIndex === 2 ? "#0486A8" : ""}}></span>
              </div>
              <div className={styles.welcome_container}>
                
              {pageIndex === 0 &&<WelcomePage/>}
              {pageIndex === 1 &&<TypeOfBuilding/>}
              {pageIndex === 2 &&<WasteCollection/>}
              </div>
              <div className={styles.next_page}>
                {
                  pageIndex === 2 ? (
                    <Button btnStyling = "finish">Finish</Button>
                  ) : (
                    <Button btnStyling = "next" next = {next}>Continue</Button>
                  )
                }
                {pageIndex !==2 && <span>Skip</span>}
            </div>
            </div>
            
        </section>
    </main>
  )
}
export default AccountSetUp
