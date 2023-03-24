import Header from "../components/molecules/Header";
import Aside from "../components/molecules/Aside";
import '../assets/styles/Pages.css'
function Bienvenido({nutriologo}) {

    return ( 
    
        <div className="div-page">
            <Header></Header> 
            <div className="div-page-main">
                <Aside></Aside>
                <div className="div-page-content">
                    <h1>Bienvenid@ {nutriologo.nombre}</h1>
                </div>
            </div>

        </div>

        
    );
}

export default Bienvenido;