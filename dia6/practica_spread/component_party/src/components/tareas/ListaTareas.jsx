import Tarea from "../tareas/Tarea";

const ListaTareas = ({tareas}) => {

// const [newTask, setnewTask] = useState(false)

//     const newTask = () => {
//         if (newTask = "")

//     }

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