const TarjetaRecetaInstructions = ({instructions, children}) => {
    return (
        <div className="divStyleCard">
            <h2 className="h2Style">Instructions</h2>
            <ul>
            {instructions.map((instructions, index) => (
                <li key={index}  className="listStyle">{instructions}</li>
            ))}
            </ul>
        {children}
        </div>
    )
}

export default TarjetaRecetaInstructions