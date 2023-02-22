import {useRef} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../atoms/Logo'


function FormSignup() {
    const form = useRef();
    const handlerClick = (e) => {
        e.preventDefault();
        const formData = new FormData(form.current);
        alert(formData.get('nombre') +formData.get('correo') + formData.get('contraseña'));
    }
    return ( 
        <div className="div-formsignup">
            <Logo clase={'img-form'}></Logo>
            <form ref={form}>
            <label htmlFor="name">Nombre:</label>
            <input id="name" name='nombre' type="text" />
            <label htmlFor="email">Correo:</label>
            <input id="email" name='correo' type="email" />
            <label htmlFor="password">Contraseña:</label>
            <input id="password" name='contraseña' type="password" />
            <button onClick={handlerClick}>Registrarse</button>
            </form>
            <Link to={'/login'}>¿Ya tienes cuenta? Inicia sesión aquí</Link>
        </div>
     );
}

export default FormSignup;