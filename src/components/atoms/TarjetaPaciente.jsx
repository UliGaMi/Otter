import { useContext } from "react";
import PacienteContext from "../../contexts/pacienteContext";
import TokenContext from "../../contexts/tokenContext";
function TarjetaPaciente() {
  const { paciente, setPaciente } = useContext(PacienteContext);
  const {token,setToken} = useContext(TokenContext);
  let nombre;
  let altura;
  let genero;
  let edad;
  let handlerClick;
  let getEdad = (dateString) => {
    let hoy = new Date();
    let fechaNacimiento = new Date(dateString);
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    let diferenciaMeses = hoy.getMonth() - fechaNacimiento.getMonth();
    if (
      diferenciaMeses < 0 ||
      (diferenciaMeses === 0 && hoy.getDate() < fechaNacimiento.getDate())
    ) {
      edad--;
    }
    return edad;
  };
  if (paciente) {
    nombre = paciente.nombre;
    altura = paciente.altura;
    edad = getEdad(paciente.nacimiento);
    genero = paciente.genero;
    handlerClick = (e) => {
      let uri1 = `https://otter.iothings.com.mx:3000/pacientes/${paciente._id}`;
      let options1 = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
      };

      fetch(uri1, options1)
        .then((response) => response.json())
        .then((data) => {
          if (data.status) {
            alert(data.message);
            setPaciente(null);
            let uri2 = `https://otter.iothings.com.mx:3000/historiales/paciente/${paciente._id}`;
            let options2 = {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
              },
            };

            fetch(uri2, options2)
              .then((response) => response.json())
              .then((data) => {
                alert(data.message);
              });
          } else {
            alert(data.message);
          }
        });
    };
  } else {
    nombre, altura, edad, genero = "";
    handlerClick = (e) => {
        alert('Selecciona un paciente')
    };
  }
  return (
    <div>
      <label>Paciente: {nombre}</label>
      <label>Edad: {edad}</label>
      <label>Altura: {altura}</label>
      <label>Genero: {genero}</label>
      <button onClick={handlerClick}>
        Eliminar paciente
      </button>
    </div>
  );
}

export default TarjetaPaciente;
