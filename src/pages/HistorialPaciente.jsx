import ComboPacientes from "../components/atoms/ComboPacientes";
import Historiales from "../components/atoms/Historiales";
import FormHistorial from "../components/molecules/FormHistorial";
import TarjetaPaciente from "../components/atoms/TarjetaPaciente";
import Header from "../components/molecules/Header";
import Aside from "../components/molecules/Aside";
import '../assets/styles/HistorialPaciente.css'


function HistorialPaciente({nutriologo}) {
    return ( 
        <>
        <div className="div-page">
            <Header></Header> 
            <div className="div-page-main">
                <Aside></Aside>
                <div className="div-page-content">
                    <div className="tarjeta1-historialpaciente">
                        <ComboPacientes nutriologo={nutriologo}></ComboPacientes>
                        <TarjetaPaciente></TarjetaPaciente>
                    </div>
                    <div className="tarjeta2-historialpaciente">
                        <FormHistorial></FormHistorial>
                    </div>
                    <div className="tarjeta3-historialpaciente">
                        <Historiales></Historiales>
                    </div>
                </div>
            </div>

        </div>
        
        
        
        
        
        </>
     );
}

export default HistorialPaciente;