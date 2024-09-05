import { comments } from "../data/mockData"

import { getLastId } from '../utils/utils.js'

// GET /comments
export const createComments = (req, res) => {
    const { postId, usuario, email, comentario } = req.body;

    if (!postId || !usuario || !email || !comentario) {
        return res.status(400).json({ error: "All fields are required" });
    }

    const lastId = getLastId(comments);

    const newComment = {
        id: parseInt(lastId + 1),
        postId: parseInt(postId),
        name: usuario,
        email: correo,
        body: comentario
    };

    comments.push(newComment);

    res.status(201).json(newComment);
};
