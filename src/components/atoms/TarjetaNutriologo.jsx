function TarjetaNutriologo({ nutriologo, clase }) {
  return (
    <div className={clase}>
      <label>Nombre: {nutriologo.nombre}</label>
      <label>Correo: {nutriologo.nombre}</label>
    </div>
  );
}

export default TarjetaNutriologo;
