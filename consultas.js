const { Pool } = require('pg')
const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'cft.2025',
    database: 'tienda',
    allowExitOnIdle: true
})


const agregarjuego = async (nombre, precio, stock) => {
    const consulta = "INSERT INTO juegos values (DEFAULT, $1, $2, $3)"
    const values = [nombre, precio, stock]
    const result = await pool.query(consulta, values)
    console.log("Juego agregado")
}

const obtenerJuegos= async () => {
    const { rows } = await pool.query("SELECT * FROM juegos")
    console.log(rows)
    return rows
    }
    obtenerJuegos()
    
    module.exports = {agregarjuego, obtenerJuegos}