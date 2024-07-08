const RestaurantDishes = ({restaurantProps}) => {

    const {nombre, precio, descripcion} = restaurantProps

    return (
        <div className="divStyleCard">
        <h2 className="h2Style">{nombre}</h2>
        <p className="pStyle"><b>{precio}</b></p>
        <strong className="strongStyle">{descripcion}</strong>
        </div>
    )
}

export default RestaurantDishes