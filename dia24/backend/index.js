// Versión ES Modules
import express from 'express'
import cors from 'cors'

// Importar rutas
import indexRoutes from './routes/index.routes.js'

const app = express();
const PORT = 3000;

// CORS nos permite acceder a los recursos de este servidor, desde otro ordenador
app.use(cors());

// procesa el JSON body para leerlo con req.body()
app.use(express.json());

app.use("/API/v1/", indexRoutes);


// GET /
app.get("/", (req, res) => {
    res.setHeader("Content-Type", "text/html");
    const landingHTML = `
    <h1>Bienvenidos a nuestra REST-API</h1>
    `;
    res.status(200).send(landingHTML);
});

app.listen(PORT, () => {
    console.log(`Servidor iniciado en http://localhost:${PORT}`);
});
