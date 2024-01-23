import Button from '../../Components/Button/Button';
import './Home.css'
const Home = () => {
    const styling = "btn_2"
       
   
   
    return(
        <>
        <div className="homepage" >  
                <div className='homepage_container'>
                    <div className='lagos'>
                        <h1>Experience a</h1>
                        <h1>cleaner Lagos</h1>
                        <p className='discover'>Discover the power of responsible waste management and <br />
                        recycling right at your fingertips.</p>
                    </div>
                    <div className='btn_1'>
                        <Button>Get started today</Button>
                        <Button styling = {styling}>See how it works</Button>
                    </div>
                </div>
                
        </div>
        </>
    )
}
export default Home;