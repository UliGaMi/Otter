import { useState, useEffect, useContext} from "react";
import Header from "../components/molecules/Header";
import Aside from "../components/molecules/Aside";
import TablaCalcularKC from "../components/atoms/TablaCalcularKC";
import UltimoHistContext from "../contexts/ultimoHistContext";

function CalcularKC({paciente}) {
    const {ultimoHist, setUltimoHist} = useContext(UltimoHistContext);
    const [ge, setGe] = useState(0);
    const [geb, setGeb] = useState(0);
    const [eta, setEta] = useState(0);
    const [efa, setEfa] = useState(0);
    let PorcentajeAct;
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
    useEffect(() => {
        PorcentajeAct = (ultimoHist.actividad_fisica === "Sedentario" ? 0.1 : (ultimoHist.actividad_fisica === "Activo" ? 0.2 : 0.3));
        setGeb(665 + (9.7*ultimoHist.peso) + (1.8*paciente.altura) - (4.7*getEdad(paciente.nacimiento)));
        setEta(0.1*geb);
        setEfa(eta*PorcentajeAct);
        setGe(geb+eta+efa);

    });

    


    
    return ( 
        <>
        <Header></Header>
        <Aside></Aside>
        <TablaCalcularKC ge={ge} geb={geb} eta={eta} efa={efa} paciente={paciente}></TablaCalcularKC>
        </>

     );
}

export default CalcularKC;