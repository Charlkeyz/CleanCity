/* eslint-disable react/no-unescaped-entities */

import { useSelector } from 'react-redux'
import styles from './WelcomePage.module.css'
const WelcomePage = () => {
  const firstName = useSelector((state)=> state.Clean_City)
  // const firstName = accountName ?  accountName.name : ""
  // console.log(firstName.formInput)


  return (
    <main className={styles.welcomeStyling}>
        <section className={styles.welcome_container}>
            <h1>Welcome to Clean City! {firstName.formInput.name}</h1>
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
