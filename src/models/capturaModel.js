const database = require("../database/config");

function buscarCapturasDoDia(idSensor) {
    var instrucaoSql = `
        SELECT
            dthr,
            irradiancia_estimada,
            valor_ldr
        FROM captura
        WHERE DATE(dthr) = '2026-11-17' AND
            fk_sensor = ${idSensor}
        ORDER BY dthr ASC;
        `

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarCapturasDoDia
}
