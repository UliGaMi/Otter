function TablaKC({kc}) {
    return ( 
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
          <td>{(kc.ge).toFixed(2)}</td>
          <td>{kc.hco*100}</td>
          <td>{(kc.ge * kc.hco).toFixed(2)}</td>
          <td>4</td>
          <td>{((kc.ge * kc.hco) / 4).toFixed(2)}</td>
        </tr>
        <tr>
          <td>PROT</td>
          <td>{(kc.ge).toFixed(2)}</td>
          <td>
            {kc.prot*100}
          </td>
          <td>{(kc.ge * kc.prot).toFixed(2)}</td>
          <td>4</td>
          <td>{((kc.ge * kc.prot) / 4).toFixed(2)}</td>
        </tr>
        <tr>
          <td>LIP</td>
          <td>{kc.ge}</td>
          <td>
            {kc.lip*100}
          </td>
          <td>{(kc.ge * kc.lip).toFixed(2)}</td>
          <td>9</td>
          <td>{((kc.ge * kc.lip) / 9).toFixed(2)}</td>
        </tr>
      </tbody>
    </table>
     );
}

export default TablaKC;