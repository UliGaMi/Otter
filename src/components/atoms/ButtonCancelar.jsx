import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import PacienteContext from "../../contexts/pacienteContext";
import MenuContext from "../../contexts/menuContext";
function ButtonCancelar() {
    const {menu, setMenu} = useContext(MenuContext);
    const navigate = useNavigate();
    const {paciente, setPaciente} = useContext(PacienteContext);
    const handlerClick = (e) =>  {
        setMenu(false);
        setPaciente(null);
        navigate("/tablas")
    }

    return ( 
        <button onClick={handlerClick}>Cancelar</button>
     );
}

export default ButtonCancelar;