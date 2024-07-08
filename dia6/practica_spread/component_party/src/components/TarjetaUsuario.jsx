const TarjetaUsuario = () => {

    const data = [
        {
            id: 1,
            nombre: "Jesús",
            edad: 24,
            ocupacion: "Desarrollador web"
        }, {
            id: 2,
            nombre: "Timmmy",
            edad: 22,
            ocupacion: "Dentista"
        }, {
            id: 3,
            nombre: "Dimitry",
            edad: 26,
            ocupacion: "Panadero"
        }
    ]

    return (
        <>
            <div className="divStyleCard"
                {...data}
            >
            </div>
        </>
    )
}

export default TarjetaUsuario