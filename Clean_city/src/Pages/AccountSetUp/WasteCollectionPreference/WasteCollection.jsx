import Button from "../../../Components/Button/Button"
import styles from "./WasteCollection.module.css"


const WasteCollection = () => {
    return (
      <main>
          <section className={styles.waste_container}>
              <h1>Waste Collection Preferences</h1>
              <p>Specify a waste pickup frequency and the types of waste you generate for a personalized plan.</p>
              <div className={styles.waste_option}>
                  <p>How often should we collect your waste?</p>
                  <div className={styles.waste_selection}>
                    <select>
                        <option value="">Select an option</option>
                    </select>
                  </div>
              </div>
              <div className={styles.wasteBtn_container}>
                <p>Select the types(s) of waste you generate</p>
                <div className={styles.waste_btn}>
                    <Button btnStyling = "waste_btn">General</Button>
                    <Button btnStyling = "waste_btn">Recyclable</Button>
                    <Button btnStyling = "waste_btn">Green</Button>
                    <Button btnStyling = "waste_btn">Hazardous</Button>
                    <Button btnStyling = "waste_btn">Others</Button>
                </div>
              </div>
          </section>
      </main>
    )
  }
  export default WasteCollection
  