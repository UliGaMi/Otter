import ButtonAside from "../atoms/ButtonAside";
import historial from "../../assets/imgs/Historial.png"
import tabla from "../../assets/imgs/Tabla.png"
import paciente from "../../assets/imgs/Paciente.png"
import "../../assets/styles/Aside.css"
function Aside() {
    return ( 
        <aside className="aside-display">
            <ButtonAside img={historial} label="Historial de pacientes" url={"/nuevopaciente"}></ButtonAside>
            <ButtonAside img={paciente} label="Nuevo Paciente" url={"/nuevopaciente"}></ButtonAside>
            <ButtonAside img={tabla} label="Tablas nutricionales" url={"/nuevopaciente"}></ButtonAside>
        </aside>
     );
}

export default Aside;