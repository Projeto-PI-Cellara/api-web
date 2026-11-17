const express = require("express");
const router = express.Router();

const capturaController = require("../controllers/capturaController");

router.get("/buscar/:idSensor", function (req, res) {
    capturaController.registrar(req, res);
})

module.exports = router;