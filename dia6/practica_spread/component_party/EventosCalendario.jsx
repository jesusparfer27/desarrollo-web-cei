const EventosCalendario = ({eventsProps}) => {

    

    return (
        <div className="divStyleCard">
            <h1 className="h1Style">Calendario de eventos</h1>
            {
                eventsProps.map((item) => {
                    const {id, title, date, time, location} = item
                    return (
                        <div key={id} className="divStyleCard">
                            <h2 className="h2Style">{title}</h2>
                            <strong className="strongStyle">{new Date(date).toLocaleString()}</strong>
                            <strong className="strongStyle">{time}</strong>
                            <p className="pStyle">{location}</p>
                        </div>
                    )
})
            }
        </div>
    )
}

export default EventosCalendario