const TarjetaUsuario = ({nombre, edad, ocupacion}) => {

        // const nombre = "Jesus"
        // const edad = 24
        // const ocupación = "full stack developer"

    return (
        <>
                <div className="divStyleCard">
                    <div className="divStyleCardColumn">
                    <h2 className='h2Style'>Su nombre es: {nombre}</h2>
                    <strong className='strongStyle'>Tiene: {edad}</strong>
                    <strong className='strongStyle'>Trabaja de: {ocupacion}</strong>
                    </div>
                </div>
        </>
    )
}

export default TarjetaUsuario