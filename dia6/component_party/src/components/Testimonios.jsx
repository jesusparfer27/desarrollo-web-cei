const Testimonios = ({testimoniosProps}) => {

    return (
        <div>
        <h1 className="h1Style">Testimonios</h1>
        {
            testimoniosProps.map((item) => {
                const {id, name, position, company, testimonial, image} = item
                return (
                    <div key={id} className="divStyleCard">
                        <h2 className="h2Style">{name}</h2>
                        <strong className="strongStyle">{position}</strong>
                        <p className="pStyle">{company}</p>
                        <p className="pStyle">{testimonial}</p>
                        <img src={image} alt={name} />
                    </div>
                )
            })
          
        }
        </div>
    )
}

export default Testimonios