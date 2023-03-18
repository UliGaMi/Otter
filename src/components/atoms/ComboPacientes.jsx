import { useEffect, useState, useContext, useRef} from "react";
import PacienteContext from "../../contexts/pacienteContext";
import TokenContext from "../../contexts/tokenContext";

function ComboPacientes({nutriologo}) {
  const form = useRef();
  const {token,setToken} = useContext(TokenContext);
  const { paciente, setPaciente } = useContext(PacienteContext);
  const [pacientes, setPacientes] = useState([]);
  //setPaciente(null);
  const handlerChange = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    setPaciente(pacientes.find(item => item._id === formData.get('select')));

  }

  useEffect(() => {
    let options = {
      method: "GET",
      headers: {
      "Authorization": `Bearer ${token}`
      },
    }
    let uri = `https://otter.iothings.com.mx:3000/pacientes/${nutriologo._id}`;
      fetch(uri, options)
        .then((response) => response.json())
        .then((data) => {
          setPacientes(data)
        });
  });

  return (
    <form ref={form}>
    <select name="select" onChange={handlerChange} className="select-combopacientes">
      <option value={null}></option>
      {
        pacientes.map(paciente => (<option key={paciente._id} value={paciente._id}>{paciente.nombre}</option>))
      }
    </select>
    </form>
  );
}

export default ComboPacientes;
