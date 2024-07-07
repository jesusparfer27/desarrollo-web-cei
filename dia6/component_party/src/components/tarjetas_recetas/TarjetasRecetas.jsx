import TarjetaRecetaIngredients from "./TarjetaRecetaIngredients"
import TarjetaRecetaInstructions from "./TarjetaRecetaInstructions"


const TarjetasRecetas = ({ tarjetasRecetasProp }) => {


    return (

        <div className="divStyleCard">
            <h1 className="h1Style">Tarjeta de recetas</h1>
            {
                tarjetasRecetasProp.map((item) => {
                    const { id, name, img, ingredients, instructions } = item
                    return (
                        <div className="divStyle" key={id}>
                            <h2 className="h2Style">{name}</h2>
                            <img className="imgStyle" src={img} alt={name} />
                            <TarjetaRecetaIngredients ingredients={ingredients} />
                            <TarjetaRecetaInstructions instructions={instructions} />
                        </div>
                    );
                })}
        </div>
    )
}

export default TarjetasRecetas