// TODO: Completa tu código aquí ⬇️




app.get("/", (req,res)=>{
  res.send("Bienvenid@ al laboraotio de routing")
})
//Se recomienda no editar ni eliminar la instancia del servidor.
// Instancia del servidor
const server = app.listen(PORT, () => {
  console.log(`listening on port http://localhost:${PORT}`);
});

// Exportación del servidor
module.exports = server;