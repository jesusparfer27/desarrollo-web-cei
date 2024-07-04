import Tarea from "../tareas/Tarea";

const ListaTareas = ({tareas}) => {

    console.log(tareas);
    
    return (
        <div className="bloque_tarjeta">
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