const PerfilUsuario = ({usuario}) => {

    const {nombre, email, direccion, img} = usuario
    const {calle, ciudad, codigoPostal} = direccion

    return (
        <div className="divStyleCard">
            <h2 className="h2Style">{nombre}</h2>
            <img className="imgStyle" src={img} alt={nombre}/>
            <p><b>Email:</b> {email}</p>
            <p><b>Dirección</b>{calle}, {ciudad}, {codigoPostal}</p>
        </div>
    )
}

export default PerfilUsuario 