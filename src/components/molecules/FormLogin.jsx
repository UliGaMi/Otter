import {useRef, useContext} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserContext from "../../contexts/userContext";
import Logo from '../atoms/Logo'
import "../../assets/styles/Form.css"

function FormLogin() {
    const navigate = useNavigate();
    const form = useRef();
    const {isLoged, setIsLoged} = useContext(UserContext);
    const handlerClick = (e) => {
        e.preventDefault();
        setIsLoged(true);
        navigate('/perfil')
    }

    return ( 
        <div className='div-form-main'>
        <div className="div-form">
            <Logo clase={"img-form"}></Logo>
                <form ref={form}>
                <div>
                <label htmlFor="email">Correo electrónico</label>
                <input id="email" name='correo' type="email" />
                </div>
                <div>
                <label htmlFor="password">Contraseña</label>
                <input id="password" name='contraseña' type="password" />
                </div>
                <button onClick={handlerClick}>Iniciar sesión</button>
            </form>
            <Link className='link-form' to={'/signup'}>¿No tienes cuenta? Registrate aquí</Link>
            </div>
        </div>
     );
}

export default FormLogin;