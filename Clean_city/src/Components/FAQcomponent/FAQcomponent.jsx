/* eslint-disable react/prop-types */
import styles from './FAQcomponent.module.css'
// import { MdKeyboardArrowUp } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const FAQcomponent = (props) => {
const {toggleArrowFunc, toggleArrow} = props
    
    


    return(
        <>
            <div className={`${styles.faq_component} ${toggleArrow ? styles.moveUp: ""}`} onClick={toggleArrowFunc}>
                <p>Type your questions here</p>
                <MdOutlineKeyboardArrowDown className={`${styles.arrowDown} ${toggleArrow ? styles.moveDown: ""}`}/>
            </div>
        </>
    )
}
export default FAQcomponent