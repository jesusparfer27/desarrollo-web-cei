// Versión ES Modules
import express from 'express'
import cors from 'cors'
import { PORT, URL } from './config/config.js'

// Importar rutas
import indexRoutes from './routes/index.routes.js'

const app = express();


// CORS nos permite acceder a los recursos de este servidor, desde otro ordenador
app.use(cors());

// procesa el JSON body para leerlo con req.body()
app.use(express.json());

app.use("/API/v1/", indexRoutes);
app.use("/API/v3/", indexRoutes);


// GET /
app.get("/", (req, res) => {
    res.setHeader("Content-Type", "text/html");


    const landingHTML = `
    <h1>Bienvenidos a nuestra REST-API</h1>
    Mi backend es: <strong>${URL}:${PORT}</strong>

        <h2></h2>

        <ul>
        <li>GET</li>
        <li>GET</li>
        </ul>
    `;
    res.status(200).send(landingHTML);
});

app.listen(PORT, () => {
    console.log(`Servidor iniciado en ${URL}:${PORT}`);
});
