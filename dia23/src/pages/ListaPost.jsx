import { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom'
import '../css/listaPost.css';

const ListaPost = () => {
    const [post, setPost] = useState([]);
    const [comments, setComments] = useState([])
    const [visiblePosts, setVisiblePosts] = useState({}); // Estado para manejar visibilidad de cada post

    useEffect(() => {
        getDataPost();
    }, []);

    const getDataPost = async () => {
        try {
            const respuesta = await fetch('http://localhost:3000/publicaciones');
            const objJs = await respuesta.json();
            setPost(objJs);
        } catch (e) {
            console.log("error", e);
        }
    };


    const togglePostVisibility = (postId) => {
        // Alterna la visibilidad del contenido de un post específico
        setVisiblePosts(prevState => ({
            ...prevState,
            [postId]: !prevState[postId] // Invierte el estado de visibilidad del post con el ID dado
        }));
    };

    return (
        
            <div className="postContainer">
                {post.map(({ id, title, body }) => (
                    <NavLink to={`/comments/${id}`}>
                    <div className="postCard" key={id}>
                        <h3 className="tittlePost">{id} {title}</h3>
                        {/* Al hacer clic, se alterna la visibilidad del contenido */}
                        <strong className="postBody" onClick={() => togglePostVisibility(id)} style={{ cursor: 'pointer', color: 'red' }}>
                            {visiblePosts[id] ? body : "Mostrar más..."}
                        </strong>
                    </div>
                    </NavLink>
                ))}
            </div>
        
    );
};

export default ListaPost;
