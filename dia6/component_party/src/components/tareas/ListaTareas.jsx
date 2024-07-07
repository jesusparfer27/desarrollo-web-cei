import Tarea from "../tareas/Tarea";

const ListaTareas = ({tareas}) => {

    console.log(tareas);
    
    return (
        <div className="divStyleCard">
            <div className="divStyleCardList">
                {
                    tareas.map(item => {
                        const {id, tarea, isCompletada} = item;
                        return (
                            <Tarea key={id} tarea={tarea} isCompletada={isCompletada}/>
                        )
                    })
                }
                </div>
                <button className="buttonStyle AddTask">Agregar una nueva tarea</button>
        </div>
    )
}

export default ListaTareas