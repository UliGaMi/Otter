import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import PacienteContext from "../../contexts/pacienteContext";
import KCContext from '../../contexts/kcContext';
import "../../assets/styles/NuevoPaciente.css"
function ButtonAside({img, label, url}) {
    const { paciente, setPaciente } = useContext(PacienteContext);
    const { kc, setKC } = useContext(KCContext);
    const navigate = useNavigate();
    return ( 
        <div className='aside-button'>
        <button onClick={() => {
            navigate(`${url}`);
            setPaciente(null);
            setKC(null);
            }}>
            <img src={img}/>
            <label>{label}</label>
        </button>
        </div>
     );
}

export default ButtonAside;