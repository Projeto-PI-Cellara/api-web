/* FORMAÇÃO DOS GRÁFICOS */

/* GRÁFICO 1: Irradiância em cada setor ao longo do dia */
new Chart(document.getElementById('chart_irradiancia_setor_line'), {
    type: 'line',
    data: {
        labels: ['04h', '05h', '06h', '07h', '08h', '09h', '10h', '11h', '12h', '13h', '14h', '15h', '16h', '17h', '18h', '19h'],
        datasets: [
            { label: 'Setor 1', data: [4, 85, 215, 385, 580, 760, 880, 940, 950, 905], backgroundColor: '#ffd059', borderColor: '#FFB800', tension: 0.3 },
            { label: 'Setor 2', data: [6, 110, 270, 470, 680, 840, 890, 870, 830, 789], backgroundColor: '#7676ff', borderColor: '#0000FF', tension: 0.3 },
            { label: 'Setor 3', data: [2, 55, 150, 300, 470, 650, 800, 905, 955, 968], backgroundColor: '#ff7979', borderColor: '#FF0000', tension: 0.3 },
            { label: 'Setor 4', data: [3, 75, 190, 350, 540, 720, 850, 925, 940, 920], backgroundColor: '#acff7b', borderColor: '#5eff00', tension: 0.3 },
            { label: 'Setor 5', data: [5, 95, 235, 420, 620, 790, 870, 900, 880, 850], backgroundColor: '#ff79ff', borderColor: '#ff00ff', tension: 0.3 }
        ]
    },
    options: {}
});

/* GRÁFICO 2: Geração ideal de energia elétrica de cada setor hoje (colunas) */
new Chart(document.getElementById('chart_irradiancia_setor_stack'), {
    type: 'line',
    data: {
        labels: ['04h', '05h', '06h', '07h', '08h', '09h', '10h', '11h', '12h', '13h', '14h', '15h', '16h', '17h', '18h', '19h'],
        datasets: [
            { label: 'Setor 1', data: [20.00, 20.24, 20.28, 20.00, 20.07, 20.21, 20.51, 20.71, 20.86, 20.42], fill: true, backgroundColor: '#ffd059', borderColor: '#FFB800', tension: 0.3 },
            { label: 'Setor 2', data: [30.00, 26.19, 25.47, 24.42, 23.53, 22.34, 20.75, 19.16, 18.22, 17.80], fill: true, backgroundColor: '#7676ff', borderColor: '#0000FF', tension: 0.3 },
            { label: 'Setor 3', data: [10.00, 13.09, 14.15, 15.58, 16.26, 17.29, 18.65, 19.93, 20.96, 21.84], fill: true, backgroundColor: '#ff7979', borderColor: '#FF0000', tension: 0.3 },
            { label: 'Setor 4', data: [15.00, 17.86, 17.93, 18.18, 18.69, 19.15, 19.81, 20.38, 20.64, 20.76], fill: true, backgroundColor: '#acff7b', borderColor: '#5eff00', tension: 0.3 },
            { label: 'Setor 5', data: [25.00, 22.62, 22.17, 21.82, 21.45, 21.01, 20.28, 19.82, 19.32, 19.18], fill: true, backgroundColor: '#ff79ff', borderColor: '#ff00ff', tension: 0.3 }
        ]
    },
    options: {
        interaction: { mode: 'index', intersect: false },
        scales: {
            y: {
                stacked: true,
                min: 0,
                max: 100,
                ticks: { callback: v => v + '%' }
            }
        }
    }
});


/* GRÁFICO 3: Participação de cada setor na geração ideal de energia elétrica hoje (pizza) */
new Chart(document.getElementById('chart_irradiacao_setor_pie'), {
    type: 'pie',
    data: {
        labels: [
            'Setor 1',
            'Setor 2',
            'Setor 3',
            'Setor 4',
            'Setor 5'
        ],
        datasets: [{
            data: [
                905,
                789,
                968,
                920,
                850
            ],
            backgroundColor: [
                '#ffd059',
                '#7676ff',
                '#ff7979',
                '#acff7b',
                '#ff79ff'
            ],
            borderColor: [
                '#FFB800',
                '#0000FF',
                '#FF0000',
                '#5eff00',
                '#ff00ff',
            ],
            hoverOffset: 4
        }],
    },
    options: {
      plugins: {
        legend: {
          position: 'bottom',
        }
      }
    }
});