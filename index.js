const { agregarjuego, obtenerJuegos } = require('./consultas')
const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const PORT = 3000;

app.listen(PORT, console.log("http://localhost:3000"));
app.use(express.json());
app.use(express.static(path.join(__dirname)));


app.get("/juegos", async (req, res) => {
    const juegos = await obtenerJuegos()
    res.json(juegos)
})

app.post("/juegos", async (req, res) => {
    const { nombre, precio, stock } = req.body
    await agregarjuego(nombre, precio, stock)
    res.send("Juego agregado con éxito")
})
