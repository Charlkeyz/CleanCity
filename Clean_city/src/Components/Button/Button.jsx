/* eslint-disable react/prop-types */
import styles from './Button.module.css'
const Button = (props) => {
    const {styling, children} = props
    return(
        <div className={styles.btn}>
            <button className={styling} >{children} click</button>
        </div>
    )
}
export default Button