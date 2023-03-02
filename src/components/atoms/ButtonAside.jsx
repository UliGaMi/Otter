import { useNavigate } from 'react-router-dom';
import "../../assets/styles/NuevoPaciente.css"
function ButtonAside({img, label, url}) {
    const navigate = useNavigate();
    return ( 
        <div className='aside-button'>
        <button onClick={() => {navigate(`${url}`);}}>
            <img src={img}/>
            <label>{label}</label>
        </button>
        </div>
     );
}

export default ButtonAside;