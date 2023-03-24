import { useContext } from "react";
import NutriologoContext from "../contexts/nutriologoContext";
import Header from "../components/molecules/Header";
import FormPaciente from "../components/molecules/FormPaciente";
import Aside from "../components/molecules/Aside";
function NuevoPaciente() {
    const {nutriologo, setNutriologo} = useContext(NutriologoContext);
    
    return ( 

        <div className="div-page">
            <Header></Header> 
            <div className="div-page-main">
                <Aside></Aside>
                <div className="div-page-content">
                <FormPaciente nutriologo={nutriologo}></FormPaciente>
                </div>
            </div>

        </div>

        
     );
}

export default NuevoPaciente;