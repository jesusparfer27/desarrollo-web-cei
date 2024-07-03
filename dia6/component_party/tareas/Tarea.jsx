const Tarea = ({tarea, isCompletada}) => {
    return (
        <div>
         <h1>Soy Tarea</h1>
         {tarea} <br />
         <button>Eliminar tarea</button>
         <button>Completar tarea</button>
        </div>
    )
}

export default Tarea

