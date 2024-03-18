/* eslint-disable react/prop-types */
import { useState } from 'react';
import styles from './SignUpComponent.module.css'
import { IoMdEyeOff } from "react-icons/io";
import { IoMdEye } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { setFormInput } from '../../Redux/slice/cleanCitySlice';
import { Link } from 'react-router-dom';


const SignUpComponent = ({setFormFill, confirmInput}) => {
  const [showPassword, setShowPassword] = useState(false)
  const dispatch = useDispatch()
  const inputForm = useSelector((state)=> state.Clean_City)

console.log(confirmInput, setFormFill)
  

  function handlePasswordClick(){
    setShowPassword(!showPassword)
  }
  function handleInputForm(e) {
    const {name, value} = e.target;
    dispatch(setFormInput({ name, value}))
    // console.log(inputForm.formInput)

  }

  
  return (
    <main className={styles.input_form}>
        <section>
            <h1>Create your account</h1>
            <p>Already have an account? <Link to={'/log_in'} className={styles.log_in}><span>Log in</span></Link> </p>
        </section>
        <form action="">
            <input 
              type="text" 
              placeholder="First name"
              name='name'
              value={inputForm.name}
              onInput={handleInputForm}
               style={{border: confirmInput && !setFormFill && inputForm.name === "" ? "2px solid red" : ""}}
              />
            <input 
              type="text" 
              placeholder="Last name"
              name='surname'
              value={inputForm.surname}
              onInput={handleInputForm}
              style={{border: confirmInput && !setFormFill && inputForm.surname === "" ? "2px solid red" : ""}}
              />
            <input 
              type="email" 
              placeholder="Email address"
              name='email'
              value={inputForm.email}
              onInput={handleInputForm}
              style={{border: confirmInput && !setFormFill && inputForm.email === "" ? "2px solid red" : ""}}
              />
            <input 
              type={showPassword ? "text" : "password"} 
              placeholder="Choose password"
              name='password'
              value={inputForm.password}
              onInput={handleInputForm}
              style={{border: confirmInput && !setFormFill && inputForm.password === "" ? "2px solid red" : ""}}
              />
            <span className={styles.passwordEye} onClick={handlePasswordClick}>{showPassword ? <IoMdEye/> : <IoMdEyeOff/>}</span>
        </form>
        
    </main>
  )
}
export default SignUpComponent
