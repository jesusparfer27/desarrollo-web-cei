const PerfilUsuario = ({ usuario }) => {

    const { nombre, email, direccion, img } = usuario
    const { calle, ciudad, codigoPostal } = direccion

    return (
        <div className="divStyleCard">
            <h2 className="h2Style">{nombre}</h2>
            <img className="imgStyle" src={img} alt={nombre} />
                        <div className="divStyleCard">
                            <ul>
                                <li>Email:{email}</li>
                                <li>Dirección{calle}</li>
                                <li>{ciudad}</li>
                                <li>{codigoPostal}</li>
                            </ul>
                        </div>
        </div>
    )
}

export default PerfilUsuario 