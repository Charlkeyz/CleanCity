// import DashboardOverviewComponent from '../../Components/Dashboard_Overview/DashboardOverviewComponent'
import DashboardOverview from '../../Components/Dashboard_Overview/DashboardOverview'
import DashboardCard from '../../Components/Dashboardcard/Dashboardcard'
import SearchInput from '../../Components/SearchInput/SearchInput'
import styles from './DashBoard.module.css'
import { useSelector } from 'react-redux'

const DashBoardData = [
  {
    heading: "Recyclable",
    massKg: 150,
    img: "/src/assets/dashboardImages/recycle.svg",
    body: "Contribute to a sustainable future with recycling"
  },
  {
    heading: "General Waste",
    massKg: 325,
    img: "/src/assets/dashboardImages/waste.svg",
    body: "Manage your general waste responsibly"
  },
  {
    heading: "Green",
    massKg: 210,
    img: "/src/assets/dashboardImages/green.svg",
    body: "Keep our environment green and clean"
  },
  {
    heading: "Hazardous",
    massKg: "---",
    img: "/src/assets/dashboardImages/hazardous.svg",
    body: "Handle hazardous waste with care"
  },
]

const  DashBoard = () => {
  const userName = useSelector((state)=> state.Clean_City)

  return (
    <main className={styles.DashBoard_Container}>
        <section>
            <DashboardOverview/>
            <div className={styles.searchButton}>
              <SearchInput/>
              <div className={styles.user_name}>
                <h2>Hello, {userName.formInput.name}</h2>
                <p>Monitor all your activities here</p>
              </div>
            </div>
            <div className={styles.dashboardData}>
              {
                DashBoardData.map((item, index)=> (
                  <DashboardCard key={index} index={index} heading={item.heading} massKg={item.massKg} image={item.img} body={item.body}/>
                ))
              }
            </div>
        </section>
    </main>
  )
}

export default DashBoard