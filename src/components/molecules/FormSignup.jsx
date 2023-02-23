import {useRef} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../atoms/Logo'
import "../../assets/styles/Form.css"



function FormSignup() {
    const form = useRef();
    const handlerClick = (e) => {
        e.preventDefault();
        const formData = new FormData(form.current);
        alert(formData.get('nombre') +formData.get('correo') + formData.get('contraseña'));
    }
    return ( 
        <div className='div-form-main'>
        <div className="div-form">
            <Logo clase={'img-form'}></Logo>
            <form ref={form}>
                <div>
            <label htmlFor="name">Nombre:</label>
            <input id="name" name='nombre' type="text" />
            </div>
            <div>
            <label htmlFor="email">Correo:</label>
            <input id="email" name='correo' type="email" />
            </div>
            <div>
            <label htmlFor="password">Contraseña:</label>
            <input id="password" name='contraseña' type="password" />
            </div>

            <button onClick={handlerClick}>Registrarse</button>
            </form>
            <Link to={'/login'}>¿Ya tienes cuenta? Inicia sesión aquí</Link>
        </div>
        </div>
     );
}

export default FormSignup;