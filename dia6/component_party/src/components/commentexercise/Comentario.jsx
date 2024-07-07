const Comentario = ({author, date, content, children}) => {
    
    return (
        <div className="divStyleCard">
            <h2 className="h2Style">{author}</h2>
      <strong className="strongStyle">{new Date(date).toLocaleString()}</strong>
      <p className="pStyle">{content}</p>
      {children}
        </div>
    )
}

export default Comentario