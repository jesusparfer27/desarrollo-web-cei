const TarjetaUsuario = ({nombre, edad, ocupacion}) => {

        // const nombre = "Jesus"
        // const edad = 24
        // const ocupación = "full stack developer"

    return (
        <>
        <div className="prueba_bloques">
            <div className="bloque_tarjeta">
                <div className="textos_tarjeta">
                    <h2 className='texto nombre'>Su nombre es: {nombre}</h2>
                    <h3 className='texto edad'>Tiene: {edad}</h3>
                    <strong className='texto_ocupacion'>Trabaja de: {ocupacion}</strong>
                </div>
            </div>
        </div>
        </>
    )
}

export default TarjetaUsuario