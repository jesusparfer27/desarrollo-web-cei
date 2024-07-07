import Comentario from "./Comentario"

const Comentarios = ({ comentProps }) => {

    if (!Array.isArray(comentProps)) {
        return <div>No hay comentarios disponibles.</div>;

    }
    
    return (
        <div className="divStyleCard">
            <h1 className="h1Style">COMMENT LIST</h1>
                {comentProps.map((item) => (
                    <Comentario
                    key={item.id}
                    author={item.author}
                    date={item.date}
                    content={item.content}
                    >
                    {item.replies && item.replies.length > 0 && (
                        <div className="divStyle">
                            {item.replies.map((reply) => (
                                <Comentario
                                key={reply.id}
                                author={reply.author}
                                date={reply.date}
                                content={reply.content}
                                />
                            ))}
                        </div>
                    )}
                    </Comentario>
                ))}
        </div>
    )
}

export default Comentarios