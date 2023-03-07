function TarjetaNutriologo({ nutriologo, clase }) {
  return (
    <div className={clase}>
      <label>Nombre: {nutriologo.nombre}</label>
      <label>Correo: {nutriologo.correo}</label>
    </div>
  );
}

export default TarjetaNutriologo;
