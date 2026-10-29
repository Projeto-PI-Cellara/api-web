/* FORMAÇÃO DOS GRÁFICOS */

/* GRÁFICO 1: Irradiância em cada setor ao longo do dia (registros a cada 10 min, de 04h00 a 19h50) */
new Chart(document.getElementById('chart_irradiancia_setor_line'), {
    type: 'line',
    data: {
        labels: Array.from({ length: 96 }, (_, i) => String(4 + Math.floor(i / 6)).padStart(2, '0') + 'h' + String((i % 6) * 10).padStart(2, '0')),
        datasets: [
            { label: 'Setor 1', data: [4, 14, 26, 39, 53, 68, 85, 104, 122, 143, 168, 191, 215, 239, 267, 299, 319, 354, 385, 412, 438, 480, 507, 549, 580, 611, 623, 670, 705, 735, 760, 781, 796, 818, 859, 860, 880, 899, 899, 916, 929, 936, 940, 943, 962, 925, 959, 951, 950, 963, 953, 920, 928, 921, 905], backgroundColor: '#ffd059', borderColor: '#FFB800', tension: 0.3 },
            { label: 'Setor 2', data: [6, 20, 35, 53, 69, 90, 110, 132, 155, 182, 211, 242, 270, 298, 330, 370, 391, 434, 470, 510, 546, 575, 611, 647, 680, 709, 740, 777, 799, 822, 840, 852, 859, 890, 890, 888, 890, 887, 899, 883, 886, 866, 870, 854, 836, 848, 835, 838, 830, 818, 810, 812, 808, 795, 789], backgroundColor: '#7676ff', borderColor: '#0000FF', tension: 0.3 },
            { label: 'Setor 3', data: [2, 8, 15, 24, 34, 44, 55, 67, 82, 97, 113, 130, 150, 168, 191, 221, 239, 275, 300, 329, 351, 388, 413, 436, 470, 505, 530, 559, 591, 617, 650, 674, 704, 721, 749, 771, 800, 820, 851, 860, 869, 890, 905, 916, 922, 932, 927, 945, 955, 954, 948, 969, 984, 957, 968], backgroundColor: '#ff7979', borderColor: '#FF0000', tension: 0.3 },
            { label: 'Setor 4', data: [3, 12, 23, 34, 47, 60, 75, 90, 108, 125, 145, 170, 190, 214, 238, 263, 291, 323, 350, 379, 411, 451, 480, 510, 540, 565, 610, 643, 663, 696, 720, 750, 778, 787, 829, 825, 850, 869, 892, 922, 926, 911, 925, 935, 920, 935, 948, 928, 940, 941, 938, 931, 931, 920, 920], backgroundColor: '#acff7b', borderColor: '#5eff00', tension: 0.3 },
            { label: 'Setor 5', data: [5, 17, 29, 45, 60, 77, 95, 114, 134, 157, 184, 207, 235, 263, 300, 317, 359, 387, 420, 448, 484, 527, 555, 589, 620, 657, 683, 691, 737, 758, 790, 804, 838, 839, 838, 855, 870, 878, 885, 890, 896, 904, 900, 901, 884, 900, 881, 892, 880, 875, 871, 849, 880, 865, 850], backgroundColor: '#ff79ff', borderColor: '#ff00ff', tension: 0.3 }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        elements: { point: { radius: 0 } },
        scales: {
            x: {
                ticks: {
                    autoSkip: false,
                    maxRotation: 0,
                    callback: function (v) { return v % 6 === 0 ? this.getLabelForValue(v).slice(0, 3) : ''; }
                }
            }
        }
    }
});

/* GRÁFICO 2: Participação da irradiância em cada setor (área empilhada em 100%) */
new Chart(document.getElementById('chart_irradiancia_setor_stack'), {
    type: 'line',
    data: {
        labels: Array.from({ length: 96 }, (_, i) => String(4 + Math.floor(i / 6)).padStart(2, '0') + 'h' + String((i % 6) * 10).padStart(2, '0')),
        datasets: [
            { label: 'Setor 1', data: [20.00, 19.72, 20.31, 20.00, 20.15, 20.06, 20.24, 20.51, 20.30, 20.31, 20.46, 20.32, 20.28, 20.22, 20.14, 20.34, 19.95, 19.96, 20.00, 19.83, 19.64, 19.83, 19.76, 20.10, 20.07, 20.05, 19.55, 20.06, 20.17, 20.26, 20.21, 20.23, 20.03, 20.17, 20.63, 20.48, 20.51, 20.65, 20.31, 20.49, 20.62, 20.77, 20.71, 20.73, 21.26, 20.37, 21.08, 20.88, 20.86, 21.16, 21.09, 20.53, 20.48, 20.66, 20.42], fill: true, backgroundColor: '#ffd059', borderColor: '#FFB800', tension: 0.3 },
            { label: 'Setor 2', data: [30.00, 28.17, 27.34, 27.18, 26.24, 26.55, 26.19, 26.04, 25.79, 25.85, 25.70, 25.74, 25.47, 25.21, 24.89, 25.17, 24.45, 24.48, 24.42, 24.54, 24.49, 23.75, 23.81, 23.69, 23.53, 23.27, 23.23, 23.26, 22.86, 22.66, 22.34, 22.07, 21.61, 21.95, 21.37, 21.15, 20.75, 20.38, 20.31, 19.75, 19.66, 19.21, 19.16, 18.77, 18.48, 18.68, 18.35, 18.40, 18.22, 17.97, 17.92, 18.12, 17.83, 17.83, 17.80], fill: true, backgroundColor: '#7676ff', borderColor: '#0000FF', tension: 0.3 },
            { label: 'Setor 3', data: [10.00, 11.27, 11.72, 12.31, 12.93, 12.98, 13.09, 13.21, 13.64, 13.78, 13.77, 13.83, 14.15, 14.21, 14.40, 15.03, 14.95, 15.51, 15.58, 15.83, 15.74, 16.02, 16.09, 15.97, 16.26, 16.58, 16.63, 16.74, 16.91, 17.01, 17.29, 17.46, 17.71, 17.78, 17.98, 18.36, 18.65, 18.84, 19.23, 19.23, 19.29, 19.75, 19.93, 20.14, 20.38, 20.53, 20.37, 20.75, 20.96, 20.96, 20.97, 21.62, 21.72, 21.47, 21.84], fill: true, backgroundColor: '#ff7979', borderColor: '#FF0000', tension: 0.3 },
            { label: 'Setor 4', data: [15.00, 16.90, 17.97, 17.43, 17.87, 17.70, 17.86, 17.75, 17.97, 17.76, 17.66, 18.09, 17.93, 18.11, 17.95, 17.89, 18.20, 18.22, 18.18, 18.24, 18.43, 18.63, 18.71, 18.67, 18.69, 18.54, 19.15, 19.25, 18.97, 19.18, 19.15, 19.42, 19.57, 19.41, 19.90, 19.65, 19.81, 19.96, 20.15, 20.62, 20.55, 20.21, 20.38, 20.55, 20.34, 20.60, 20.84, 20.38, 20.64, 20.68, 20.75, 20.78, 20.55, 20.64, 20.76], fill: true, backgroundColor: '#acff7b', borderColor: '#5eff00', tension: 0.3 },
            { label: 'Setor 5', data: [25.00, 23.94, 22.66, 23.08, 22.81, 22.71, 22.62, 22.49, 22.30, 22.30, 22.41, 22.02, 22.17, 22.25, 22.62, 21.57, 22.45, 21.83, 21.82, 21.56, 21.70, 21.77, 21.63, 21.57, 21.45, 21.56, 21.44, 20.69, 21.09, 20.89, 21.01, 20.82, 21.08, 20.69, 20.12, 20.36, 20.28, 20.17, 20.00, 19.91, 19.88, 20.06, 19.82, 19.81, 19.54, 19.82, 19.36, 19.59, 19.32, 19.23, 19.27, 18.95, 19.42, 19.40, 19.18], fill: true, backgroundColor: '#ff79ff', borderColor: '#ff00ff', tension: 0.3 }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: { mode: 'index', intersect: false },
        elements: { point: { radius: 0 } },
        scales: {
            x: {
                ticks: {
                    autoSkip: false,
                    maxRotation: 0,
                    callback: function (v) { return v % 6 === 0 ? this.getLabelForValue(v).slice(0, 3) : ''; }
                }
            },
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