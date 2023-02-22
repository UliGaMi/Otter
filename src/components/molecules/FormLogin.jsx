import {useRef} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../atoms/Logo'


function FormLogin() {
    const form = useRef();
    const handlerClick = (e) => {
        e.preventDefault();
        const formData = new FormData(form.current);
        alert(formData.get('correo') + formData.get('contraseña'));
    }

    return ( 
        <div className="div-formlogin">
            <Logo clase={"img-form"}></Logo>
                <form ref={form}>
                <label htmlFor="email">Correo:</label>
                <input id="email" name='correo' type="email" />
                <label htmlFor="password">Contraseña:</label>
                <input id="password" name='contraseña' type="password" />
                <button onClick={handlerClick}>Iniciar sesión</button>
            </form>
            <Link to={'/signup'}>¿No tienes cuenta? Registrate aquí</Link>
        </div>
     );
}

export default FormLogin;