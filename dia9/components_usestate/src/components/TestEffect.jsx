import { useEffect, useState } from "react";
     
// El ciclo de vida de los componentes tienen 3 partes
// 1. Cuando se monta /carga/
const TestEffect = () => {
    const [cont, setCont] = useState(0)
    // let valor2 = "HOLA"

    useEffect(() => {
        // Ejemplos de uso:
        // Traer datos de la base de datos, o de una API
        // Suscribir a un evento (button.addEventListener("click", ()=> {})
        console.log("Monte el componente"); 

        return () => { console.log("Quité el componente"); }
    }, [] );

    const handleClick = () => {console.log("me hicieron click")}

    // 2. Cada vez que se recarga/re-renderiza/se actualiza lo que puse entre []
    useEffect(() => {
        console.log("Actualiza el componente" + cont) // "ComponentDidUpdate"

        const button = document.getElementById("miBoton")
        button.addEventListener("click", handleClick);

        // Ciclo de vida 3 (opcional)
        // 3. Cuando se quita/desaparece/desmonta/descarga me lo cargo... "ComponentDidMount"

        return () => { console.log("Quite el componente"): }
    }, [] )

    return (
        <div>
           { cont < 3 &&
            <button onClick={() => setCont(cont + 1)}>Click {cont} </button>
           }
        </div>
    )
}

export default TestEffect