const { Router } = require("express");
const router = Router();

router.get("/", function (req, res) {
  res.send("Ruta clientes medium");
});

module.exports = router;
