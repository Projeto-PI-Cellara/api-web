const database = require("../database/config")

function registrar(valor, duracao, fkEmpresa, fkCriador) {
    const instrucaoSql = `
        INSERT INTO codigo_ativacao (valor, duracao, fk_empresa, fk_criador) VALUES
        ('${valor}', '${duracao}', ${fkEmpresa}, ${fkCriador});
        `

    return database.executar(instrucaoSql)
}

module.exports = {
    registrar
};