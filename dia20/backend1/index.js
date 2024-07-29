const express = require("express");
const app = express();
const PORT = 3000;

// Mis rutas
// GET
app.get("/", (req, res)=> {
    // console.log("Req es: ", req)
    // console.log("Response es: ", res)

    res.send("Accediste al HOME!    ")
});

app.get("/usuarios", (req, res) => {
    res.send("Accediste a usuarios")
})

app.get("/usuarios/:nombre/:id", (req, res) => {
    res.send(`Usuario ${req.params.nombre} ( ${req.params.id} ) actualizado`)
})

// POST
app.post("/usuarios", (req, res) => {
    res.send("Creaste un nuevo usuario")
})

app.listen(PORT, () => {
    console.log("Mi servidor esta corriento en el puerto", PORT)
})

