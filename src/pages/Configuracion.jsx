import { useContext } from "react";
import Header from "../components/molecules/Header";
import Aside from "../components/molecules/Aside";
import NutriologoContext from "../contexts/nutriologoContext";
import TarjetaNutriologo from "../components/atoms/TarjetaNutriologo";
import FormConfig from "../components/molecules/FormConfig";
function Configuración() {
    const {nutriologo, setNutriologo} = useContext(NutriologoContext);
    return ( 
        <div className="div-page">
            <Header></Header> 
            <div className="div-page-main">
                <Aside></Aside>
                <div className="div-page-content">
                <TarjetaNutriologo nutriologo={nutriologo} clase={"div-tarjetanutriologo"}/>
                <FormConfig nutriologo={nutriologo}></FormConfig>
                </div>
            </div>

        </div>
 
        
     );
}

export default Configuración;