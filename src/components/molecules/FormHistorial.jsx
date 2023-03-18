import { useRef, useContext } from "react";
import PacienteContext from "../../contexts/pacienteContext";
import IsChangedContext from "../../contexts/isChangedContext";
import LabelInput from '../atoms/LabelInput';
import ButtonForm from '../atoms/ButtonForm';
import TokenContext from "../../contexts/tokenContext";

function FormHistorial() {
    const form = useRef();
    const {token, setToken} = useContext(TokenContext);
    const { paciente, setPaciente } = useContext(PacienteContext);
    const { isChanged, setIsChanged } = useContext(IsChangedContext);
    let getEdad = (dateString) => {
        let hoy = new Date()
        let fechaNacimiento = new Date(dateString)
        let edad = hoy.getFullYear() - fechaNacimiento.getFullYear()
        let diferenciaMeses = hoy.getMonth() - fechaNacimiento.getMonth()
        if (
          diferenciaMeses < 0 ||
          (diferenciaMeses === 0 && hoy.getDate() < fechaNacimiento.getDate())
        ) {
          edad--
        }
        return edad
    }
    const handlerClick = (e) => {
        e.preventDefault();
        if(paciente)
        {
          const formData = new FormData(form.current);
          let edad = getEdad(paciente.nacimiento);
          let ind = (paciente.genero === "M" ? 1 : 0);
          let imc = (formData.get('peso')/Math.pow(paciente.altura,2)).toFixed(2);
          let igc = ((1.2*imc) + (0.23*edad) - (10.8*ind) - 5.4).toFixed(2);
          let uri = "https://otter.iothings.com.mx:3000/historiales";
          let options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          },
          body: JSON.stringify({
            id_paciente: paciente._id,
            peso: formData.get("peso"),
            actividad_fisica: formData.get("actividad"),
            descripcion: formData.get("descripcion"),
            imc: imc,
            igc: igc
          }),
        };
    
        fetch(uri, options)
          .then((response) => response.json())
          .then((data) => {
            if(data.status)
            {
                setIsChanged(!isChanged);
            }
            alert(data.message);
          });
        }
        else
        {
            alert('Selecciona un paciente')
        }
        

        
    }
    return ( 
        <div className="div-formhistorial">
            <form ref={form}>
            <h1 className='formHeader'>Nuevo Historial</h1>
            <label htmlFor="actividad">Actividad física</label>
            <select name="actividad" id="actividad">
                <option value="Sedentario">Sedentario</option>
                <option value="Activo">Activo</option>
                <option value="Muy Activo">Muy activo</option>
            </select>
            <LabelInput name={"peso"} type={"number"} label="Peso" id={"weight"}></LabelInput>
            <LabelInput name={"descripcion"} type={"text"} label="Descripción" id={"description"}></LabelInput>
            <ButtonForm handler={handlerClick} label={"Agregar historial"}></ButtonForm>
            

            </form>
        </div>

     );
}

export default FormHistorial;