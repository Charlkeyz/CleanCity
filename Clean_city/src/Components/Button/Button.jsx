/* eslint-disable react/prop-types */
import styles from './Button.module.css'
const Button = (props) => {
    const {btnStyling, children} = props
    let btnStyles 
    if(btnStyling === "btn_2"){
        btnStyles = styles.btn_2
    }else if(btnStyling === "create_account"){
        btnStyles = styles.signUp_btn
    }else if(btnStyling === "googleBtn"){
        btnStyles = styles.googleSignIn
    }else if(btnStyling === "next"){
        btnStyles = styles.next_button
    }else if(btnStyling === "building"){
        btnStyles = styles.buildingBtn
    }else if(btnStyling === "waste_btn"){
        btnStyles = styles.wasteBtn
    }
    return(
        <div className={styles.btn}>
            <button className={btnStyles} >{children}</button>
        </div>
    )
}
export default Button