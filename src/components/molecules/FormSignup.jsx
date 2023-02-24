import {useRef} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../atoms/Logo'
import "../../assets/styles/Form.css"



function FormSignup() {
    const navigate = useNavigate();
    const form = useRef();
    const handlerClick = (e) => {
        e.preventDefault();
        const formData = new FormData(form.current);
        let uri = 'http://35.172.101.131:3000/nutriologos';
        let options = {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
               nombre: formData.get('nombre'),
               correo: formData.get('correo'),
               contrasenia: formData.get('contrasenia'),
            })
        }

        fetch(uri, options)
        .then((response) => response.json())
        .then((data) => {
            alert(data.message)
            if(data.status)
            {
                navigate('/login');
            }
        });

    }
    return ( 
        <div className='div-form-main-register'>
        <div className="div-form">
            <Logo clase={'img-form'}></Logo>
            <form ref={form}>
                <h1>Bienvenido a Otter</h1>
                <div>
            <label htmlFor="name">Nombre completo</label>
            <input id="name" name='nombre' type="text" />
            </div>
            <div>
            <label htmlFor="email">Correo electronico</label>
            <input id="email" name='correo' type="email" />
            </div>
            <div>
            <label htmlFor="password">Contraseña</label>
            <input id="password" name='contrasenia' type="password" />
            </div>

            <button onClick={handlerClick}>Registrarse</button>
            </form>
            <Link className='link-form' to={'/login'}>¿Ya tienes cuenta? Inicia sesión aquí</Link>
        </div>
        </div>
     );
}

export default FormSignup;