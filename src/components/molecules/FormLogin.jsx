import { useRef, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../../contexts/userContext";
import NutriologoContext from "../../contexts/nutriologoContext";
import TokenContext from "../../contexts/tokenContext";
import Logo from "../atoms/Logo";
import LabelInput from "../atoms/LabelInput";
import ButtonForm from "../atoms/ButtonForm";
import "../../assets/styles/Form.css";

function FormLogin() {
  const navigate = useNavigate();
  const form = useRef();
  const {token, setToken} = useContext(TokenContext);
  const { isLoged, setIsLoged } = useContext(UserContext);
  const { nutriologo, setNutriologo } = useContext(NutriologoContext);
  const handlerClick = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    let uri = "https://otter.iothings.com.mx:3000/nutriologos/iniciar";
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        correo: formData.get("correo"),
        contrasenia: formData.get("contrasenia"),
      }),
    };

    fetch(uri, options)
      .then((response) => response.json())
      .then((data) => {
        alert(data.message);
        if (data.status) {
          setIsLoged(true);
          setNutriologo(data.nutriologo);
          setToken(data.token);
          navigate("/bienvenido");
        }
      });
  };

  return (
    <div className="div-form-main">
      <div className="div-form">
        <Logo clase={"img-form"}></Logo>
        <form ref={form}>
          <h1>Otter</h1>
          <LabelInput
            name={"correo"}
            type={"email"}
            label="Correo electrónico"
            id={"email"}
          ></LabelInput>
          <LabelInput
            name={"contrasenia"}
            type={"password"}
            label="Contraseña"
            id={"password"}
          ></LabelInput>
          <ButtonForm
            handler={handlerClick}
            label={"Iniciar sesión"}
          ></ButtonForm>
        </form>
        <Link className="link-form" to={"/signup"}>
          ¿No tienes cuenta? Registrate aquí
        </Link>
      </div>
    </div>
  );
}

export default FormLogin;
