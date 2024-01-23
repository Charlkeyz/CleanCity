/* eslint-disable react/prop-types */
import './Button.css'
const Button = (props) => {
    const {styling, children} = props
    return(
        <div className="btn">
            <button className={styling} >{children}</button>
        </div>
    )
}
export default Button