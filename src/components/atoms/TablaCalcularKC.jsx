import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import KCContext from "../../contexts/kcContext";

function TablaCalcularKC({ge, geb, eta, efa, paciente}) {
  const {kc, setKC} = useContext(KCContext);
  const navigate = useNavigate();
  const [porcentajes, setPorcentajes] = useState({ hco: 0, prot: 0, lip: 0 });
  const handlerChange1 = (e) => {
    setPorcentajes({ ...porcentajes, hco: e.target.value/100 });
  };
  const handlerChange2 = (e) => {
    setPorcentajes({ ...porcentajes, prot: e.target.value/100 });
  };
  const handlerChange3 = (e) => {
    setPorcentajes({ ...porcentajes, lip: e.target.value/100 });
  };
  const handlerClick = () => {
    if((porcentajes.hco*100 + porcentajes.prot*100 + porcentajes.lip*100) == 100)
    {
        setKC({id_paciente: paciente._id, geb: geb, ge: ge, eta: eta, efa: efa, hco: porcentajes.hco, prot: porcentajes.prot, lip: porcentajes.lip});
        navigate("/calcularequivalentes");

    }
    else{
        alert("Los porcentajes tienen que sumar el 100 porciento");
    }
    
  }
  return (
    <>
    <table>
      <thead>
        <tr>
          <td></td>
          <td>Kcal totales</td>
          <td>% Kcal</td>
          <td>Kcal parciales</td>
          <td>K/g</td>
          <td>Gramos recomendados</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>HCO</td>
          <td>{ge}</td>
          <td>
            <input type="number" placeholder="0" onChange={handlerChange1} />
          </td>
          <td>{ge * porcentajes.hco}</td>
          <td>4</td>
          <td>{(ge * porcentajes.hco) / 4}</td>
        </tr>
        <tr>
          <td>PROT</td>
          <td>{ge}</td>
          <td>
            <input type="number" placeholder="0" onChange={handlerChange2} />
          </td>
          <td>{ge * porcentajes.prot}</td>
          <td>4</td>
          <td>{(ge * porcentajes.prot) / 4}</td>
        </tr>
        <tr>
          <td>LIP</td>
          <td>{ge}</td>
          <td>
            <input type="number" placeholder="0" onChange={handlerChange3} />
          </td>
          <td>{ge * porcentajes.lip}</td>
          <td>9</td>
          <td>{(ge * porcentajes.lip) / 9}</td>
        </tr>
      </tbody>
    </table>
        <button onClick={() => {alert(geb)}}>Cancelar</button>
        <button onClick={handlerClick}>Continuar</button>
    </>
  );
}

export default TablaCalcularKC;
