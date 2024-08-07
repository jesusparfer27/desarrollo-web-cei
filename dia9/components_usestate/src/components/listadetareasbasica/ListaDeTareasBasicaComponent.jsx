import { useState } from "react"

const ListaDeTareasBasicaComponent = () => {


    const [listaTareas, setListaTareas] = useState([]);
    const [nuevaTarea, setNuevaTarea] = useState("")

    const datos = ["Tarea 1", "Tarea 2", "Tarea 3"];


    
    const handleAgregarTarea = (e) => {

        console.log("evento click", e)

        if (nuevaTarea.trim() == "" ) {return; }
        if (nuevaTarea.trim().length < 3) { return; }
        

        // Agregar la tarea de listaDeTareas
        setListaTareas([...listaTareas, nuevaTarea])

        // limpiar el input
        setNuevaTarea("");

        // notificar al usuario
        alert(" TAREA CREADA ")
    }

    return (
        <div className="divStyle">
                <input
                    value={nuevaTarea}
                    onChange={(e) => {
                        setNuevaTarea(e.target.value)
                        console.log("Cambie", e.target.value)
                    }}
                    placeholder="Ingresar tarea"
                />
                <button onClick={handleAgregarTarea}>
                    Crear
                </button>
                <ul>
                    {
                        listaTareas.map((tarea, i) => ( <li key={i}> {tarea} </li>))
                    }
                    {/* <li>Tarea 1</li>
                    <li>Tarea 2</li>
                    <li>Tarea 3</li> */}
                </ul>
                </div>
    )

}

export default ListaDeTareasBasicaComponent