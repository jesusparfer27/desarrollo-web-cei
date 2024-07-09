import { useState } from "react";
import ListaDeTareasBasicaComponent from "./ListaDeTareasBasicaComponent";

const ListaDeTareasBasica = () => {

    const [newTask, setNewTask] = useState("")

//     const handleClick = () => {
//         setNewTask() => {

// }
//     }

return (
    <>
        <div className="divStyle">
            <ListaDeTareasBasicaComponent />
        </div>
        <button onClick={addEventListener}>Crear nueva tarea</button>
    </>
);
}

export default ListaDeTareasBasica;