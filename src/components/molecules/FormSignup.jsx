import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import LabelInput from "../atoms/LabelInput";
import Logo from "../atoms/Logo";
import ButtonForm from "../atoms/ButtonForm";
import "../../assets/styles/Form.css";

function FormSignup() {
  const navigate = useNavigate();
  const form = useRef();
  const handlerClick = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    let uri = "https://otter.iothings.com.mx:3000/nutriologos";
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nombre: formData.get("nombre"),
        correo: formData.get("correo"),
        contrasenia: formData.get("contrasenia"),
      }),
    };

    fetch(uri, options)
      .then((response) => response.json())
      .then((data) => {
        alert(data.message);
        if (data.status) {
          navigate("/login");
        }
      });
  }
  return (
    <div className="div-registerbackground">

    <div className="div-form-main-register">
      <div className="div-form">
      <div className="div-imagenacceso">
        <Logo clase={"img-form"}></Logo>
          <h1>Bienvenido a Otter</h1>
        </div>
        <form ref={form}>
          <div className="div-inputacceso">
          <label htmlFor="nombre">Nombre completo</label>
          <input type="text" name={"nombre"} id={"name"}/>
          </div>
          <div className="div-inputacceso">
          <label htmlFor="correo">Correo Electrónico</label>
          <input type="email" name={"correo"} id={"email"}/>
          </div>
          <div className="div-inputacceso">
          <label htmlFor="contrasenia">Contraseña</label>
          <input type="password" name={"contrasenia"} id={"password"}/>
          </div>
          <div className="div-inputbutton">
          <ButtonForm handler={handlerClick} label={"Regístrate"}></ButtonForm>
          </div>
        </form>
        <Link className="link-form" to={"/login"}>
          ¿Ya tienes cuenta? Inicia sesión aquí
        </Link>
      </div>
    </div>
    </div>
  );
}

export default FormSignup;
