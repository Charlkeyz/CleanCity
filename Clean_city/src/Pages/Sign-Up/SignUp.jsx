 import SignUpComponent from '../../Components/SignUp Component/SignUpComponent'
import styles from './SignUp.module.css'
 const SignUp = () => {
  return (
    <>
        <main className={styles.sign_up_container}>
          <section className={styles.background_container}>
            <img className={styles.image} src="/src/assets/BackgroundImages/Background_image.jpg" alt="Sign-Up image" />
            <div className={styles.create_account}>
              <SignUpComponent/>
            </div>
          </section>
        </main>
    </>
  )
}
export default SignUp
