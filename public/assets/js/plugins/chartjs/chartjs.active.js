(function ($) {
    "use strict";
    
    if( $('#chartjs-revenue-statistics-chart').length ) {
        var RSC = document.getElementById('chartjs-revenue-statistics-chart').getContext('2d');
        var RSCconfig = {
            type: 'line',
            data: {
                labels: ['0', '5', '10','15', '20','25', '30','35', '40','45', '50'],
                datasets: [{
                    label: 'Total Sale',
                    data: [10,20,27,50,60,55,65,90,70,85,90],
                    backgroundColor: '#fb7da4',
                    borderColor: '#fb7da4',
                    borderWidth: 3,
                    pointBackgroundColor: '#ffffff',
                    pointBorderColor: '#fb7da4',
                    pointBorderWidth: 3,
                    pointRadius: 6,
                    pointHoverBackgroundColor: '#ffffff',
                    pointHoverBorderWidth: 3,
                    pointHoverRadius: 6,
                    fill: false,
                    lineTension: 0
                },
                {
                    label: 'Total View',
                    data: [20,15,8,60,68,35,60,80,65,60,85],
                    backgroundColor: '#428bfa',
                    borderColor: '#428bfa',
                    borderWidth: 3,
                    pointBackgroundColor: '#ffffff',
                    pointBorderColor: '#428bfa',
                    pointBorderWidth: 3,
                    pointRadius: 6,
                    pointHoverBackgroundColor: '#ffffff',
                    pointHoverBorderWidth: 3,
                    pointHoverRadius: 6,
                    fill: false,
                    lineTension: 0
                },
                {
                    label: 'Total Support',
                    data: [5,7,18,45,55,45,40,45,60,75, 100],
                    backgroundColor: '#ff9666',
                    borderColor: '#ff9666',
                    borderWidth: 3,
                    pointBackgroundColor: '#ffffff',
                    pointBorderColor: '#ff9666',
                    pointBorderWidth: 3,
                    pointRadius: 6,
                    pointHoverBackgroundColor: '#ffffff',
                    pointHoverBorderWidth: 3,
                    pointHoverRadius: 6,
                    fill: false,
                    lineTension: 0
                }]
            },
            options: {
                maintainAspectRatio: false,
                legend: {
                    display: false,
                    labels: {
                        fontColor: '#aaaaaa',
                    }
                },
                tooltips: {
                    mode: 'point',
                    intersect: false,
                    xPadding: 10,
                    yPadding: 10,
                    caretPadding: 10,
                    cornerRadius: 4,
                    titleFontSize: 0,
                    titleMarginBottom: 2,
                    displayColors: false,
                },
                hover: {
                    mode: 'nearest',
                    intersect: true
                },
                scales: {
                    xAxes: [{
                        display: true,
                        gridLines: {
                            display: false
                        },
                        ticks: {
                            fontColor: '#aaaaaa',
                        },
                    }],
                    yAxes: [{
                        display: true,
                        gridLines: {
                            color: 'rgba(136,136,136,0.1)',
                            lineWidth: 3,
                            drawBorder: false,
                            zeroLineWidth: 3,
                            zeroLineColor: 'rgba(136,136,136,0.1)',
                        },
                        ticks: {
                            padding: 15,
                            stepSize: 20,
                            fontColor: '#aaaaaa',
                        },
                    }]
                }
            }
        };
        var RSCchartjs = new Chart(RSC, RSCconfig);
    }
    
    if( $('#chartjs-revenue-statistics-chart-2').length ) {
        var RSC2 = document.getElementById('chartjs-revenue-statistics-chart-2').getContext('2d');
        var RSC2config = {
            type: 'line',
            data: {
                labels: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70],
                datasets: [{
                    label: 'Bitcoin',
                    data: [10,20,27,50,60,55,65,90,70,85,90,75,70,90,100],
                    backgroundColor: '#fb7da4',
                    borderColor: '#fb7da4',
                    borderWidth: 3,
                    pointBackgroundColor: '#ffffff',
                    pointBorderColor: '#fb7da4',
                    pointBorderWidth: 3,
                    pointRadius: 6,
                    pointHoverBackgroundColor: '#ffffff',
                    pointHoverBorderWidth: 3,
                    pointHoverRadius: 6,
                    fill: false,
                    lineTension: 0
                },
                {
                    label: 'Ethereum',
                    data: [20,15,8,60,68,35,60,80,65,60,85,80,50,70,90],
                    backgroundColor: '#428bfa',
                    borderColor: '#428bfa',
                    borderWidth: 3,
                    pointBackgroundColor: '#ffffff',
                    pointBorderColor: '#428bfa',
                    pointBorderWidth: 3,
                    pointRadius: 6,
                    pointHoverBackgroundColor: '#ffffff',
                    pointHoverBorderWidth: 3,
                    pointHoverRadius: 6,
                    fill: false,
                    lineTension: 0
                },
                {
                    label: 'Ripple',
                    data: [5,7,18,45,55,45,40,45,60,75,70,50,70,55,85],
                    backgroundColor: '#ff9666',
                    borderColor: '#ff9666',
                    borderWidth: 3,
                    pointBackgroundColor: '#ffffff',
                    pointBorderColor: '#ff9666',
                    pointBorderWidth: 3,
                    pointRadius: 6,
                    pointHoverBackgroundColor: '#ffffff',
                    pointHoverBorderWidth: 3,
                    pointHoverRadius: 6,
                    fill: false,
                    lineTension: 0
                },
                {
                    label: 'Monero',
                    data: [5,10,20,40,50,52,48,55,60,78,88,70,80,65,80],
                    backgroundColor: '#17a2b8',
                    borderColor: '#17a2b8',
                    borderWidth: 3,
                    pointBackgroundColor: '#ffffff',
                    pointBorderColor: '#17a2b8',
                    pointBorderWidth: 3,
                    pointRadius: 6,
                    pointHoverBackgroundColor: '#ffffff',
                    pointHoverBorderWidth: 3,
                    pointHoverRadius: 6,
                    fill: false,
                    lineTension: 0
                }]
            },
            options: {
                maintainAspectRatio: false,
                legend: {
                    display: false,
                    labels: {
                        fontColor: '#aaaaaa',
                    }
                },
                tooltips: {
                    mode: 'point',
                    intersect: false,
                    xPadding: 10,
                    yPadding: 10,
                    caretPadding: 10,
                    cornerRadius: 4,
                    titleFontSize: 0,
                    titleMarginBottom: 2,
                    displayColors: false,
                },
                hover: {
                    mode: 'nearest',
                    intersect: true
                },
                scales: {
                    xAxes: [{
                        display: true,
                        gridLines: {
                            display: false
                        },
                        ticks: {
                            fontColor: '#aaaaaa',
                        },
                    }],
                    yAxes: [{
                        display: true,
                        gridLines: {
                            color: 'rgba(136,136,136,0.1)',
                            lineWidth: 3,
                            drawBorder: false,
                            zeroLineWidth: 3,
                            zeroLineColor: 'rgba(136,136,136,0.1)',
                        },
                        ticks: {
                            padding: 15,
                            stepSize: 20,
                            fontColor: '#aaaaaa',
                        },
                    }]
                }
            }
        };
        var RSC2chartjs = new Chart(RSC2, RSC2config);
    }
    
    if( $('#chartjs-market-trends-chart').length ) {
        var MTC = document.getElementById('chartjs-market-trends-chart').getContext('2d');
        var MTCconfig = {
            type: 'doughnut',
            data: {
                labels: ['New customer', 'Revenue', 'Product sold', 'Profit'],
                datasets: [{
                    data: [300, 200, 200, 400],
                    backgroundColor: [
                        '#fb7da4',
                        '#7dfb9b',
                        '#ff9666',
                        '#428bfa',
                    ],
                }]
            },
            options: {
                maintainAspectRatio: false,
                legend: {
                    labels: {
                        boxWidth: 30,
                        padding: 20,
                        fontColor: '#aaaaaa',
                    }
                },
                tooltips: {
                    mode: 'point',
                    intersect: false,
                    xPadding: 10,
                    yPadding: 10,
                    caretPadding: 10,
                    cornerRadius: 4,
                    titleFontSize: 0,
                    titleMarginBottom: 2,
                },
				animation: {
					animateScale: true,
					animateRotate: true
				},
            }
        };
        var MTCchartjs = new Chart(MTC, MTCconfig);
    }
    
    if( $('#chartjs-market-trends-chart-2').length ) {
        
        var MTCR = document.getElementById('chartjs-market-trends-chart-2').getContext('2d');
        var MTCRconfig = {
			type: 'radar',
			data: {
				labels: ['Today', '7 Days', '15 Days', '30 Days', '90 Days', '180 Days', '360 Days'],
				datasets: [{
					label: 'Bitcoin',
					backgroundColor: 'rgba(251,125,164,0.30)',
					borderColor: '#fb7da4',
					pointBackgroundColor: '#fb7da4',
					data: [80,70,75,15,85,90,100]
				},{
					label: 'Ethereum',
					backgroundColor: 'rgba(66,139,250,0.30)',
					borderColor: '#428bfa',
					pointBackgroundColor: '#428bfa',
					data: [70,30,30,90,95,50,15]
				},{
					label: 'Ripple',
					backgroundColor: 'rgba(255,150,102,0.30)',
					borderColor: '#ff9666',
					pointBackgroundColor: '#ff9666',
					data: [80,45,95,60,70,55,35]
				},{
					label: 'Monero',
					backgroundColor: 'rgba(23,162,184,0.30)',
					borderColor: '#17a2b8',
					pointBackgroundColor: '#17a2b8',
					data: [50,20,55,45,45,65,95]
				},]
			},
			options: {
                maintainAspectRatio: false,
				legend: {
					position: 'top',
                    labels: {
                        fontColor: '#aaaaaa',
                    }
				},
                tooltips: {
                    mode: 'point',
                    intersect: false,
                    xPadding: 10,
                    yPadding: 10,
                    caretPadding: 10,
                    cornerRadius: 4,
                    titleFontSize: 0,
                    titleMarginBottom: 2,
                },
                scale: {
                    gridLines: {
                        color: 'rgba(136,136,136,0.1)',
                        zeroLineColor: 'rgba(136,136,136,0.1)',
                    },
					ticks: {
						beginAtZero: true
					}
				}
			}
		};
		var MTCRchartjs = new Chart(MTCR, MTCRconfig);
    }
    
    if( $('#chartjs-analytics-chart').length ) {
        
        var ALY = document.getElementById('chartjs-analytics-chart').getContext('2d');
        
        var ALYgradient = ALY.createLinearGradient(0, 0, 0, 400);
        ALYgradient.addColorStop(0, 'rgba(66,139,250,1)');   
        ALYgradient.addColorStop(1, 'rgba(66,139,250,0)');
        
        var ALYconfig = {
            type: 'line',
            data: {
                labels: ['One', 'Two','Three', 'Four','Five', 'Six'],
                datasets: [{
                    backgroundColor: ALYgradient,
                    borderColor: '#428bfa',
                    borderWidth: 3,
                    pointBackgroundColor: '#ffffff',
                    pointBorderColor: '#428bfa',
                    pointBorderWidth: 3,
                    pointRadius: 6,
                    pointHoverBackgroundColor: '#ffffff',
                    pointHoverBorderWidth: 3,
                    pointHoverRadius: 6,
                    data: [10,30,20,45,35, 55],
                }]
            },
            options: {
                maintainAspectRatio: false,
                legend: {
                    display: false,
                    labels: {
                        fontColor: '#aaaaaa',
                    }
                },
                tooltips: {
                    mode: 'point',
                    intersect: false,
                    xPadding: 10,
                    yPadding: 10,
                    caretPadding: 10,
                    cornerRadius: 4,
                    titleFontSize: 0,
                    titleMarginBottom: 2,
                    displayColors: false,
                },
                hover: {
                    mode: 'nearest',
                    intersect: true
                },
                scales: {
                    xAxes: [{
                        display: true,
                        gridLines: {
                            display: false
                        },
                        ticks: {
                            fontColor: '#aaaaaa',
                        },
                    }],
                    yAxes: [{
                        display: true,
                        gridLines: {
                            color: 'rgba(136,136,136,0.1)',
                            lineWidth: 1,
                            drawBorder: false,
                            zeroLineWidth: 1,
                            zeroLineColor: 'rgba(136,136,136,0.1)',
                        },
                        ticks: {
                            padding: 15,
                            stepSize: 20,
                            fontColor: '#aaaaaa',
                        },
                    }]
                }
            }
		};
		var ALYchartjs = new Chart(ALY, ALYconfig);
    }
    
    if( $('#chartjs-graph-chart').length ) {
        
        var GRAPH = document.getElementById('chartjs-graph-chart').getContext('2d');
        var GRAPHconfig = {
            type: 'pie',
            data: {
                labels: ["Desktops", "Tablets", "Mobiles", "Mobiles"],
                datasets: [{
                    data: [20, 23, 30, 27],
                    backgroundColor: ["#428bfa", "#fb7da4", "#ff9666", "#17a2b8"],
                    hoverBackgroundColor: ["#428bfa", "#fb7da4", "#ff9666", "#17a2b8"],
                    hoverBorderColor: "#fff"
                }]
            },
            options: {
                maintainAspectRatio: false,
                legend: {
                    display: false,
                    labels: {
                        fontColor: '#aaaaaa',
                    }
                },
                tooltips: {
                    mode: 'point',
                    intersect: false,
                    xPadding: 10,
                    yPadding: 10,
                    caretPadding: 10,
                    cornerRadius: 4,
                    titleFontSize: 0,
                    titleMarginBottom: 2,
                    displayColors: false,
                },
                hover: {
                    mode: 'nearest',
                    intersect: true
                },
            }
		};
		var GRAPHchartjs = new Chart(GRAPH, GRAPHconfig);
    }
    
    
    
    /*Example ChartJs For ChartJs Page*/
    if( $('#example-chartjs-line').length ) {
        var ECL = document.getElementById('example-chartjs-line').getContext('2d');
        var ECLconfig = {
            type: 'line',
            data: {
                labels: ['0', '5', '10','15', '20','25', '30','35', '40','45', '50'],
                datasets: [{
                    label: 'Total Sale',
                    data: [10,20,27,50,60,55,65,90,70,85,90],
                    backgroundColor: '#fb7da4',
                    borderColor: '#fb7da4',
                    pointBorderColor: '#fb7da4',
                    fill: false,
                },
                {
                    label: 'Total View',
                    data: [20,15,8,60,68,35,60,80,65,60,85],
                    backgroundColor: '#428bfa',
                    borderColor: '#428bfa',
                    pointBorderColor: '#428bfa',
                    fill: false,
                }]
            },
            options: {
                maintainAspectRatio: false,
				legend: {
                    labels: {
                        fontColor: '#aaaaaa',
                    }
                },
                scales: {
                    xAxes: [{
                        display: true,
                        gridLines: {
                            color: 'rgba(136,136,136,0.1)',
                            lineWidth: 1,
                            drawBorder: false,
                            zeroLineWidth: 1,
                            zeroLineColor: 'rgba(136,136,136,0.1)',
                        },
                        ticks: {
                            fontColor: '#aaaaaa',
                        },
                    }],
                    yAxes: [{
                        display: true,
                        gridLines: {
                            color: 'rgba(136,136,136,0.1)',
                            lineWidth: 1,
                            drawBorder: false,
                            zeroLineWidth: 1,
                            zeroLineColor: 'rgba(136,136,136,0.1)',
                        },
                        ticks: {
                            fontColor: '#aaaaaa',
                        },
                    }]
                }
            }
        };
        var ECLchartjs = new Chart(ECL, ECLconfig);
    }
    if( $('#example-chartjs-lineArea').length ) {
        var ECLA = document.getElementById('example-chartjs-lineArea').getContext('2d');
        var ECLAconfig = {
            type: 'line',
            data: {
                labels: ['0', '5', '10','15', '20','25', '30','35', '40','45', '50'],
                datasets: [{
                    label: 'Total View',
                    data: [20,35,30,60,68,35,60,80,65,60,85],
                    backgroundColor: 'rgba(66, 139, 250, 0.3)',
                    borderColor: '#428bfa',
                    pointBorderColor: '#428bfa',
                }]
            },
            options: {
                maintainAspectRatio: false,
				legend: {
                    labels: {
                        fontColor: '#aaaaaa',
                    }
                },
                scales: {
                    xAxes: [{
                        display: true,
                        gridLines: {
                            color: 'rgba(136,136,136,0.1)',
                            lineWidth: 1,
                            drawBorder: false,
                            zeroLineWidth: 1,
                            zeroLineColor: 'rgba(136,136,136,0.1)',
                        },
                        ticks: {
                            fontColor: '#aaaaaa',
                        },
                    }],
                    yAxes: [{
                        display: true,
                        gridLines: {
                            color: 'rgba(136,136,136,0.1)',
                            lineWidth: 1,
                            drawBorder: false,
                            zeroLineWidth: 1,
                            zeroLineColor: 'rgba(136,136,136,0.1)',
                        },
                        ticks: {
                            fontColor: '#aaaaaa',
                        },
                    }]
                }
            }
        };
        var ECLAchartjs = new Chart(ECLA, ECLAconfig);
    }
    if( $('#example-chartjs-barV').length ) {
        var ECBV = document.getElementById('example-chartjs-barV').getContext('2d');
        var ECBVconfig = {
            type: 'bar',
            data: {
                labels: ['0', '5', '10','15', '20','25', '30','35', '40'],
                datasets: [{
                    label: 'Total Sale',
                    data: [10,20,27,50,60,90,70,85,90],
                    backgroundColor: '#fb7da4',
                    fill: false,
                },
                {
                    label: 'Total View',
                    data: [20,15,8,60,68,80,65,60,85],
                    backgroundColor: '#428bfa',
                    fill: false,
                }]
            },
            options: {
                maintainAspectRatio: false,
				legend: {
                    labels: {
                        fontColor: '#aaaaaa',
                    }
                },
                scales: {
                    xAxes: [{
                        display: true,
                        gridLines: {
                            color: 'rgba(136,136,136,0.1)',
                            lineWidth: 1,
                            drawBorder: false,
                            zeroLineWidth: 1,
                            zeroLineColor: 'rgba(136,136,136,0.1)',
                        },
                        ticks: {
                            fontColor: '#aaaaaa',
                        },
                    }],
                    yAxes: [{
                        display: true,
                        gridLines: {
                            color: 'rgba(136,136,136,0.1)',
                            lineWidth: 1,
                            drawBorder: false,
                            zeroLineWidth: 1,
                            zeroLineColor: 'rgba(136,136,136,0.1)',
                        },
                        ticks: {
                            fontColor: '#aaaaaa',
                        },
                    }]
                }
            }
        };
        var ECBVchartjs = new Chart(ECBV, ECBVconfig);
    }
    if( $('#example-chartjs-barH').length ) {
        var ECBH = document.getElementById('example-chartjs-barH').getContext('2d');
        var ECBHconfig = {
            type: 'horizontalBar',
            data: {
                labels: ['0', '5', '10','15', '20','25', '30','35', '40'],
                datasets: [{
                    label: 'Total Sale',
                    data: [10,20,27,50,60,90,70,85,90],
                    backgroundColor: '#fb7da4',
                    fill: false,
                },
                {
                    label: 'Total View',
                    data: [20,15,8,60,68,80,65,60,85],
                    backgroundColor: '#428bfa',
                    fill: false,
                }]
            },
            options: {
                maintainAspectRatio: false,
				legend: {
                    labels: {
                        fontColor: '#aaaaaa',
                    }
                },
                scales: {
                    xAxes: [{
                        display: true,
                        gridLines: {
                            color: 'rgba(136,136,136,0.1)',
                            lineWidth: 1,
                            drawBorder: false,
                            zeroLineWidth: 1,
                            zeroLineColor: 'rgba(136,136,136,0.1)',
                        },
                        ticks: {
                            fontColor: '#aaaaaa',
                        },
                    }],
                    yAxes: [{
                        display: true,
                        gridLines: {
                            color: 'rgba(136,136,136,0.1)',
                            lineWidth: 1,
                            drawBorder: false,
                            zeroLineWidth: 1,
                            zeroLineColor: 'rgba(136,136,136,0.1)',
                        },
                        ticks: {
                            fontColor: '#aaaaaa',
                        },
                    }]
                }
            }
        };
        var ECBHchartjs = new Chart(ECBH, ECBHconfig);
    }
    if( $('#example-chartjs-scatter').length ) {
        var ECSC = document.getElementById('example-chartjs-scatter').getContext('2d');
        var ECSCconfig = {
            data: {
                datasets: [{
                    label: 'Total Sale',
                    data: [{
                        x: 5,
                        y: 15
                    }, {
                        x: 15,
                        y: 55
                    }, {
                        x: 30,
                        y: 40
                    }, {
                        x: 55,
                        y: 70
                    }, {
                        x: 80,
                        y: 45
                    }],
                    backgroundColor: 'rgba(251, 125, 164, 0.3)',
                    borderColor: '#fb7da4',
                    borderWidth: 1,
                    pointRadius: 4,
                },
                {
                    label: 'Total View',
                    data: [{
                        x: 15,
                        y: 10
                    }, {
                        x: 25,
                        y: 45
                    }, {
                        x: 35,
                        y: 45
                    }, {
                        x: 50,
                        y: 85
                    }, {
                        x: 85,
                        y: 55
                    }],
                    backgroundColor: 'rgba(66, 139, 250, 0.3)',
                    borderColor: '#428bfa',
                    borderWidth: 1,
                    pointRadius: 4,
                }]
            },
            options: {
                maintainAspectRatio: false,
				legend: {
                    labels: {
                        fontColor: '#aaaaaa',
                    }
                },
                scales: {
                    xAxes: [{
                        display: true,
                        gridLines: {
                            color: 'rgba(136,136,136,0.1)',
                            lineWidth: 1,
                            drawBorder: false,
                            zeroLineWidth: 1,
                            zeroLineColor: 'rgba(136,136,136,0.1)',
                        },
                        ticks: {
                            fontColor: '#aaaaaa',
                        },
                    }],
                    yAxes: [{
                        display: true,
                        gridLines: {
                            color: 'rgba(136,136,136,0.1)',
                            lineWidth: 1,
                            drawBorder: false,
                            zeroLineWidth: 1,
                            zeroLineColor: 'rgba(136,136,136,0.1)',
                        },
                        ticks: {
                            fontColor: '#aaaaaa',
                        },
                    }]
                }
            }
        };
        var ECSCchartjs = new Chart.Scatter(ECSC, ECSCconfig);
    }
    if( $('#example-chartjs-doughnut').length ) {
        var ECDU = document.getElementById('example-chartjs-doughnut').getContext('2d');
        var ECDUconfig = {
            type: 'doughnut',
            data: {
                labels: ["Desktops", "Tablets", "Mobiles", "Mobiles"],
                datasets: [{
                    data: [300, 200, 200, 400],
                    backgroundColor: [
                        '#fb7da4',
                        '#7dfb9b',
                        '#ff9666',
                        '#428bfa',
                    ],
                }]
            },
            options: {
                maintainAspectRatio: false,
				legend: {
					position: 'left',
                    labels: {
                        boxWidth: 30,
                        padding: 20,
                        fontColor: '#aaaaaa',
                    }
                },
                tooltips: {
                    mode: 'point',
                    intersect: false,
                    xPadding: 10,
                    yPadding: 10,
                    caretPadding: 10,
                    cornerRadius: 4,
                    titleFontSize: 0,
                    titleMarginBottom: 2,
                },
				animation: {
					animateScale: true,
					animateRotate: true
				}
            }
        };
        var ECDUchartjs = new Chart(ECDU, ECDUconfig);
    }
    if( $('#example-chartjs-pie').length ) {
        var ECPIE = document.getElementById('example-chartjs-pie').getContext('2d');
        var ECPIEconfig = {
            type: 'pie',
            data: {
                labels: ["Desktops", "Tablets", "Mobiles", "Mobiles"],
                datasets: [{
                    data: [20, 23, 30, 27],
                    backgroundColor: ["#428bfa", "#fb7da4", "#ff9666", "#17a2b8"],
                    hoverBackgroundColor: ["#428bfa", "#fb7da4", "#ff9666", "#17a2b8"],
                    hoverBorderColor: "#fff"
                }]
            },
            options: {
                maintainAspectRatio: false,
				legend: {
					position: 'left',
                    labels: {
                        fontColor: '#aaaaaa',
                    }
				},
                tooltips: {
                    mode: 'point',
                    intersect: false,
                    xPadding: 10,
                    yPadding: 10,
                    caretPadding: 10,
                    cornerRadius: 4,
                    titleFontSize: 0,
                    titleMarginBottom: 2,
                    displayColors: false,
                },
                hover: {
                    mode: 'nearest',
                    intersect: true
                },
            }
		};
        var ECPIEchartjs = new Chart(ECPIE, ECPIEconfig);
    }
    if( $('#example-chartjs-polar').length ) {
        var ECPolar = document.getElementById('example-chartjs-polar').getContext('2d');
        var ECPolarconfig = {
            type: 'pie',
            data: {
                labels: ["Desktops", "Tablets", "Mobiles", "Mobiles"],
                datasets: [{
					data: ['80', '55', '45', '20', '30'],
					backgroundColor: ['#428bfa', '#fb7da4', '#29db2d', '#ff9666', '#17a2b8'],
				}],
            },
            options: {
                maintainAspectRatio: false,
				legend: {
					position: 'left',
                    labels: {
                        fontColor: '#aaaaaa',
                    }
				},
                scale: {
                    gridLines: {
                        color: 'rgba(136,136,136,0.1)',
                        zeroLineColor: 'rgba(136,136,136,0.1)',
                    },
					ticks: {
						beginAtZero: true
					}
				},
				animation: {
					animateRotate: false,
					animateScale: true
				}
            }
		};
        var ECPolarchartjs = new Chart.PolarArea(ECPolar, ECPolarconfig);
    }
    if( $('#example-chartjs-radar').length ) {
        var ECRadarr = document.getElementById('example-chartjs-radar').getContext('2d');
        var ECRadarrconfig = {
			type: 'radar',
			data: {
				labels: ['Today', '7 Days', '15 Days', '30 Days', '90 Days', '180 Days', '360 Days'],
				datasets: [{
					label: 'Bitcoin',
					backgroundColor: 'rgba(251,125,164,0.30)',
					borderColor: '#fb7da4',
					pointBackgroundColor: '#fb7da4',
					data: [80,70,75,15,85,90,100]
				},{
					label: 'Ethereum',
					backgroundColor: 'rgba(66,139,250,0.30)',
					borderColor: '#428bfa',
					pointBackgroundColor: '#428bfa',
					data: [70,30,30,90,95,50,15]
				}]
			},
			options: {
                maintainAspectRatio: false,
				legend: {
					position: 'left',
                    labels: {
                        fontColor: '#cccccc',
                    }
				},
                tooltips: {
                    mode: 'point',
                    intersect: false,
                    xPadding: 10,
                    yPadding: 10,
                    caretPadding: 10,
                    cornerRadius: 4,
                    titleFontSize: 0,
                    titleMarginBottom: 2,
                },
                scale: {
                    gridLines: {
                        color: 'rgba(136,136,136,0.1)',
                        zeroLineColor: 'rgba(136,136,136,0.1)',
                    },
					ticks: {
						beginAtZero: true
					}
				},
			}
		};
        var ECRadarrchartjs = new Chart(ECRadarr, ECRadarrconfig);
    }
    
})(jQuery);