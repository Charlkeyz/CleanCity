/* eslint-disable react/no-unescaped-entities */

import styles from './WelcomePage.module.css'
const WelcomePage = () => {
  return (
    <main>
        <section className={styles.welcome_container}>
            <h1>Welcome to Clean City! User Name</h1>
            <p>Let's set up your profile in a few easy steps!</p>
            <div className={styles.confirm_pickup}>
                <p>Confirm your pickup location</p>
                <input type="text" />
            </div>
        </section>
    </main>
  )
}
export default WelcomePage
