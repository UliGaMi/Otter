import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import PacienteContext from "../../contexts/pacienteContext";

function ButtonCancelar() {
    const navigate = useNavigate();
    const {paciente, setPaciente} = useContext(PacienteContext);
    const handlerClick = (e) =>  {
        setPaciente(null);
        navigate("/tablas")
    }

    return ( 
        <button onClick={handlerClick}>Cancelar</button>
     );
}

export default ButtonCancelar;