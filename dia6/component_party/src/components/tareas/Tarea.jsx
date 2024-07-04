const Tarea = ({tarea, isCompletada}) => {

    return (
        <div>
         {tarea} <br />
         <button>Completar tarea</button>
         {
            isCompletada && (
                <button>Eliminar tarea</button>
            )
         }
        </div>
    )
}


export default Tarea
