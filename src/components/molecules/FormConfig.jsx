import { useRef, useContext } from "react";
import LabelInput from "../atoms/LabelInput";
import ButtonForm from "../atoms/ButtonForm";
import TokenContext from "../../contexts/tokenContext";
function FormConfig({ nutriologo }) {
  const {token, setToken} = useContext(TokenContext);
  const form = useRef();
  const handlerClick = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    if (formData.get("contrasenia") === formData.get("contrasenia2")) {
      let uri = `https://otter.iothings.com.mx:3000/nutriologos/${nutriologo._id}`;
      let options = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({
          contrasenia: formData.get("contrasenia"),
        }),
      };

      fetch(uri, options)
        .then((response) => response.json())
        .then((data) => {
          alert(data.message);
        });
    } else {
      alert("Las contraseñas no coinciden");
    }
  }
  return (
    <div className="div-formconfig">
      <form ref={form}>
        <h1>¿Quieres cambiar tu contraseña?</h1>
        <div className="div-inputacceso">
          <label htmlFor="contrasenia">Contraseña actual</label>
          <input type="password" name={"contrasenia"} id={"password1"}/>
          </div>

          <div className="div-inputacceso">
          <label htmlFor="contrasenia2"> Nueva contraseña</label>
          <input type="password" name={"contrasenia2"} id={"password2"}/>
          </div>

        <ButtonForm handler={handlerClick} label={"Cambiar Contraseña"}></ButtonForm>
      </form>
    </div>
  );
}

export default FormConfig;
