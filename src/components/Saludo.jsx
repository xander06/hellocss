const Saludo = () => {
    const info = {
        nombre: 'Alexander',
        apellido: 'Cangás',
        edad: 80,
      };
    return(
    <>
    <h1>Hola mi nombres es : {info.nombre}  y mi apellido  es : {info['apellido']} </h1>
    <h2>Tengo: {info.edad} años</h2>
    </>
    );
    
}
export default Saludo
