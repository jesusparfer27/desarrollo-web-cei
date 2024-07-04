import Tarea from "../tareas/Tarea";

const ListaTareas = ({tareas}) => {

    console.log(tareas);
    
    return (
        <div className="Card">
            <h1>Tareas para este verano</h1>
                {
                    tareas.map(item => {
                        const {id, tarea, isCompletada} = item;
                        return (
                            <Tarea key={id} tarea={tarea} isCompletada={isCompletada}/>
                        )
                    })
                }
        </div>
    )
}

export default ListaTareas