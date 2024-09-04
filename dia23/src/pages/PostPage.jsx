import { useEffect, useState } from "react";


const PostPage = () => {
    const [comments, setComments] = useState({
        nombre: "",
        body: ""
    })

    useEffect(() => {
        getDataComment()
    }, [])

    const getDataComment = async () => {
        try {
            const respuesta = await fetch('http://localhost:3000/comments');
            const comments = await respuesta.json();
            setComments(comments);
        } catch (e) {
            console.log("error", e);
        }
    }


    return ( <>
        <h1>Soy Post Page</h1>
    </> );
}
 
export default PostPage;