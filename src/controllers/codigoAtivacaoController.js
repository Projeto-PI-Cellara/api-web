const codigoAtivacaoModel = require("../models/codigoAtivacaoModel")

function registrar(req, res) {
    const valor = req.body.valor;
    const duracao = req.body.duracao;
    const fkEmpresa = req.body.fkEmpresa;
    const fkCriador = req.body.fkCriador;

    codigoAtivacaoModel.registrar(valor, duracao, fkEmpresa, fkCriador).then((resultado) => {
        res.status(201).json(resultado);
    });
}

module.exports = {
    registrar
};