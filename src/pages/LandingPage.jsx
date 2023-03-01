import { Navigate, useNavigate } from 'react-router-dom';
import Header from '../components/molecules/Header';
import "../assets/styles/LandingPage.css"
import social from '../assets/imgs/social.png'
function LandingPage() {
    const navigate = useNavigate();
    return ( 
        <>

            <div className='main'>

            <Header></Header>
            <div className='div-landing-content'>
                <div className='div-first-container'>
                   <div className='div-presentation-card'>
                    <p className='text-welcome'>¡Bienvenido a Otter!</p>
                    <p className='text-info'>Las herramientas nutricionales más accesibles del mercado</p>
                    <button onClick={()=>{navigate('/signup')}}>Registrarse</button>
                   </div>
                </div>
                <div className='div-second-container'>

                </div>
                <div className='div-third-container'>

                </div>
            </div>
 

            <footer>
            <div className="div-info">
                <p>Sobre Nosotros</p>
            </div>
            <div className="div-social">
                <img src={social}/>
            </div>
            </footer>
            </div>
        </>
     );
}

export default LandingPage;