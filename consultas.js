const { Pool } = require("pg");
const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "mysql",
  database: "tienda",
  allowExitOnIdle: true,
});

const agregarjuego = async (nombre, precio, stock) => {
  const consulta = "INSERT INTO juegos values (DEFAULT, $1, $2, $3)";
  const values = [nombre, precio, stock];
  const result = await pool.query(consulta, values);
  console.log("Juego agregado");
};

const obtenerJuegos = async () => {
  const { rows } = await pool.query("SELECT * FROM juegos");
  console.log(rows);
  return rows;
};
obtenerJuegos();

const eliminarjuego = async (id) => {
    const consulta = "DELETE FROM juegos WHERE id = $1";
    const values = [id];
    const result = await pool.query(consulta, values);
  };
  

module.exports = { agregarjuego, obtenerJuegos, eliminarjuego };

