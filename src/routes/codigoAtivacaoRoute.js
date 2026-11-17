const express = require("express");
const router = express.Router();

const codigoAtivacaoController = require("../controllers/codigoAtivacaoController");

router.post("/registrar", function (req, res) {
    codigoAtivacaoController.registrar(req, res);
})

module.exports = router;