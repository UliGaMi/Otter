import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import KCContext from "../../contexts/kcContext";
import PacienteContext from "../../contexts/pacienteContext";
import ButtonCancelar from "./ButtonCancelar";
import TokenContext from "../../contexts/tokenContext";
import MenuContext from "../../contexts/menuContext";
function TablaCalcularEq() {
  const {menu, setMenu} = useContext(MenuContext);
  const {token,setToken} = useContext(TokenContext);
  const navigate = useNavigate();
    const {paciente, setPaciente} = useContext(PacienteContext);
    const {kc, setKC} = useContext(KCContext);
    const [equivalentes, setEquivalentes] = useState({ verduras: 0, frutas: 0, cyt_sg: 0, cyt_cg: 0, leguminosas: 0 , animal_mb: 0, animal_b: 0 , animal_m: 0, animal_a: 0 , leche_d: 0, leche_sd:0, leche_e: 0, leche_ca: 0, aceite_sp: 0 , aceite_cp: 0, azucar_sg: 0, azucar_cg: 0, lde: 0 , alcohol: 0 });
    const handlerChange1 = (e) => {
        setEquivalentes({ ...equivalentes, verduras: e.target.value});
      };
      const handlerChange2 = (e) => {
        setEquivalentes({ ...equivalentes, frutas: e.target.value});
      };
      const handlerChange3 = (e) => {
        setEquivalentes({ ...equivalentes, cyt_sg: e.target.value});
      };
      const handlerChange4 = (e) => {
        setEquivalentes({ ...equivalentes, cyt_cg: e.target.value});
      };
      const handlerChange5 = (e) => {
        setEquivalentes({ ...equivalentes, leguminosas: e.target.value});
      };
      const handlerChange6 = (e) => {
        setEquivalentes({ ...equivalentes, animal_mb: e.target.value});
      };
      const handlerChange7 = (e) => {
        setEquivalentes({ ...equivalentes, animal_b: e.target.value});
      };
      const handlerChange8 = (e) => {
        setEquivalentes({ ...equivalentes, animal_m: e.target.value});
      };
      const handlerChange9 = (e) => {
        setEquivalentes({ ...equivalentes, animal_a: e.target.value});
      };
      const handlerChange10 = (e) => {
        setEquivalentes({ ...equivalentes, leche_d: e.target.value});
      };
      const handlerChange11 = (e) => {
        setEquivalentes({ ...equivalentes, leche_sd: e.target.value});
      };
      const handlerChange12 = (e) => {
        setEquivalentes({ ...equivalentes, leche_e: e.target.value});
      };
      const handlerChange13 = (e) => {
        setEquivalentes({ ...equivalentes, leche_ca: e.target.value});
      };
      const handlerChange14 = (e) => {
        setEquivalentes({ ...equivalentes, aceite_sp: e.target.value});
      };
      const handlerChange15 = (e) => {
        setEquivalentes({ ...equivalentes, aceite_cp: e.target.value});
      };
      const handlerChange16 = (e) => {
        setEquivalentes({ ...equivalentes, azucar_sg: e.target.value});
      };
      const handlerChange17 = (e) => {
        setEquivalentes({ ...equivalentes, azucar_cg: e.target.value});
      };
      const handlerChange18 = (e) => {
        setEquivalentes({ ...equivalentes, lde: e.target.value});
      };
      const handlerChange19 = (e) => {
        setEquivalentes({ ...equivalentes, alcohol: e.target.value});
      };
      const handlerClick = (e) => {
        let options6 = {
          method: "GET",
          headers: {
          "Authorization": `Bearer ${token}`
          },
        }
        fetch(`https://otter.iothings.com.mx:3000/kcs/${paciente._id}`, options6)
            .then((response) => response.json())
            .then((data) => {
                if(data.length != 0)
                {
                  let uri1 = `https://otter.iothings.com.mx:3000/kcs/paciente/${paciente._id}`;
                  let options1 = {
                    method: "DELETE",
                    headers: {
                      "Content-Type": "application/json",
                      "Authorization": `Bearer ${token}`
                    },
                  };
      
                  fetch(uri1, options1)
                  .then((response) => response.json())
                  .then((data) => {
                  alert("Tabla anterior de kc borrada");
                  });
                  let options5 = {
                    method: "GET",
                    headers: {
                    "Authorization": `Bearer ${token}`
                    },
                  }
                  fetch(`https://otter.iothings.com.mx:3000/equivalentes/${paciente._id}`, options5)
                  .then((response) => response.json())
                  .then((data) => {
                    if(data.length != 0)
                    {
                      let uri2 = `https://otter.iothings.com.mx:3000/equivalentes/paciente/${paciente._id}`;
                      let options2 = {
                      method: "DELETE",
                      headers: {
                      "Content-Type": "application/json",
                      "Authorization": `Bearer ${token}`
                      },
                      };
      
                      fetch(uri2, options2)
                      .then((response) => response.json())
                      .then((data) => {
                      alert("Tabla anterior de equivalentes borrada");
                      });
                    }
                  });
                }
                  let uri3 = "https://otter.iothings.com.mx:3000/kcs";
                  let options3 = {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                      "Authorization": `Bearer ${token}`
                    },
                    body: JSON.stringify({
                      id_paciente: paciente._id,
                      geb: kc.geb,
                      ge: kc.ge,
                      eta: kc.eta,
                      efa: kc.efa,
                      hco: kc.hco,
                      prot: kc.prot,
                      lip: kc.lip
                    }),
                  };
            
                  fetch(uri3, options3)
                    .then((response) => response.json())
                    .then((data) => {
                      if(data.status)
                      {
                        let uri4 = "https://otter.iothings.com.mx:3000/equivalentes";
                        let options4 = {
                        method: "POST",
                        headers: {
                          "Content-Type": "application/json",
                          "Authorization": `Bearer ${token}`
                        },
                        body: JSON.stringify({
                          id_paciente: paciente._id,
                          verduras: equivalentes.verduras,
                          frutas: equivalentes.frutas,
                          cyt_sg: equivalentes.cyt_sg,
                          cyt_cg: equivalentes.cyt_cg,
                          leguminosas: equivalentes.leguminosas,
                          animal_mb: equivalentes.animal_mb,
                          animal_b: equivalentes.animal_b,
                          animal_m: equivalentes.animal_m,
                          animal_a: equivalentes.animal_a,
                          leche_d: equivalentes.leche_d,
                          leche_sd: equivalentes.leche_sd,
                          leche_e: equivalentes.leche_e,
                          leche_ca: equivalentes.leche_ca,
                          aceite_sp: equivalentes.aceite_sp,
                          aceite_cp: equivalentes.aceite_cp,
                          azucar_sg: equivalentes.azucar_sg,
                          azucar_cg: equivalentes.azucar_cg,
                          lde: equivalentes.lde,
                          alcohol: equivalentes.alcohol
                           
                          
                        }),
                        };
            
                      fetch(uri4, options4)
                      .then((response) => response.json())
                      .then((data) => {
                      if(data.status)
                      {
                        setMenu(false);
                        setKC(null);
                        setPaciente(null);
                        navigate("/tablas")
                      }
                      alert(data.message);
                      });
                      }
                      alert(data.message);
                      });
                
            });
      }
    return ( 
        <>
        <table>
            <thead>
                <tr>
                    <td>Subgrupos alimenticios</td>
                    <td>Número de equivalentes</td>
                    <td>Energía</td>
                    <td>Proteína</td>
                    <td>Lípidos</td>
                    <td>Hidratos de carbono</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Verduras</td>
                    <td><input type="number" placeholder="0" onChange={handlerChange1}/></td>
                    <td>{25*equivalentes.verduras}</td>
                    <td>{2*equivalentes.verduras}</td>
                    <td>{0}</td>
                    <td>{4*equivalentes.verduras}</td>
                </tr>
                <tr>
                    <td>Frutas</td>
                    <td><input type="number" placeholder="0" onChange={handlerChange2}/></td>
                    <td>{60*equivalentes.frutas}</td>
                    <td>{0}</td>
                    <td>{0}</td>
                    <td>{15*equivalentes.frutas}</td>
                </tr>
                <tr>
                    <td>Cereales y tuberculos sin grasa</td>
                    <td><input type="number" placeholder="0" onChange={handlerChange3}/></td>
                    <td>{70*equivalentes.cyt_sg}</td>
                    <td>{2*equivalentes.cyt_sg}</td>
                    <td>{0}</td>
                    <td>{15*equivalentes.cyt_sg}</td>
                </tr>
                <tr>
                    <td>Cereales y tuberculos con grasa</td>
                    <td><input type="number" placeholder="0" onChange={handlerChange4}/></td>
                    <td>{115*equivalentes.cyt_cg}</td>
                    <td>{2*equivalentes.cyt_cg}</td>
                    <td>{5*equivalentes.cyt_cg}</td>
                    <td>{15*equivalentes.cyt_cg}</td>
                </tr>
                <tr>
                    <td>Leguminosas</td>
                    <td><input type="number" placeholder="0" onChange={handlerChange5}/></td>
                    <td>{120*equivalentes.leguminosas}</td>
                    <td>{8*equivalentes.leguminosas}</td>
                    <td>{1*equivalentes.leguminosas}</td>
                    <td>{20*equivalentes.leguminosas}</td>
                </tr>
                <tr>
                    <td>Alimentos de origen animal muy bajo</td>
                    <td><input type="number" placeholder="0" onChange={handlerChange6}/></td>
                    <td>{40*equivalentes.animal_mb}</td>
                    <td>{7*equivalentes.animal_mb}</td>
                    <td>{1*equivalentes.animal_mb}</td>
                    <td>{0}</td>
                </tr>
                <tr>
                    <td>Alimentos de origen animal bajo</td>
                    <td><input type="number" placeholder="0" onChange={handlerChange7}/></td>
                    <td>{55*equivalentes.animal_b}</td>
                    <td>{7*equivalentes.animal_b}</td>
                    <td>{3*equivalentes.animal_b}</td>
                    <td>{0}</td>
                </tr>
                <tr>
                    <td>Alimentos de origen animal moderado</td>
                    <td><input type="number" placeholder="0" onChange={handlerChange8}/></td>
                    <td>{75*equivalentes.animal_m}</td>
                    <td>{7*equivalentes.animal_m}</td>
                    <td>{5*equivalentes.animal_m}</td>
                    <td>{0}</td>
                </tr>
                <tr>
                    <td>Alimentos de origen animal alto</td>
                    <td><input type="number" placeholder="0" onChange={handlerChange9}/></td>
                    <td>{100*equivalentes.animal_a}</td>
                    <td>{7*equivalentes.animal_a}</td>
                    <td>{8*equivalentes.animal_a}</td>
                    <td>{0}</td>
                </tr>
                <tr>
                    <td>Leche descremada</td>
                    <td><input type="number" placeholder="0" onChange={handlerChange10}/></td>
                    <td>{95*equivalentes.leche_d}</td>
                    <td>{9*equivalentes.leche_d}</td>
                    <td>{2*equivalentes.leche_d}</td>
                    <td>{12*equivalentes.leche_d}</td>
                </tr>
                <tr>
                    <td>Leche semidescremada</td>
                    <td><input type="number" placeholder="0" onChange={handlerChange11}/></td>
                    <td>{110*equivalentes.leche_sd}</td>
                    <td>{9*equivalentes.leche_sd}</td>
                    <td>{4*equivalentes.leche_sd}</td>
                    <td>{12*equivalentes.leche_sd}</td>
                </tr>
                <tr>
                    <td>Leche entera</td>
                    <td><input type="number" placeholder="0" onChange={handlerChange12}/></td>
                    <td>{150*equivalentes.leche_e}</td>
                    <td>{9*equivalentes.leche_e}</td>
                    <td>{8*equivalentes.leche_e}</td>
                    <td>{12*equivalentes.leche_e}</td>
                </tr>
                <tr>
                    <td>Leche con azúcar</td>
                    <td><input type="number" placeholder="0" onChange={handlerChange13}/></td>
                    <td>{200*equivalentes.leche_ca}</td>
                    <td>{8*equivalentes.leche_ca}</td>
                    <td>{5*equivalentes.leche_ca}</td>
                    <td>{30*equivalentes.leche_ca}</td>
                </tr>
                <tr>
                    <td>Aceites y grasas sin proteína</td>
                    <td><input type="number" placeholder="0" onChange={handlerChange14}/></td>
                    <td>{45*equivalentes.aceite_sp}</td>
                    <td>{0}</td>
                    <td>{5*equivalentes.aceite_sp}</td>
                    <td>{0}</td>
                </tr>
                <tr>
                    <td>Aceites y grasas con proteína</td>
                    <td><input type="number" placeholder="0" onChange={handlerChange15}/></td>
                    <td>{70*equivalentes.aceite_cp}</td>
                    <td>{3*equivalentes.aceite_cp}</td>
                    <td>{5*equivalentes.aceite_cp}</td>
                    <td>{3*equivalentes.aceite_cp}</td>
                </tr>
                <tr>
                    <td>Azucares sin grasa</td>
                    <td><input type="number" placeholder="0" onChange={handlerChange16}/></td>
                    <td>{40*equivalentes.azucar_sg}</td>
                    <td>{0}</td>
                    <td>{0}</td>
                    <td>{10*equivalentes.azucar_sg}</td>
                </tr>
                <tr>
                    <td>Azucares con grasa</td>
                    <td><input type="number" placeholder="0" onChange={handlerChange17}/></td>
                    <td>{85*equivalentes.azucar_cg}</td>
                    <td>{0}</td>
                    <td>{5*equivalentes.azucar_cg}</td>
                    <td>{10*equivalentes.azucar_cg}</td>
                </tr>
                <tr>
                    <td>Alimentos libres de energía</td>
                    <td><input type="number" placeholder="0" onChange={handlerChange18}/></td>
                    <td>{0}</td>
                    <td>{0}</td>
                    <td>{0}</td>
                    <td>{0}</td>
                </tr>
                <tr>
                    <td>Bebidas alcohólicas</td>
                    <td><input type="number" placeholder="0" onChange={handlerChange19}/></td>
                    <td>{140*equivalentes.alcohol}</td>
                    <td>{0}</td>
                    <td>{0}</td>
                    <td>{20*equivalentes.alcohol}</td>
                </tr>
                <tr>
                    <td>Total</td>
                    <td>{Number(equivalentes.verduras) + Number(equivalentes.frutas) + Number(equivalentes.cyt_sg) + Number(equivalentes.cyt_cg) + Number(equivalentes.leguminosas) + Number(equivalentes.animal_mb) + Number(equivalentes.animal_b) + Number(equivalentes.animal_m) + Number(equivalentes.animal_a) + Number(equivalentes.leche_d) + Number(equivalentes.leche_sd) + Number(equivalentes.leche_e) + Number(equivalentes.leche_ca) + Number(equivalentes.aceite_sp) + Number(equivalentes.aceite_cp) + Number(equivalentes.azucar_sg) + Number(equivalentes.azucar_cg) + Number(equivalentes.lde) + Number(equivalentes.alcohol)}</td>
                    <td>{25*equivalentes.verduras + 60*equivalentes.frutas + 70*equivalentes.cyt_sg + 115*equivalentes.cyt_cg + 120*equivalentes.leguminosas + 40*equivalentes.animal_mb + 55*equivalentes.animal_b + 75*equivalentes.animal_m + 100*equivalentes.animal_a + 95*equivalentes.leche_d + 110*equivalentes.leche_sd + 150*equivalentes.leche_e + 200*equivalentes.leche_ca + 45*equivalentes.aceite_sp + 70*equivalentes.aceite_cp + 40*equivalentes.azucar_sg + 85*equivalentes.azucar_cg + 140*equivalentes.alcohol}</td>
                    <td>{2*equivalentes.verduras + 2*equivalentes.cyt_sg + 2*equivalentes.cyt_cg + 8*equivalentes.leguminosas + 7*equivalentes.animal_mb + 7*equivalentes.animal_b + 7*equivalentes.animal_m + 7*equivalentes.animal_a + 9*equivalentes.leche_d + 9*equivalentes.leche_sd + 9*equivalentes.leche_e + 8*equivalentes.leche_ca + 3*equivalentes.aceite_cp}</td>
                    <td>{5*equivalentes.cyt_cg + 1*equivalentes.leguminosas + 1*equivalentes.animal_mb + 3*equivalentes.animal_b + 5*equivalentes.animal_m + 8*equivalentes.animal_a + 2*equivalentes.leche_d + 4*equivalentes.leche_sd + 8*equivalentes.leche_e + 5*equivalentes.leche_ca + 5*equivalentes.aceite_sp + 5*equivalentes.aceite_cp + 0 + 5*equivalentes.azucar_cg}</td>
                    <td>{4*equivalentes.verduras + 15*equivalentes.frutas + 15*equivalentes.cyt_sg + 15*equivalentes.cyt_cg + 20*equivalentes.leguminosas + 12*equivalentes.leche_d + 12*equivalentes.leche_sd + 12*equivalentes.leche_e + 30*equivalentes.leche_ca + 3*equivalentes.aceite_cp + 10*equivalentes.azucar_sg + 10*equivalentes.azucar_cg + 20*equivalentes.alcohol}</td>
                </tr>
                <tr>
                    <td>Cantidades recomendadas</td>
                    <td></td>
                    <td>{kc.ge}</td>
                    <td>{((kc.ge*kc.prot)/4).toFixed(2)}</td>
                    <td>{((kc.ge*kc.lip)/9).toFixed(2)}</td>
                    <td>{((kc.ge*kc.hco)/4).toFixed(2)}</td>
                </tr>


            </tbody>
        </table>
        <ButtonCancelar></ButtonCancelar>
        <button onClick={handlerClick}>Guardar tablas</button>
        </>
     );
}

export default TablaCalcularEq;