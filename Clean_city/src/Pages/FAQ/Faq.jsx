import FAQcomponent from '../../Components/FAQcomponent/FAQcomponent'
import styles from './Faq.module.css'
import { setIsOpenFaq } from '../../Redux/slice/cleanCitySlice';
import { useDispatch, useSelector } from 'react-redux';


const Faq = () => {

    const toggleArrow = useSelector((state)=> state.Clean_City)
    const dispatch = useDispatch()

    function toggleArrowFunc(){
        dispatch(setIsOpenFaq(!toggleArrow.isOpenFaq))
    }
    return(
        <>
            <div className={styles.container}>
                <div className={styles.faq_container}>
                    <h1>Frequently Asked Questions</h1>
                    <FAQcomponent toggleArrowFunc = {toggleArrowFunc} toggleArrow = {toggleArrow.isOpenFaq}/>
                    <FAQcomponent toggleArrowFunc/>
                    <FAQcomponent/>
                    <FAQcomponent/>

                </div>
            </div>
        </>
    )
}
export default Faq