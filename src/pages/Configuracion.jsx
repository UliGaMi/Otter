import { useContext } from "react";
import Header from "../components/molecules/Header";
import Aside from "../components/molecules/Aside";
import NutriologoContext from "../contexts/nutriologoContext";
import TarjetaNutriologo from "../components/atoms/TarjetaNutriologo";
import FormConfig from "../components/molecules/FormConfig";
function Configuración() {
    const {nutriologo, setNutriologo} = useContext(NutriologoContext);
    return ( 
        <>
            <Header></Header>
            <Aside></Aside>
            <TarjetaNutriologo nutriologo={nutriologo} clase={"div-tarjetanutriologo"}/>
            <FormConfig nutriologo={nutriologo}></FormConfig>

        </>
        
     );
}

export default Configuración;