import { Router } from 'express';

// importar todos los POSTS
import { getAllPosts, getPostwithComments, createPost } from '../controllers/posts.controller.js';

// helpers/utilities
import { createComments } from '../controllers/comments.controller.js';

const router = Router()

// Lista de status mas utilizados:

// 200 OK:                      La solicitud tuvo éxito
// 201 Created:                 La solicitud tuvo éxito y se ha creado un nuevo recurso
// 204 No Content:              Éxito pero no hay contenido que devolver

// 400 Bad Requests:            La solicitud no se pudo entender o fue mal formada
// 401 Unauthorized:            La solicitud requiere autenticación del usuario (requiere un user)
// 403 Forbidden:               El servidor entendió la solicitud, pero se niega a autorizarla (sin permisos)
// 409 Conflict:                No se puede completar debido a un conflicto con el recurso. Por ejemplo se esta creando un recurso que no existe.

// 500 Internal server error    Error genérico del servidor 
// 503 Service Unavailable      El servidor no está disponible para manejar la solicitud

// -------------------------
//      RUTAS (API/v1)
// -------------------------  

// RUTAS DE POSTS
router.get("/publicaciones",        getAllPosts)
router.get("/publicaciones/:id",    getPostwithComments)
router.post("/publicaciones",       createPost)

// RUTAS DE COMMENTS
router.post("/comments/:postId/comment", createComments) 

export default router