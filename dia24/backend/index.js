// Version de CommonJS
// const express = require('express');
// const cors = require('cors')

import { getLastId } from './utils/utils.js'
import express from 'express'
import cors from 'cors'

import {publicaciones, comments} from './data/mockData.js'

const app = express();
const PORT = 3000;

app.use(cors())

// procesa el JSON body para leerlo con req.body()
app.use(express.json())

// const lastCommentId = getLastId(comments);
// console.log("Last comment id: ", lastCommentId);
// const lastPostId = getLastId(publicaciones);
// console.log("Last post id: ", lastPostId)

//  RUTAS
// ---------------

// GET /
app.get("/", (req, res) => {
    res.setHeader("Content-Type", "text/html")

    const landingHTML = `
    <h1>Bienvenidos a nuestra REST-API</h1>
    `
    res.send(landingHTML);
})

// GET /publicaciones
app.get("/publicaciones", (req, res) => {
    res.json(publicaciones)
})

// POST /publicaciones
app.post("/publicaciones", (req, res) => {

    const lastId = getLastId(publicaciones);

    const newPost={
        id: lastId + 1,
        userId: 1,
        title: req.body.title,
        body: req.body.content
    }

    publicaciones.push(newPost)

    res.json(newPost)
})


// GET /comments
app.get("/comments", (req, res) => {
    res.json(comments)
})

// POST /comments
app.post("/comments", (req, res) => {
    
    const {postId, usuario, email, comentario} = req.body

    const lastId = getLastId(comments);

    const newComment={
        id: lastId + 1,
        postId: postId,
        name: usuario,
        email: email,
        body: comentario
    }
    comments.push(newComment)

    res.json(newComment)
})

app.listen(PORT, () => {
    console.log(`Servidor iniciado en http://localhost:${PORT}`)
});