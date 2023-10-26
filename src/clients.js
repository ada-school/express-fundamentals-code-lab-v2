const { Router } = require("express");
const router = Router();

router.get("/", function (req, res) {
  res.send("Ruta clientes");
});

router.get("/list/:limit", (req, res) => {
  const limit = req.params.limit;
  res.send(`Listado de ${limit} autos`);
});

router.get("/filter", (req, res) => {
  const query = req.query;
  const filterType = query.filter;

  res.send(`Resultados filtrados por ${filterType}`);
});

module.exports = router;
