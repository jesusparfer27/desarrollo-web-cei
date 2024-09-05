import { publicaciones, comments } from "../data/mockData";

import { getLastId } from "../utils/utils";

// helpers/utilities
const responseAPI = {
    data: [],
    msg: "",
    status: "ok" // o error
}

// Esta función me trae todos los Posts
// GET /publicaciones
export const getAllPosts = (req, res) => {

    try {
        // consultamos a la base de datos las publicaciones...
        const statusCode = publicaciones.length ? 200 : 204

        responseAPI.msg = "Datos obtenidos con exito"
        responseAPI.count = publicaciones.length;
        responseAPI.data = publicaciones;

        // res.status(200).json(publicaciones);
        res.status(statusCode).json(responseAPI);

        // Guardar en la base de datos el log de 
    } catch (error) {
        console.log("error:", error);

        responseAPI.status = "error";
        responseAPI.msg= "Tuvimos un error obteniendo los datos de la DB";
        res.status(500).json(responseAPI)
    }
};
// GET /publucaciones/:id

export const getPostwithComments = (req, res) => {
    const { id } = req.params;

    // Busco publicación
    const post = publicaciones.find(post => post.id === parseInt(id))

    if (!post) {
        return res.status(404).json({ error: "publicación no encontrada" })
    }

    // buscar comentarios de la publicación 
    const comentarios = comments.filter(comment => comment.postId === parseInt(id))

    // revertir los comentarios
    comentarios.reverse()

    // agregue a post el atributo "comments" y le cargue todos sus comentarios
    post.comments = comentarios

    res.status(200).json(post)

    // res.status(200).json({"msg": "post + comentarios"})
}
// POST /publicaciones
export const createPost = (req, res) => {
    const { title, body } = req.body;

    if (!title || !body) {
        return res.status(400).json({ error: "Title and body are required" });
    }

    // Estructura para guardar en la base de datos
    // const newPost={
    //     id: 101,
    //     userId: 1,
    //     title: "Mi nuevo Post",
    //     body: "Soy un nuevo Post"
    // }

    // getLastId nos trae el último id de publicación
    const lastId = getLastId(publicaciones);

    const newPost = {

        id: lastId + 1,
        userId: 1,
        title: req.body.titulo,
        body: req.body.contenido
    };

    publicaciones.push(newPost);

    res.status(201).json(newPost);
};