const PerfilUsuario = ({usuario}) => {

    const {nombre, email, direccion, img} = usuario
    const {calle, ciudad, codigoPostal} = direccion

    return (
        <div className="bloque_el_barto">
            <h2>{nombre}</h2>
            <img src={img} alt={nombre}/>
            <p><b>Email:</b> {email}</p>
            <p><b>Dirección</b>{calle}, {ciudad}, {codigoPostal}</p>
        </div>
    )
}

export default PerfilUsuario 