import { useState, useEffect } from 'react'

const Posts = () => {

    const [post, setPost] = useState([])

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {

        try {
            const respuesta = await fetch('https://jsonplaceholder.typicode.com/posts')
            console.log(respuesta)

            const objJs = await respuesta.json()
            console.log(objJs)

            setPost(objJs)
        } catch (e) {
            console.log("error", e)
        }
    }

    return (
        <>


            {
                post.map(({ userId, id, title, body }) => {
                    return (
                        <>

                            <div className="postContainer" key={userId}>
                                <strong>{title}</strong>
                                
                            </div>

                        </>
                    );
                })
            }
        </>
    )}


    export default Posts;