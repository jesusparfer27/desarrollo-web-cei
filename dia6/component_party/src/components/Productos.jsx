const Productos = ({productsProps}) => {
    
    return (
        <div>
        <h1 className="h1Style">Productos</h1>
        {
            productsProps.map((item) => {
                 const {id, name, price, description, image} = item
                 return (
                    <div key={id} className="divStyleCard">
                        <img src={image} alt={name} className="imgStyle" />
                        <h2 className="h2Style">{name}</h2>
                        <p className="pStyle">{description}</p>
                        <p className="pStyle">{price}</p>
                    </div>
                 )
            })
        }
        </div>

    )
}

export default Productos