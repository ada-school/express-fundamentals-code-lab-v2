const { Router } = require("express");
const router = Router();

router.get("/", function (req, res) {
  res.send("Ruta clientes premium");
});

module.exports = router;
