const codigoAtivacaoModel = require("../models/codigoAtivacaoModel")

function registrar(req, res) {
    const valor = req.body.valor;
    const duracao = req.body.duracao;
    const fkEmpresa = req.body.fkEmpresa;
    const fkCriador = req.body.fkCriador;

    codigoAtivacaoModel.registrar(valor, duracao, fkEmpresa, fkCriador).then((resultado) => {
        res.status(201).json({
            id: resultado.insertId,
            valor: valor
        });
    });
}

function expirar(req, res) {
    const id = req.params.id;

    codigoAtivacaoModel.expirar(id).then((resultado) => {
        res.status(204).json(resultado);
    })
}

function buscar(req, res) {
    codigoAtivacaoModel.buscar().then((resultado) => {
        res.status(200).json(resultado);
    })
}

function usar(req, res) {
    const id = req.params.id
    codigoAtivacaoModel.usar(id).then((resultado) => {
        res.status(201).json(resultado);
    })
}

module.exports = {
    registrar,
    expirar,
    buscar,
    usar
};