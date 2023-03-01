import {useRef} from 'react';
import LabelInput from '../atoms/LabelInput';
import ButtonForm from '../atoms/ButtonForm';

function FormPaciente({nutriologo}) {
    const form = useRef();
    const handlerClick = (e) => {
        e.preventDefault();
        const formData = new FormData(form.current);
        let uri = "http://35.172.101.131:3000/pacientes";
        let options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id_nutriologo: nutriologo._id,
            nombre: formData.get("nombre"),
            peso: formData.get("peso"),
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
            <h1>Registrar Paciente</h1>
            <LabelInput name={"nombre"} type={"text"} label="Nombre completo" id={"name"}></LabelInput>
            <LabelInput name={"nacimiento"} type={"date"} label="Fecha de nacimiento" id={"birthday"}></LabelInput>
            <LabelInput name={"peso"} type={"number"} label="Peso" id={"weight"}></LabelInput>
            <LabelInput name={"altura"} type={"number"} label="Altura" id={"height"}></LabelInput>
            <select name="sexo">
                <option value="M">Masculino</option>
                <option value="F">Femenino</option>
            </select>
            <ButtonForm handler={handlerClick} label="Registrar paciente" ></ButtonForm>

                
            </form>

        </div>
     );
}

export default FormPaciente;