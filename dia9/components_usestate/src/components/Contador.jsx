import { useState } from "react";

const Contador = () => {
    
    const [contador, setContador] = useState(0)
    
    const handleClick = () => {
        setContador(contador + 1)
    }


    return ( 
        <div className="divStyle">
            <button onClick= {handleClick} className="buttonStyle">La cuenta va por: {contador} </button>
        </div>
    );
}

// {contador==1?"vez":"veces"}
 
export default Contador