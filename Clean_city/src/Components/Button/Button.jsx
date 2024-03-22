/* eslint-disable react/prop-types */
import styles from './Button.module.css'
const Button = (props) => {
    const {btnStyling, children, next, type} = props
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
    }else if(btnStyling === "finish"){
        btnStyles = styles.finish_btn
    }else if(btnStyling === "log_in"){
        btnStyles = styles.log_in_btn
    }
    else if(btnStyling === "aboutSignIn"){
        btnStyles = styles.aboutSignIn
    }
    else if( btnStyling === "make_a_request"){
        btnStyles = styles.collectionBtn
    }
    return(
        
            <button className={btnStyles} onClick={next} type={type}>{children}</button>
    
    )
}
export default Button