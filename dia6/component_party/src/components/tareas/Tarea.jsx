const Tarea = ({ tarea, isCompletada }) => {

    return (
        <div className="task_container">
            <div className="task_text">
                {tarea} <br />
                <button>Completar tarea</button>
                {
                    isCompletada && (
                        <button>Eliminar tarea</button>
                    )
                }
            </div>
        </div>
    )
}


export default Tarea
