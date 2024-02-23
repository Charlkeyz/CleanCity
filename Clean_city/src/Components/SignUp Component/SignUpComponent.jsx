import { useState } from 'react';
import styles from './SignUpComponent.module.css'
import { IoMdEyeOff } from "react-icons/io";
import { IoMdEye } from "react-icons/io";
const SignUpComponent = () => {
  const [showPassword, setShowPassword] = useState(false)

  function handlePasswordClick(){
    setShowPassword(!showPassword)
  }
  return (
    <main className={styles.input_form}>
        <section>
            <h1>Create your account</h1>
            <p>Already have an account? <span>Log in</span> </p>
        </section>
        <form action="">
            <input type="text" placeholder="First name"/>
            <input type="text" placeholder="Last name" />
            <input type="email" placeholder="Email address"/>
            <input type={showPassword ? "text" : "password"} placeholder="Choose password" />
            <span className={styles.passwordEye} onClick={handlePasswordClick}>{showPassword ? <IoMdEye/> : <IoMdEyeOff/>}</span>
        </form>
        
    </main>
  )
}
export default SignUpComponent
