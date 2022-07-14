(function ($) {
    "use strict";

    /*Example Echart Smothed Line*/
    var $exampleEchartSmothedLine = $('.example-echart-smothed-line');
    if ($exampleEchartSmothedLine.length) {

        var $exampleEchartSmothedLineId = $exampleEchartSmothedLine.attr('id');
        var $exampleEchartSmothedLineActive = echarts.init(document.getElementById($exampleEchartSmothedLineId));
        // specify chart configuration item and data
        var option = {
            legend: {},
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                axisTick: {
                    show: false,
                },
                axisLine: {
                    show: false,
                },
                axisLabel: {
                    color: '#aaaaaa',
                },
            },
            yAxis: {
                type: 'value',
                axisTick: {
                    show: false,
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(136,136,136,0.2)',
                    }
                },
                axisLabel: {
                    color: '#aaaaaa',
                },
                splitLine: {
                    lineStyle: {
                        color: 'rgba(136,136,136,0.2)',
                    }
                },
            },
            series: [{
                data: [320, 532, 801, 834, 1290, 1330, 1320],
                type: 'line',
                smooth: true
            }]
        };
        // use configuration item and data specified to show chart
        $exampleEchartSmothedLineActive.setOption(option);
    }

    /*Example Echart Basic Area*/
    var $exampleEchartBasicArea = $('.example-echart-basic-area');
    if ($exampleEchartBasicArea.length) {

        var $exampleEchartBasicAreaId = $exampleEchartBasicArea.attr('id');
        var $exampleEchartBasicAreaActive = echarts.init(document.getElementById($exampleEchartBasicAreaId));
        // specify chart configuration item and data
        var option = {
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                axisTick: {
                    show: false,
                },
                axisLine: {
                    show: false,
                },
                axisLabel: {
                    color: '#aaaaaa',
                },
            },
            yAxis: {
                type: 'value',
                axisTick: {
                    show: false,
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(136,136,136,0.2)',
                    }
                },
                axisLabel: {
                    color: '#aaaaaa',
                },
                splitLine: {
                    lineStyle: {
                        color: 'rgba(136,136,136,0.2)',
                    }
                },
            },
            series: [{
                data: [320, 532, 801, 834, 1290, 1330, 1500],
                type: 'line',
                areaStyle: {}
            }]
        };
        // use configuration item and data specified to show chart
        $exampleEchartBasicAreaActive.setOption(option);
    }

    /*Example Echart Step Line*/
    var $exampleEchartStepLine = $('.example-echart-step-line');
    if ($exampleEchartStepLine.length) {

        var $exampleEchartStepLineId = $exampleEchartStepLine.attr('id');
        var $exampleEchartStepLineActive = echarts.init(document.getElementById($exampleEchartStepLineId));
        // specify chart configuration item and data
        var option = {
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                textStyle: {
                    color: '#aaaaaa'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true,
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                },
                iconStyle: {
                    borderColor: '#aaaaaa'
                }
            },
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                axisTick: {
                    show: false,
                },
                axisLine: {
                    show: false,
                },
                axisLabel: {
                    color: '#aaaaaa',
                },
            },
            yAxis: {
                type: 'value',
                axisTick: {
                    show: false,
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(136,136,136,0.2)',
                    }
                },
                axisLabel: {
                    color: '#aaaaaa',
                },
                splitLine: {
                    lineStyle: {
                        color: 'rgba(136,136,136,0.2)',
                    }
                },
            },
            series: [
                {
                    name:'Step Start',
                    type:'line',
                    step: 'start',
                    data:[120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name:'Step Middle',
                    type:'line',
                    step: 'middle',
                    data:[220, 282, 201, 234, 290, 430, 410]
                },
                {
                    name:'Step End',
                    type:'line',
                    step: 'end',
                    data:[450, 432, 401, 454, 590, 530, 510]
                }
            ]
        };
        // use configuration item and data specified to show chart
        $exampleEchartStepLineActive.setOption(option);
    }

    /*Example Echart Bar Simple*/
    var $exampleEchartBarSimple = $('.example-echart-bar-simple');
    if ($exampleEchartBarSimple.length) {

        var $exampleEchartBarSimpleId = $exampleEchartBarSimple.attr('id');
        var $exampleEchartBarSimpleActive = echarts.init(document.getElementById($exampleEchartBarSimpleId));
        // specify chart configuration item and data
        var option = {
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                axisTick: {
                    show: false,
                },
                axisLine: {
                    show: false,
                },
                axisLabel: {
                    color: '#aaaaaa',
                },
            },
            yAxis: {
                type: 'value',
                axisTick: {
                    show: false,
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(136,136,136,0.2)',
                    }
                },
                axisLabel: {
                    color: '#aaaaaa',
                },
                splitLine: {
                    lineStyle: {
                        color: 'rgba(136,136,136,0.2)',
                    }
                },
            },
            series: [{
                data: [120, 200, 150, 80, 70, 110, 130],
                type: 'bar'
            }]
        };
        // use configuration item and data specified to show chart
        $exampleEchartBarSimpleActive.setOption(option);
    }

    /*Example Echart Bar Dataset*/
    var $exampleEchartBarDataset = $('.example-echart-bar-dataset');
    if ($exampleEchartBarDataset.length) {

        var $exampleEchartBarDatasetId = $exampleEchartBarDataset.attr('id');
        var $exampleEchartBarDatasetActive = echarts.init(document.getElementById($exampleEchartBarDatasetId));
        // specify chart configuration item and data
        var option = {
            legend: {
                textStyle: {
                    color: '#aaaaaa'
                }
            },
            tooltip: {},
            dataset: {
                source: [
                    ['product', '2015', '2016', '2017'],
                    ['Matcha Latte', 43.3, 85.8, 93.7],
                    ['Milk Tea', 83.1, 73.4, 55.1],
                    ['Cheese Cocoa', 86.4, 65.2, 82.5],
                    ['Walnut Brownie', 72.4, 53.9, 39.1]
                ]
            },
            xAxis: {type: 'category',
                axisTick: {
                    show: false,
                },
                axisLine: {
                    show: false,
                },
                axisLabel: {
                    color: '#aaaaaa',
                },
            },
            yAxis: {
                type: 'value',
                axisTick: {
                    show: false,
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(136,136,136,0.2)',
                    }
                },
                axisLabel: {
                    color: '#aaaaaa',
                },
                splitLine: {
                    lineStyle: {
                        color: 'rgba(136,136,136,0.2)',
                    }
                },
            },
            // Declare several bar series, each will be mapped
            // to a column of dataset.source by default.
            series: [
                {type: 'bar'},
                {type: 'bar'},
                {type: 'bar'}
            ]
        };
        // use configuration item and data specified to show chart
        $exampleEchartBarDatasetActive.setOption(option);
    }

    /*Example Echart Pie Chart*/
    var $exampleEchartPieChart = $('.example-echart-pie-chart');
    if ($exampleEchartPieChart.length) {

        var $exampleEchartPieChartId = $exampleEchartPieChart.attr('id');
        var $exampleEchartPieChartActive = echarts.init(document.getElementById($exampleEchartPieChartId));
        // specify chart configuration item and data
        var option = {
            tooltip : {
                trigger: 'item',
                formatter: function (params) {
                    return 'USD/'+params.name+'<br> $'+ params.value
                },
                backdropColor: 'rgba(50,50,50,1)',
                padding: [5,10],
            },
            series : [
                {
                    type:'pie',
                    radius : '80%',
                    center: ['50%', '55%'],
                    data:[
                        {value:8300, name:'BTC'},
                        {value:7400, name:'ETH'},
                        {value:5000, name:'XRP'},
                        {value:4000, name:'XMR'},
                    ],
                    roseType: 'radius',
                    label: {
                        show: false,
                    },
                    itemStyle: {
                        normal: {
                            shadowBlur: 30,
                            shadowColor: 'rgba(0, 0, 0, 0.3)'
                        }
                    },
                    animationType: 'scale',
                    animationEasing: 'elasticOut',
                    animationDelay: function (idx) {
                        return Math.random() * 200;
                    }
                }
            ]
        };
        // use configuration item and data specified to show chart
        $exampleEchartPieChartActive.setOption(option);
    }

    /*Example Echart Doughnut Chart*/
    var $exampleEchartDoughnutChart = $('.example-echart-doughnut-chart');
    if ($exampleEchartDoughnutChart.length) {

        var $exampleEchartDoughnutChartId = $exampleEchartDoughnutChart.attr('id');
        var $exampleEchartDoughnutChartActive = echarts.init(document.getElementById($exampleEchartDoughnutChartId));
        // specify chart configuration item and data
        var option = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                data:['One','Two','Three','Four','Five'],
                textStyle: {
                    color: '#aaaaaa'
                }
            },
            series: [
                {
                    name:'Doughnut',
                    type:'pie',
                    radius: ['50%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '30',
                                fontWeight: 'bold'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data:[
                        {value:335, name:'One'},
                        {value:310, name:'Two'},
                        {value:234, name:'Three'},
                        {value:135, name:'Four'},
                        {value:1548, name:'Five'}
                    ]
                }
            ]
        };
        // use configuration item and data specified to show chart
        $exampleEchartDoughnutChartActive.setOption(option);
    }

    /*Example Echart Scatter Simple*/
    var $exampleEchartScatterSimple = $('.example-echart-scatter-simple');
    if ($exampleEchartScatterSimple.length) {

        var $exampleEchartScatterSimpleId = $exampleEchartScatterSimple.attr('id');
        var $exampleEchartScatterSimpleActive = echarts.init(document.getElementById($exampleEchartScatterSimpleId));
        // specify chart configuration item and data
        var option = {
            xAxis: {
                axisTick: {
                    show: false,
                },
                axisLine: {
                    show: false,
                },
                axisLabel: {
                    color: '#aaaaaa',
                },
                splitLine: {
                    lineStyle: {
                        color: 'rgba(136,136,136,0.2)',
                    }
                },
            },
            yAxis: {
                type: 'value',
                axisTick: {
                    show: false,
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(136,136,136,0.2)',
                    }
                },
                axisLabel: {
                    color: '#aaaaaa',
                },
                splitLine: {
                    lineStyle: {
                        color: 'rgba(136,136,136,0.2)',
                    }
                },
            },
            series: [{
                symbolSize: 20,
                data: [
                    [10.0, 8.04],
                    [8.0, 6.95],
                    [13.0, 7.58],
                    [9.0, 8.81],
                    [11.0, 8.33],
                    [14.0, 9.96],
                    [6.0, 7.24],
                    [4.0, 4.26],
                    [12.0, 10.84],
                    [7.0, 4.82],
                    [5.0, 5.68]
                ],
                type: 'scatter'
            }]
        };
        // use configuration item and data specified to show chart
        $exampleEchartScatterSimpleActive.setOption(option);
    }

    /*Example Echart Scatter Bubble*/
    var $exampleEchartScatterBubble = $('.example-echart-scatter-bubble');
    if ($exampleEchartScatterBubble.length) {

        var $exampleEchartScatterBubbleId = $exampleEchartScatterBubble.attr('id');
        var $exampleEchartScatterBubbleActive = echarts.init(document.getElementById($exampleEchartScatterBubbleId));
        // specify chart configuration item and data
        var data = [
            [[28604,77,17096869,'Australia',1990],[31163,77.4,27662440,'Canada',1990],[1516,68,1154605773,'China',1990],[13670,74.7,10582082,'Cuba',1990],[28599,75,4986705,'Finland',1990],[29476,77.1,56943299,'France',1990],[31476,75.4,78958237,'Germany',1990],[28666,78.1,254830,'Iceland',1990],[1777,57.7,870601776,'India',1990],[29550,79.1,122249285,'Japan',1990],[2076,67.9,20194354,'North Korea',1990],[12087,72,42972254,'South Korea',1990],[24021,75.4,3397534,'New Zealand',1990],[43296,76.8,4240375,'Norway',1990],[10088,70.8,38195258,'Poland',1990],[19349,69.6,147568552,'Russia',1990],[10670,67.3,53994605,'Turkey',1990],[26424,75.7,57110117,'United Kingdom',1990],[37062,75.4,252847810,'United States',1990]],
            [[44056,81.8,23968973,'Australia',2015],[43294,81.7,35939927,'Canada',2015],[13334,76.9,1376048943,'China',2015],[21291,78.5,11389562,'Cuba',2015],[38923,80.8,5503457,'Finland',2015],[37599,81.9,64395345,'France',2015],[44053,81.1,80688545,'Germany',2015],[42182,82.8,329425,'Iceland',2015],[5903,66.8,1311050527,'India',2015],[36162,83.5,126573481,'Japan',2015],[1390,71.4,25155317,'North Korea',2015],[34644,80.7,50293439,'South Korea',2015],[34186,80.6,4528526,'New Zealand',2015],[64304,81.6,5210967,'Norway',2015],[24787,77.3,38611794,'Poland',2015],[23038,73.13,143456918,'Russia',2015],[19360,76.5,78665830,'Turkey',2015],[38225,81.4,64715810,'United Kingdom',2015],[53354,79.1,321773631,'United States',2015]]
        ];
        var option = {
            legend: {
                right: 10,
                data: ['1990', '2015'],
                textStyle: {
                    color: '#aaaaaa',
                }
            },
            xAxis: {
                axisLine: {
                    lineStyle: {
                        color: 'rgba(136,136,136,0.2)',
                    }
                },
                axisLabel: {
                    color: '#aaaaaa',
                },
                splitLine: {
                    lineStyle: {
                        type: 'dashed',
                        color: 'rgba(136,136,136,0.2)',
                    }
                }
            },
            yAxis: {
                type: 'value',
                axisTick: {
                    show: false,
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(136,136,136,0.2)',
                    }
                },
                axisLabel: {
                    color: '#aaaaaa',
                },
                splitLine: {
                    lineStyle: {
                        color: 'rgba(136,136,136,0.2)',
                    }
                },
            },
            series: [{
                name: '1990',
                data: data[0],
                type: 'scatter',
                symbolSize: function (data) {
                    return Math.sqrt(data[2]) / 5e2;
                },
                label: {
                    emphasis: {
                        show: true,
                        formatter: function (param) {
                            return param.data[3];
                        },
                        position: 'top'
                    }
                },
                itemStyle: {
                    normal: {
                        shadowBlur: 10,
                        shadowColor: 'rgba(120, 36, 50, 0.5)',
                        shadowOffsetY: 5,
                        color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                            offset: 0,
                            color: 'rgb(251, 118, 123)'
                        }, {
                            offset: 1,
                            color: 'rgb(204, 46, 72)'
                        }])
                    }
                }
            }, {
                name: '2015',
                data: data[1],
                type: 'scatter',
                symbolSize: function (data) {
                    return Math.sqrt(data[2]) / 5e2;
                },
                label: {
                    emphasis: {
                        show: true,
                        formatter: function (param) {
                            return param.data[3];
                        },
                        position: 'top'
                    }
                },
                itemStyle: {
                    normal: {
                        shadowBlur: 10,
                        shadowColor: 'rgba(25, 100, 150, 0.5)',
                        shadowOffsetY: 5,
                        color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                            offset: 0,
                            color: 'rgb(129, 227, 238)'
                        }, {
                            offset: 1,
                            color: 'rgb(25, 183, 207)'
                        }])
                    }
                }
            }]
        };
        // use configuration item and data specified to show chart
        $exampleEchartScatterBubbleActive.setOption(option);
    }


    $(function () {
        // Chart Resize function
        function chartResize() {
            setTimeout(function() {
                // Echart
                if ($exampleEchartSmothedLine.length) {
                    $exampleEchartSmothedLineActive.resize();
                }
                if ($exampleEchartBasicArea.length) {
                    $exampleEchartBasicAreaActive.resize();
                }
                if ($exampleEchartStepLine.length) {
                    $exampleEchartStepLineActive.resize();
                }
                if ($exampleEchartBarSimple.length) {
                    $exampleEchartBarSimpleActive.resize();
                }
                if ($exampleEchartBarDataset.length) {
                    $exampleEchartBarDatasetActive.resize();
                }
                if ($exampleEchartPieChart.length) {
                    $exampleEchartPieChartActive.resize();
                }
                if ($exampleEchartDoughnutChart.length) {
                    $exampleEchartDoughnutChartActive.resize();
                }
                if ($exampleEchartScatterSimple.length) {
                    $exampleEchartScatterSimpleActive.resize();
                }
                if ($exampleEchartScatterBubble.length) {
                    $exampleEchartScatterBubbleActive.resize();
                }

            }, 200);
        }
        // Resize Window Resize
        $(window).on('resize', function(){
            chartResize();
        });
        // Resize on Side Header Toggle
        $('.side-header-toggle').on('click', function(){
            chartResize();
        });
    });
    
})(jQuery);