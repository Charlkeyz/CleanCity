import FAQcomponent from '../../Components/FAQcomponent/FAQcomponent'
import styles from './Faq.module.css'
import { setIsOpenFaq } from '../../Redux/slice/cleanCitySlice';
import { useDispatch, useSelector } from 'react-redux';

const FaqList = [
    {
        id: Math.floor(Math.random() * 1000),
        question: "Type your question",
        answer: "Your answer goes here"
    },
    {
        id: Math.floor(Math.random() * 1000),
        question: "Type your question",
        answer: "Your answer goes here"
    },
    {
        id: Math.floor(Math.random() * 1000),
        question: "Type your question",
        answer: "Your answer goes here"
    },
    {
        id: Math.floor(Math.random() * 1000),
        question: "Type your question",
        answer: "Your answer goes here"
    },
]
const Faq = () => {
    
    const toggleArrow = useSelector((state)=> state.Clean_City)
    const dispatch = useDispatch()
    
    function toggleArrowFunc(index){
        dispatch(setIsOpenFaq({index, isOpen: !toggleArrow.isOpenFaq[index]}))
    }
    // toggleArrowFunc()
    
    return(
        <>
            <div className={styles.container}>
                <div className={styles.faq_container}>
                    <h1>Frequently Asked Questions</h1>
                    <FAQcomponent FaqList = {FaqList} toggleArrowFunc = {toggleArrowFunc} toggleArrow ={toggleArrow.isOpenFaq}/>
                </div>
            </div>
        </>
    )
}
export default Faq