import { useContext } from "react";
import NutriologoContext from "../contexts/nutriologoContext";
import Header from "../components/molecules/Header";
import FormPaciente from "../components/molecules/FormPaciente";
import Aside from "../components/molecules/Aside";
import "../assets/styles/NuevoPaciente.css"
function NuevoPaciente() {
    const {nutriologo, setNutriologo} = useContext(NutriologoContext);
    
    return ( 
        <>
            <Header></Header>
            <main className="main-añadir-paciente">
            <Aside></Aside>
            <FormPaciente nutriologo={nutriologo}></FormPaciente>
            </main>
        </>
        
     );
}

export default NuevoPaciente;