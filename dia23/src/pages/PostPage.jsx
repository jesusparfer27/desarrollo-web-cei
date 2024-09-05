import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'



const PostPage = () => {
    const [postWithComments, setPostWithComments] = useState({})
    const { id } = useParams()

    useEffect(() => {
        getDataComment()
    }, [id])

    const getDataComment = async () => {
        try {
            const respuesta = await fetch(`http://localhost:3000/API/v1/publicaciones/${id}/comments`);
            const postWithComments = await respuesta.json();
            setPostWithComments(postWithComments);
        } catch (e) {
            console.log("error", e);
        }
    }

    const {title, body, comments } = postWithComments
    return (<>
        <h1>Soy el post {id}</h1>
        <h1>Soy Post Page</h1>
        <h2>{title}</h2>
        <p>{body}</p>
        {
            comments.comments.map((comentario) => {
                return (
                    <div key={comentario.id}>
                        {comentario.body}
                        </div>
                    /* // <Comment key={comentario.id} {...comentario} /> */
                )
            })}
    </>);
}

export default PostPage;