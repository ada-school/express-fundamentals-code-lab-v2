const express = require('express');
const clientRouter = require('./clients.js');

const app = express();
const PORT = 3000;

// Middleware para manejar rutas de clientes
app.use('/clients', clientRouter);

app.get("/", (req, res) => {
  res.send("Bienvenid@ al laboratorio de routing");
});

// Se recomienda no editar ni eliminar la instancia del servidor.
// Instancia del servidor
const server = app.listen(PORT, () => {
  console.log(`listening on port http://localhost:${PORT}`);
});

// Exportación del servidor
module.exports = server;
