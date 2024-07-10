import { useState } from "react";

const Interruptor = () => {

    const [isEncendido, setIsEncendido] = useState(true)

    const buttonChange = document.querySelector("html");

    buttonChange.addEventListener("click", function () {
        document.body.style.backgroundColor = isEncendido ? "gray" : "blue";
    });

    /**
     * const modoOscuro= {
     * backgroundColor: 'black',
     * color: 'white'
     * }
     * 
     * const modoClaro= {
     * backgroundColor: 'white',
     * color: 'black'
     * }
     * 
     * 
     * style= {isEndendido ? modoClaro: modoOscuro}
     */

    return (
        <div className="divStyle">
            <div className="divStyle">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ex, rerum perspiciatis recusandae laborum obcaecati magnam ad eligendi animi totam placeat possimus, mollitia velit voluptas eaque ducimus minima libero rem.</p>
            </div>

            <div className="divStyle">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ex, rerum perspiciatis recusandae laborum obcaecati magnam ad eligendi animi totam placeat possimus, mollitia velit voluptas eaque ducimus minima libero rem.</p>
            </div>
            <button onClick={() => setIsEncendido(!isEncendido)} className="buttonStyle">
                {isEncendido ? "Encendido" : "Apagado"}
            </button>
        </div>
    );
}

export default Interruptor;