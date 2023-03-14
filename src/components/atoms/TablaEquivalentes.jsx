function TablaEquivalentes({equivalentes, kc}) {
    return ( 
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
                    <td>{equivalentes.verduras}</td>
                    <td>{25*equivalentes.verduras}</td>
                    <td>{2*equivalentes.verduras}</td>
                    <td>{0}</td>
                    <td>{4*equivalentes.verduras}</td>
                </tr>
                <tr>
                    <td>Frutas</td>
                    <td>{equivalentes.frutas}</td>
                    <td>{60*equivalentes.frutas}</td>
                    <td>{0}</td>
                    <td>{0}</td>
                    <td>{15*equivalentes.frutas}</td>
                </tr>
                <tr>
                    <td>Cereales y tuberculos sin grasa</td>
                    <td>{equivalentes.cyt_sg}</td>
                    <td>{70*equivalentes.cyt_sg}</td>
                    <td>{2*equivalentes.cyt_sg}</td>
                    <td>{0}</td>
                    <td>{15*equivalentes.cyt_sg}</td>
                </tr>
                <tr>
                    <td>Cereales y tuberculos con grasa</td>
                    <td>{equivalentes.cyt_cg}</td>
                    <td>{115*equivalentes.cyt_cg}</td>
                    <td>{2*equivalentes.cyt_cg}</td>
                    <td>{5*equivalentes.cyt_cg}</td>
                    <td>{15*equivalentes.cyt_cg}</td>
                </tr>
                <tr>
                    <td>Leguminosas</td>
                    <td>{equivalentes.leguminosas}</td>
                    <td>{120*equivalentes.leguminosas}</td>
                    <td>{8*equivalentes.leguminosas}</td>
                    <td>{1*equivalentes.leguminosas}</td>
                    <td>{20*equivalentes.leguminosas}</td>
                </tr>
                <tr>
                    <td>Alimentos de origen animal muy bajo</td>
                    <td>{equivalentes.animal_mb}</td>
                    <td>{40*equivalentes.animal_mb}</td>
                    <td>{7*equivalentes.animal_mb}</td>
                    <td>{1*equivalentes.animal_mb}</td>
                    <td>{0}</td>
                </tr>
                <tr>
                    <td>Alimentos de origen animal bajo</td>
                    <td>{equivalentes.animal_b}</td>
                    <td>{55*equivalentes.animal_b}</td>
                    <td>{7*equivalentes.animal_b}</td>
                    <td>{3*equivalentes.animal_b}</td>
                    <td>{0}</td>
                </tr>
                <tr>
                    <td>Alimentos de origen animal moderado</td>
                    <td>{equivalentes.animal_m}</td>
                    <td>{75*equivalentes.animal_m}</td>
                    <td>{7*equivalentes.animal_m}</td>
                    <td>{5*equivalentes.animal_m}</td>
                    <td>{0}</td>
                </tr>
                <tr>
                    <td>Alimentos de origen animal alto</td>
                    <td>{equivalentes.animal_a}</td>
                    <td>{100*equivalentes.animal_a}</td>
                    <td>{7*equivalentes.animal_a}</td>
                    <td>{8*equivalentes.animal_a}</td>
                    <td>{0}</td>
                </tr>
                <tr>
                    <td>Leche descremada</td>
                    <td>{equivalentes.leche_d}</td>
                    <td>{95*equivalentes.leche_d}</td>
                    <td>{9*equivalentes.leche_d}</td>
                    <td>{2*equivalentes.leche_d}</td>
                    <td>{12*equivalentes.leche_d}</td>
                </tr>
                <tr>
                    <td>Leche semidescremada</td>
                    <td>{equivalentes.leche_sd}</td>
                    <td>{110*equivalentes.leche_sd}</td>
                    <td>{9*equivalentes.leche_sd}</td>
                    <td>{4*equivalentes.leche_sd}</td>
                    <td>{12*equivalentes.leche_sd}</td>
                </tr>
                <tr>
                    <td>Leche entera</td>
                    <td>{equivalentes.leche_e}</td>
                    <td>{150*equivalentes.leche_e}</td>
                    <td>{9*equivalentes.leche_e}</td>
                    <td>{8*equivalentes.leche_e}</td>
                    <td>{12*equivalentes.leche_e}</td>
                </tr>
                <tr>
                    <td>Leche con azúcar</td>
                    <td>{equivalentes.leche_ca}</td>
                    <td>{200*equivalentes.leche_ca}</td>
                    <td>{8*equivalentes.leche_ca}</td>
                    <td>{5*equivalentes.leche_ca}</td>
                    <td>{30*equivalentes.leche_ca}</td>
                </tr>
                <tr>
                    <td>Aceites y grasas sin proteína</td>
                    <td>{equivalentes.aceite_sp}</td>
                    <td>{45*equivalentes.aceite_sp}</td>
                    <td>{0}</td>
                    <td>{5*equivalentes.aceite_sp}</td>
                    <td>{0}</td>
                </tr>
                <tr>
                    <td>Aceites y grasas con proteína</td>
                    <td>{equivalentes.aceite_cp}</td>
                    <td>{70*equivalentes.aceite_cp}</td>
                    <td>{3*equivalentes.aceite_cp}</td>
                    <td>{5*equivalentes.aceite_cp}</td>
                    <td>{3*equivalentes.aceite_cp}</td>
                </tr>
                <tr>
                    <td>Azucares sin grasa</td>
                    <td>{equivalentes.azucar_sg}</td>
                    <td>{40*equivalentes.azucar_sg}</td>
                    <td>{0}</td>
                    <td>{0}</td>
                    <td>{10*equivalentes.azucar_sg}</td>
                </tr>
                <tr>
                    <td>Azucares con grasa</td>
                    <td>{equivalentes.azucar_cg}</td>
                    <td>{85*equivalentes.azucar_cg}</td>
                    <td>{0}</td>
                    <td>{5*equivalentes.azucar_cg}</td>
                    <td>{10*equivalentes.azucar_cg}</td>
                </tr>
                <tr>
                    <td>Alimentos libres de energía</td>
                    <td>{equivalentes.lde}</td>
                    <td>{0}</td>
                    <td>{0}</td>
                    <td>{0}</td>
                    <td>{0}</td>
                </tr>
                <tr>
                    <td>Bebidas alcohólicas</td>
                    <td>{equivalentes.alcohol}</td>
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
     );
}

export default TablaEquivalentes