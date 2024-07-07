import RestaurantDishes from "./RestaurantDishes";

const RestaurantMenu = ({ restaurant }) => {
  const { menu } = restaurant || { menu: {} };;
  const categories = Object.keys(menu);

  return (
    <div className="divStyleCard">
      {categories.map((category) => (
        <div className="l" key={category}>
          <h1 className="h1Style">{category}</h1>
          {menu[category].map((item) => {
            const { id, nombre, precio, descripcion } = item;
            return (
              <RestaurantDishes
                key={id}
                restaurantProps={{nombre, precio, descripcion}}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default RestaurantMenu;
