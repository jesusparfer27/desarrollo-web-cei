import { getLastId } from './utils/utils.js'
import express from 'express'
import cors from 'cors'
import { publicaciones, comments } from './data/mockData.js'

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// RUTAS
// ---------------

// GET /
app.get("/", (req, res) => {
    res.setHeader("Content-Type", "text/html");
    const landingHTML = `
    <h1>Bienvenidos a nuestra REST-API</h1>
    `;
    res.send(landingHTML);
});

// GET /publicaciones
app.get("/publicaciones", (req, res) => {
    res.json(publicaciones);
});

// POST /publicaciones
app.post("/publicaciones", (req, res) => {
    const { title, body } = req.body;

    if (!title || !body) {
        return res.status(400).json({ error: "Title and body are required" });
    }

    const lastId = getLastId(publicaciones);

    const newPost = {
        id: lastId + 1,
        userId: 1,
        title: title,
        body: body
    };

    publicaciones.push(newPost);

    res.status(201).json(newPost);
});

// GET /comments
app.get("/comments", (req, res) => {
    res.json(comments);
});

// POST /comments
app.post("/comments", (req, res) => {
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

app.listen(PORT, () => {
    console.log(`Servidor iniciado en http://localhost:${PORT}`);
});
