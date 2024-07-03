import Tarea from "./Tarea"

const ListaTareas = ({tareas}) => {

    console.log(tareas)

    return (
        <div className="Card">
            <h1>Tareas para este verano</h1>
                {
                    tareas.map(element => {
                        const {id, tarea, isCompleteda} = element;
                        return (
                            <Tarea key={id} tarea={tarea} isCompletada={isCompleteda}/>
                        )
                    })
                }
        </div>
    )
}

export default ListaTareas