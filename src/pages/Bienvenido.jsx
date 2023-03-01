import Header from "../components/molecules/Header";
import Aside from "../components/molecules/Aside";
function Bienvenido({nutriologo}) {
    return (  
        <>
        <Header></Header>
        <h1> Bienvenid@ {nutriologo.nombre}</h1>
        <Aside></Aside>
        </>
        
    );
}

export default Bienvenido;