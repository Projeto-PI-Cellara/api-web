/* DEFINIÇÃO DE VALORES */

// Definindo variáveis condicionais de estrutura de repetição
let contador
let contador2

// Definindo apenas os valores de hoje para formação das linhas (de cada setor)
let linhaIrradianciaHoraSetor1 = []
contador = horaAtual - 4 // subtrai as primeiras 4h não lidas (das 0h00 às 03h59)
contador2 = 1
while (contador >= 0) {
    linhaIrradianciaHoraSetor1[contador] = irradianciaHoraSetor1[irradianciaHoraSetor1.length - contador2]

    contador--
    contador2++
}

let linhaIrradianciaHoraSetor2 = []
contador = horaAtual - 4
contador2 = 1
while (contador >= 0) {
    linhaIrradianciaHoraSetor2[contador] = irradianciaHoraSetor2[irradianciaHoraSetor2.length - contador2]

    contador--
    contador2++
}

let linhaIrradianciaHoraSetor3 = []
contador = horaAtual - 4
contador2 = 1
while (contador >= 0) {
    linhaIrradianciaHoraSetor3[contador] = irradianciaHoraSetor3[irradianciaHoraSetor3.length - contador2]

    contador--
    contador2++
}

// Definindo os últimos valores de irradiância de cada setor
const irradianciasAtuais = [
    linhaIrradianciaHoraSetor1[linhaIrradianciaHoraSetor1.length - 1],
    linhaIrradianciaHoraSetor2[linhaIrradianciaHoraSetor2.length - 1],
    linhaIrradianciaHoraSetor3[linhaIrradianciaHoraSetor3.length - 1],
]

// Definindo a irradiância e seu setor numa lista de tamanho 2, para a maior e a menor irradiância
let maiorIrradianciaAtual = [irradianciasAtuais[0], setores[0]]
let menorIrradianciaAtual = [irradianciasAtuais[0], setores[0]]

contador = 0
while (contador < irradianciasAtuais.length) {
    const irradiancia = irradianciasAtuais[contador]
    const setor = setores[contador]

    if (irradiancia > maiorIrradianciaAtual[0]) {
        maiorIrradianciaAtual = [irradiancia, setor]
    } else if (irradiancia < menorIrradianciaAtual[0]) {
        menorIrradianciaAtual = [irradiancia, setor]
    }

    contador++
}



/* DEFINIÇÃO DE INFORMAÇÕES BÁSICAS */

// Data e hora dos registros
data_hora_atual.innerHTML = `
    <h2>Data e hora dos últimos registros:</h2>
    <h3>Data: ${dataAtual}</h3>
    <h2>Hora: ${horaAtual}h00</h2>
`



/* FORMAÇÃO DOS KPIS */

// KPI 1: Variação da irradiância entre o melhor e o pior setor
const variacaoIrradiancia = (maiorIrradianciaAtual[0] - menorIrradianciaAtual[0]) / maiorIrradianciaAtual[0] * 100
kpi_razao_diferenca_irradiancia.innerHTML = `
    <h2>${variacaoIrradiancia.toFixed(2)}%</h2>
`

// KPI 2: Maior irradiância entre os setores
kpi_maior_irradiancia.innerHTML = `
    <h2>${maiorIrradianciaAtual[0]} W/m²</h2>
    <h4>Do setor "${maiorIrradianciaAtual[1]}"</h4>
`

// KPI 3: Menor irradiância entre os setores
kpi_menor_irradiancia.innerHTML = `
    <h2>${menorIrradianciaAtual[0]} W/m²</h2>
    <h4>Do setor "${menorIrradianciaAtual[1]}"</h4>
`

// KPI 4: Média de geração ideal de energia de todos os setores
let mediaGeracaoIdeal = 0
contador = 0
while (contador < geracaoIdealSetor.length) {
    mediaGeracaoIdeal += geracaoIdealSetor[contador]

    contador++
}
mediaGeracaoIdeal /= geracaoIdealSetor.length

kpi_media_geracao_ideal.innerHTML = `
    <h2>${mediaGeracaoIdeal.toFixed(2)} kWh</h2>
`



/* FORMAÇÃO DOS GRÁFICOS */

// GRÁFICO 1: Irradiância por hora de cada setor hoje (linha)
new Chart(
    // Implementação do gráfico no canvas
    document.getElementById('grafico_irradiancia_hora_line'),

    // Configurando o gráfico
    {
        // Definindo tipo do gráfico
        type: 'line',

        // Preenchendo com os valores
        data: {
            // Valores do eixo X
            labels: [
                '04h',
                '05h',
                '06h',
                '07h',
                '08h',
                '09h',
                '10h',
                '11h',
                '12h',
                '13h',
                '14h',
                '15h',
                '16h',
                '17h',
                '18h',
                '19h'
            ],

            // Linhas do gráfico
            datasets: [
                {
                    // Estilização da linha
                    label: 'Setor 1',
                    backgroundColor: '#FFBB00',
                    borderColor: '#DD9900',
                    tension: 0.5,

                    // Valores da linha (eixo x)
                    data: linhaIrradianciaHoraSetor1,
                },
                {
                    // Estilização da linha
                    label: 'Setor 2',
                    backgroundColor: 'blue',
                    borderColor: 'blue',
                    tension: 0.5,

                    // Valores da linha (eixo x)
                    data: linhaIrradianciaHoraSetor2,
                },
                {
                    // Estilização da linha
                    label: 'Setor 3',
                    backgroundColor: 'red',
                    borderColor: 'red',
                    tension: 0.5,

                    // Valores da linha (eixo x)
                    data: linhaIrradianciaHoraSetor3,
                }
            ]
        },

        // Opções adicionais do gráfico
        options: {
            responsive: true,
            maintainAspectRatio: false,

            // Unidade de medida
            scales: {
                // Para o eixo y
                y: {
                    // Para cada um dos elementos do eixo
                    ticks: {
                        // Inclui a unidade de medida ao lado do número
                        callback: function (value) {
                            return value + ' W/m²';
                        }
                    }
                }
            }
        }
    }
)



/* GRÁFICO 2: Geração ideal de energia elétrica de cada setor hoje (colunas) */

new Chart(
    // Implementação do gráfico no canvas
    document.getElementById('grafico_geracao_ideal_bar'),

    // Configurando o gráfico
    {
        // Definindo tipo do gráfico
        type: 'bar',

        // Preencher gráfico com os valores
        data: {
            // Valores do eixo y
            labels: setores,

            // Linhas do gráfico
            datasets: [
                {
                    // Estilização da linha
                    label: "Geração de energia ideal por setor",
                    backgroundColor: [
                        '#FFBB00',
                        'blue',
                        'red'
                    ],
                    borderColor: [
                        '#DD9900',
                        '#000099',
                        '#990000'
                    ],
                    borderWidth: 3,

                    // Valores da linha (eixo x)
                    data: geracaoIdealSetor,
                }

            ]
        },

        // Opções adicionais do gráfico
        options: {
            responsive: true,
            maintainAspectRatio: true,

            // Plugin para desativar a legenda nativa do gráfico de barras
            plugins: {
                legend: {
                    display: false
                }
            },

            // Unidade de medida
            scales: {
                // Para o eixo y
                y: {
                    // Para cada um dos elementos do eixo
                    ticks: {
                        // Inclui a unidade de medida ao lado do número
                        callback: function (value) {
                            return value + ' kWh';
                        }
                    }
                }
            }

        }
    }
)



/* GRÁFICO 3: Participação de cada setor na geração ideal de energia elétrica hoje (pizza) */

new Chart(
    // Implementação do gráfico no canvas
    document.getElementById('grafico_geracao_ideal_pie'),

    // Configurando o gráfico
    {
        // Definindo tipo do gráfico
        type: 'pie',

        // Preencher gráfico com os valores
        data: {
            // Valores do eixo y
            labels: setores,

            // Linhas do gráfico
            datasets: [
                {
                    // Estilização da linha
                    backgroundColor: [
                        '#FFBB00',
                        'blue',
                        'red'
                    ],
                    borderColor: [
                        '#DD9900',
                        '#000099',
                        '#990000'
                    ],


                    // Valores da linha (eixo x)
                    data: geracaoIdealSetor,
                }

            ]
        },

        options: {
            responsive: true,
            maintainAspectRatio: true,

            plugins: {
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            const total = context.dataset.data.reduce((a, b) => a + b, 0);
                            const porcentagem = (context.parsed / total * 100).toFixed(1);
                            return `${context.label}: ${porcentagem}%`;
                        }
                    }
                }
            }
        }
    }
)