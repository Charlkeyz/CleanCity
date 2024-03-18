import styles from './DashboardOverview.module.css'
// import OverviewLogo from '../../assets/overview.svg'
import Recycling from '../../assets/recycling.svg'
import Tracking from '../../assets/tracker.svg'
import Account from '../../assets/account.svg'
import Schedule from '../../assets/schedule.svg'
import Payment from '../../assets/payment.svg'
import Community from '../../assets/community.svg'


const DashboardOverview = () => {


  return (
    <main>
        <section className={styles.DashBoard_section}>
            <div className={styles.DashBoard_sidebar}>
                    <h2><span style={{color: "#0486A8"}}>Clean</span><span style={{color: "#00CA5B"}}>City</span></h2>
                    <div className={styles.DashBoard_ul}>
                      <ul>
                          <li><img src={Community} alt='overview'/>Overview</li>
                          <li><img src={Schedule} alt='schedule'/>Schedule</li>
                          <li><img src={Tracking} alt='tracking'/>Tracking</li>
                          <li><img src={Recycling} alt='recycling'/>Recycling</li>
                          <li><img src={Payment} alt='payment'/>Payments</li>
                          <li><img src={Community} alt='community'/>Community</li>
                          <li><img src={Account} alt='account'/>Account</li>
                      </ul>
                    </div>
                </div>
        </section>
    </main>
  )
}

export default DashboardOverview