import { useContext } from "react";
import NutriologoContext from "../contexts/nutriologoContext";
import Header from "../components/molecules/Header";
import FormPaciente from "../components/molecules/FormPaciente";
import Aside from "../components/molecules/Aside";
function NuevoPaciente() {
    const {nutriologo, setNutriologo} = useContext(NutriologoContext);
    
    return ( 
        <>
            <Header></Header>
            <Aside></Aside>
            <FormPaciente nutriologo={nutriologo}></FormPaciente>
        </>
        
     );
}

export default NuevoPaciente;