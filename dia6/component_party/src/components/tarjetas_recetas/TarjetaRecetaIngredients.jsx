const TarjetaRecetaIngredients = ({ingredients, children}) => {
    
    return (
               <div className="divStyle">
                <h2 className="h2Style">Ingredients</h2>
                    
                    <ul>
                        {ingredients.map((ingredient, index) => (
                            <li key={index} className="listStyle">{ingredient}</li>
                        ))}
                    </ul>
                    {children}
               </div> 
    )
}

export default TarjetaRecetaIngredients