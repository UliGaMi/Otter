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
        const formData = new FormData(form.current);
        let uri = 'http://35.172.101.131:3000/nutriologos/iniciar';
        let options = {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
               correo: formData.get('correo'),
               contrasenia: formData.get('contrasenia')
            })
        }

        fetch(uri, options)
        .then((response) => response.json())
        .then((data) => {
            alert(data.message);
            if(data.status)
            {
                setIsLoged(true);
                navigate('/perfil');
            }
        });

    }

    return ( 
        <div className='div-form-main'>
        <div className="div-form">
            <Logo clase={"img-form"}></Logo>
                <form ref={form}>
                <h1>Otter</h1>
                <div>
                <label htmlFor="email">Correo electronico</label>
                <input id="email" name='correo' type="email" />
                </div>
                <div>
                <label htmlFor="password">Contraseña</label>
                <input id="password" name='contrasenia' type="password" />
                </div>
                <button onClick={handlerClick}>Iniciar sesión</button>
            </form>
            <Link className='link-form' to={'/signup'}>¿No tienes cuenta? Registrate aquí</Link>
            </div>
        </div>
     );
}

export default FormLogin;