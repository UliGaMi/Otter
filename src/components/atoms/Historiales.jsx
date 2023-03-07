import { useContext, useEffect, useState } from "react";
import PacienteContext from "../../contexts/pacienteContext";
import IsChangedContext from "../../contexts/isChangedContext";
function Historiales() {
    const { paciente, setPaciente } = useContext(PacienteContext);
    const { isChanged, setIsChanged } = useContext(IsChangedContext);
    const [historiales, setHistoriales] = useState([]);
    const eliminarHistorial = (id) =>
    {
      let uri1 = `https://otter.iothings.com.mx:3000/historiales/${id}`;
      let options1 = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      };

      fetch(uri1, options1)
        .then((response) => response.json())
        .then((data) => {
          if(data.status)
          {
            setIsChanged(!isChanged);
          }
          alert(data.message);

        });
    }
    useEffect(() => {
      if(paciente)
      {
        let uri = `https://otter.iothings.com.mx:3000/historiales/${paciente._id}`;
        fetch(uri)
        .then((response) => response.json())
        .then((data) => {
          setHistoriales(data)
        });
      }
      else{
        setHistoriales([])
      }
        
    },[paciente, isChanged]);
    
    return (  
        <div className="div-historiales">
            {
            historiales.map(historial => (<div className="div-historiales-historial" key={historial._id}><label>Fecha: {historial.fecha}</label><label>Peso: {historial.peso}</label><label>Actividad física: {historial.actividad_fisica}</label><label>IMC: {historial.imc}</label><label>IGC: {historial.igc}</label><label>Descripción: {historial.descripcion}</label><button onClick={() => {eliminarHistorial(historial._id)}}>Borrar historial</button></div>))
            }
        </div>
    );
}

export default Historiales;