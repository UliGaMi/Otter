import {useRef} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../atoms/Logo'
import "../../assets/styles/Form.css"

function FormLogin() {
    const form = useRef();
    const handlerClick = (e) => {
        e.preventDefault();
        const formData = new FormData(form.current);
        alert(formData.get('correo') + formData.get('contraseña'));
    }

    return ( 
        <div className='div-form-main'>
        <div className="div-form">
            <Logo clase={"img-form"}></Logo>
                <form ref={form}>
                <div>
                <label htmlFor="email">Correo:</label>
                <input id="email" name='correo' type="email" />
                </div>
                <div>
                <label htmlFor="password">Contraseña:</label>
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