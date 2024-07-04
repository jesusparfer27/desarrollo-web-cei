const PerfilUsuario = ({props, props1}) => {

    const userData = {
            nombre: 'El Barto',
            email: 'elbarto@fox.com',
            img: "https://i.ebayimg.com/images/g/Z9oAAOSwH7NlKK4J/s-l1200.webp&quot;",
                direccion: {
                calle: 'Calle Falsa 123',
                ciudad: 'Springfield',
                codigoPostal: '12345'
                }
    }

    const {nombre, email, img} = props;
    const {calle, ciudad, codigoPostal} = props1


    return (
        <>
        


        </>
    )
}

export default PerfilUsuario 