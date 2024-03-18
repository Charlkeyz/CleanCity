 import Button from '../../Components/Button/Button'
 import { FcGoogle } from "react-icons/fc";
import SignUpComponent from '../../Components/SignUp Component/SignUpComponent'
import styles from './SignUp.module.css'
import { Link } from 'react-router-dom';
// import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useState } from 'react';
 const SignUp = () => {

  const formFill = useSelector((state)=> state.Clean_City.formInput)
  const [confirmInput, setConfirmInput] = useState(false)

  function handleClick(){
    setConfirmInput(true)
  }

  const setFormFill = formFill.name !== "" && formFill.surname !== "" && formFill.email !== "" && formFill.password !== ""
  
  
  return (
    <>
        <main className={styles.sign_up_container}>
          <section className={styles.background_container}>
            <img className={styles.image} src="/src/assets/BackgroundImages/Background_image.jpg" alt="Sign-Up image" />
            <div className={styles.create_account}>
              <SignUpComponent setFormFill = {setFormFill} confirmInput = {confirmInput}/>
              <div className={styles.buttons}>
                <Link to = { setFormFill ? "/account_setup" : ""} style={{textDecoration: "none"}} onClick={handleClick}>
                  <Button btnStyling = "create_account">Create your account</Button>
                </Link>
              </div>
              <div className={styles.continue}>
                  <div className={styles.line}></div>
                  <p>or continue with</p>
                  <div className={styles.line}></div> 
              </div>
              <div className={styles.googleBtn}>
                <Button btnStyling = "googleBtn"><FcGoogle className={styles.googleIcon}/> Google</Button>
              </div>
              <div className={styles.termsConditions}>
                <p>By creating an account you agree to our <span>Terms & Conditions</span> and our <span>Privacy Policy</span>.</p>
              </div>
            </div>
          </section>
        </main>
    </>
  )
}
export default SignUp
