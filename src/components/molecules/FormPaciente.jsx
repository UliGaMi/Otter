import {useContext, useRef} from 'react';
import LabelInput from '../atoms/LabelInput';
import ButtonForm from '../atoms/ButtonForm';
import TokenContext from "../../contexts/tokenContext";
import "../../assets/styles/FormPaciente.css"

function FormPaciente({nutriologo}) {
    const form = useRef();
    const {token, setToken} = useContext(TokenContext);
    const handlerClick = (e) => {
        e.preventDefault();
        const formData = new FormData(form.current);
        let uri = "https://otter.iothings.com.mx:3000/pacientes";
        let options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          },
          body: JSON.stringify({
            id_nutriologo: nutriologo._id,
            nombre: formData.get("nombre"),
            nacimiento: formData.get("nacimiento"),
            altura: formData.get("altura"),
            genero: formData.get("sexo")

          }),
        };
    
        fetch(uri, options)
          .then((response) => response.json())
          .then((data) => {
            alert(data.message);
          });
      }
    return ( 
      <div className="div-formpaciente">
            <form ref={form}>
            <h1 className='formHeader'>Registrar Paciente</h1>
            <div className='div-formpaciente-nombre'>
            <LabelInput name={"nombre"} type={"text"} label="Nombre completo" id={"name"}></LabelInput>
            </div>
            <div className='div-formpaciente-datospaciente'>

            <LabelInput name={"nacimiento"} type={"date"} label="Fecha de nacimiento" id={"birthday"}></LabelInput>

            <div className='div-formpaciente-select'>
            <label>Sexo</label>
            <select name="sexo">
                <option value="M">Masculino</option>
                <option value="F">Femenino</option>
            </select>
            </div>
            <LabelInput name={"altura"} type={"number"} label="Altura" id={"height"}></LabelInput>
            
            </div>
            <div className='div-botonpaciente'>
            <ButtonForm handler={handlerClick} label="Registrar paciente" ></ButtonForm>
            </div>
            </form>
        </div>
     );
}

export default FormPaciente;