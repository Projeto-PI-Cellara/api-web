const express = require("express");
const router = express.Router();

const codigoAtivacaoController = require("../controllers/codigoAtivacaoController");

router.post("/registrar", function (req, res) {
    codigoAtivacaoController.registrar(req, res);
})

router.delete("/expirar/:id", function (req, res) {
    codigoAtivacaoController.expirar(req, res);
})

router.get("/buscar", function (req, res) {
    codigoAtivacaoController.buscar(req, res);
})

router.put("/usar/:id", function (req, res) {
    codigoAtivacaoController.usar(req, res);
})

module.exports = router;