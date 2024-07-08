const TarjetaUsuario = ({ nombre, edad, ocupacion }) => {

    return (
        <>
            <div className="divStyleCard">

                <ul>
                    <li>nombre: {nombre}</li>
                    <li>edad: {edad}</li>
                    <li>ocupacion: {ocupacion}</li>
                </ul>
            </div>
        </>
    )
}

export default TarjetaUsuario