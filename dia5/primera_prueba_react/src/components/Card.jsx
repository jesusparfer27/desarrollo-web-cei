const Card = ({nombre, edad, hobby}) => {

    //const nombre = "Jesús"
    //const edad = 24
    //const hobby = ["gimnasio", "programar", "kickboxing"]

    return (
        <>
    <h1>Esta es la consigna</h1>
    <h3>Los datos del usuario son:</h3>
    <h4>{nombre}</h4>
    <p>{edad}</p>
    <ul>
        <li>{hobby.map( (hobby) => {
            return (
                <li>{hobby}</li>
            )
        }
        )}</li>
    </ul>

    </>
)}

export default Card
