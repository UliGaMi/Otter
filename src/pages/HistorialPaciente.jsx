import ComboPacientes from "../components/atoms/ComboPacientes";
import Historiales from "../components/atoms/Historiales";
import FormHistorial from "../components/molecules/FormHistorial";
import TarjetaPaciente from "../components/atoms/TarjetaPaciente";
import Header from "../components/molecules/Header";
import Aside from "../components/molecules/Aside";
function HistorialPaciente({nutriologo}) {
    return ( 
        <>
        <Header></Header>
        <Aside></Aside>
        <ComboPacientes nutriologo={nutriologo}></ComboPacientes>
        <Historiales></Historiales>
        <FormHistorial></FormHistorial>
        <TarjetaPaciente></TarjetaPaciente>
        </>
     );
}

export default HistorialPaciente;