import Header from "../components/molecules/Header";
import Aside from "../components/molecules/Aside";
import TablaCalcularEq from "../components/atoms/TablaCalcularEq";
function CalcularEquivalentes() {
    return ( 
        <div className="div-page">
            <Header></Header> 
            <div className="div-page-main">
                <Aside></Aside>
                <div className="div-page-content">
                    <TablaCalcularEq></TablaCalcularEq>
                </div>
            </div>

        </div>

     );
}

export default CalcularEquivalentes;