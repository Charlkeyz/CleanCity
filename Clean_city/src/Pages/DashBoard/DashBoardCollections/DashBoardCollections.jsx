import Button from "../../../Components/Button/Button"
import styles from './DashBoardCollections.module.css'

const Collections = [
    {
        header: "Waste",
        collections: ["Recyclable", "General", "Green", "General"],
    },
    {
        header: "Status",
        collections: ["Collected", "Failed", "Collected", "Cancelled"],
    },
    {
        header: "Location",
        collections: ["8 Edigbe Str", "8 Edigbe Str", "8 Edigbe Str", "8 Edigbe Str"],
    },
    {
        header: "Quantity",
        collections: ["12kg", "20kg", "16kg", "39kg"],
    },
    {
        header: "Date",
        collections: ["01/03/2024", "12/02/2024", "24/01/2024", "15/01/2024"],
    },  
]
const DashBoardCollections = () => {
  return (
    <main>
        <section className={styles.collection_section}>
            <div className={styles.collectionContainer}>
                <h2>Collections</h2>
                <Button btnStyling = "make_a_request">Make a request</Button>
            </div>
            {/* <div className={styles.}><span>Upcoming</span><span>History</span></div> */}
        </section>
    </main>
  )
}
export default DashBoardCollections
