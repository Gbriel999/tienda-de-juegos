const { Pool } = require("pg");
const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "cft.2025",
  database: "tienda",
  allowExitOnIdle: true,
});

const agregarjuego = async (nombre, precio, stock) => {
  const consulta = "INSERT INTO juegos values (DEFAULT, $1, $2, $3)";
  const values = [nombre, precio, stock];
  const result = await pool.query(consulta, values);
};

const obtenerJuegos = async () => {
  const { rows } = await pool.query("SELECT * FROM juegos");
  return rows;
};
obtenerJuegos();

const eliminarjuego = async (id) => {
  const consulta = "DELETE FROM juegos WHERE id = $1";
  const values = [id];
  const result = await pool.query(consulta, values);
};

const editarJuego = async (id, nombre, precio, stock) => {
  const consulta = "UPDATE juegos SET nombre = $1, precio = $2, stock = $3 WHERE id = $4";
  const values = [nombre, precio, stock, id];
  const result = await pool.query(consulta, values);
  console.log("Juego actualizado");
};

module.exports = { agregarjuego, obtenerJuegos, eliminarjuego, editarJuego };

