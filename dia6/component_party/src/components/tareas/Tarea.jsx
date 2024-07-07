const Tarea = ({ tarea, isCompletada }) => {

    return (
        <div className="divStyleCard">
                <div className="divStyleCardName">
                {tarea} <br />
                <button className="buttonStyle">Tarea completada</button>
                {
                    isCompletada && (
                        <button className="buttonStyle">Eliminar tarea</button>
                    )
                }
                </div>
            </div>
    )
}


export default Tarea
