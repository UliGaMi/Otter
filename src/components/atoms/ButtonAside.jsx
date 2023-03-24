import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import PacienteContext from "../../contexts/pacienteContext";
import KCContext from '../../contexts/kcContext';
import MenuContext from '../../contexts/menuContext';
import "../../assets/styles/ButtonAside.css"

function ButtonAside({img, label, url}) {
    const {menu, setMenu} = useContext(MenuContext);
    const { paciente, setPaciente } = useContext(PacienteContext);
    const { kc, setKC } = useContext(KCContext);
    const navigate = useNavigate();
    return ( 
        <div className='div-buttonaside'>
        <button className='button-buttonaside' onClick={() => {
            setPaciente(null);
            setKC(null);
            navigate(`${url}`);
            setMenu(false);
            }}>
            <img src={img}/>
            <label>{label}</label>
        </button>
        </div>
     );
}

export default ButtonAside;