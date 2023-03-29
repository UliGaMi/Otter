import { useContext } from "react";
import Header from "../components/molecules/Header";
import Aside from "../components/molecules/Aside";
import NutriologoContext from "../contexts/nutriologoContext";
import TarjetaNutriologo from "../components/atoms/TarjetaNutriologo";
import FormConfig from "../components/molecules/FormConfig";
import "../assets/styles/Configuracion.css"
function Configuración() {
    const {nutriologo, setNutriologo} = useContext(NutriologoContext);
    return ( 
        <>
            <Header></Header>
            <main className="main-configuracion-nutriologo">
            <Aside></Aside>
            <div className="div-configuracion-nutriologo">
            <TarjetaNutriologo nutriologo={nutriologo} clase={"div-tarjetanutriologo"}/>
            <FormConfig nutriologo={nutriologo}></FormConfig>
            </div>
            </main>

        </>
        
     );
}

export default Configuración;