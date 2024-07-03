const Card = ({props}) => {
    const {nombre, edad, hobbies} = props;
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
        {hobbies.map( (hobby) => {
            return (
                <li>{hobby}</li>
            )
        }
        )}
    </ul>
    </>
)}

export default Card
