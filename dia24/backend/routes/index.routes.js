import { Router } from 'express';

// Importar los posts y comentarios de prueba
import { publicaciones, comments } from '../data/mockData.js'

// helpers/utilities
import { getLastId } from '../utils/utils.js'

const router = Router()

// ---------------
//      RUTAS
// ---------------    

// GET /publicaciones
router.get("/publicaciones", (req, res) => {
    res.status(200).json(publicaciones);
});

// GET /publucaciones/:id
router.get("/publicaciones/:id", (req, res) => {
    const {id} = req.params;

    // Busco publicación
    const post = publicaciones.find( post => post.id === parseInt(id))

    if(!post) {
        return res.status(404).json({ error: "publicación no encontrada"})
    }

    // buscar comentarios de la publicación 
    const comentarios = comments.filter( comment => comment.postId === parseInt(id))

    post.comments = comentarios
    
    res.status(200).json(post)

    // res.status(200).json({"msg": "post + comentarios"})
})

// POST /publicaciones
router.post("/publicaciones", (req, res) => {
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
});

// GET /comments
router.get("/comments", (req, res) => {
    res.json(comments);
});

// POST /comments
router.post("/comments", (req, res) => {
    const { postId, usuario, email, comentario } = req.body;

    if (!postId || !usuario || !email || !comentario) {
        return res.status(400).json({ error: "All fields are required" });
    }

    const lastId = getLastId(comments);

    const newComment = {
        id: lastId + 1,
        postId,
        name: usuario,
        email,
        body: comentario
    };

    comments.push(newComment);

    res.status(201).json(newComment);
});


export default router