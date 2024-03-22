import styles from './DashboardSideBar.module.css'
// import OverviewLogo from '../../assets/overview.svg'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { MdRecycling } from "react-icons/md";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { MdOutlineDashboard } from "react-icons/md";
import { MdOutlinePayments } from "react-icons/md";
import { MdOutlinePersonOutline } from "react-icons/md";
import { GoLocation } from "react-icons/go";
import { MdDashboard } from "react-icons/md";



const DashboardSideBar = () => {

  const location = useLocation()
  function isActive(routes){
    return location.pathname === routes
  }


  return (
    <main>
        <section className={styles.DashBoard_section}>
            <div className={styles.DashBoard_sidebar}>
                    <h2><span style={{color: "#0486A8"}}>Clean</span><span style={{color: "#00CA5B"}}>City</span></h2>
                    <div className={styles.DashBoard_ul}>
                      <ul>
                          <Link to="/overview" 
                            style={{
                            textDecoration: "none",
                            color:isActive("/overview") ? "#0486A8" : "black",
                                }}>
                            <li style={{backgroundColor: isActive("/overview") ? "#EBF2F3" : ""}}>
                              <MdDashboard/>Overview
                            </li>
                          </Link>
                          <Link to="/scheduling"
                            style={{
                            textDecoration: "none",
                            color:isActive("/scheduling") ? " red" : "black"
                                }}>
                          <li><MdOutlineCalendarMonth/>Schedule</li>
                          </Link> 
                          <li><GoLocation/>Tracking</li>
                          <li><MdRecycling/>Recycling</li>
                          <li><MdOutlinePayments/>Payments</li>
                          <li ><MdOutlineDashboard/>Community</li>
                          <li><MdOutlinePersonOutline/>Account</li>
                      </ul>
                    </div>
                </div>
        </section>
    </main>
  )
}

export default DashboardSideBar