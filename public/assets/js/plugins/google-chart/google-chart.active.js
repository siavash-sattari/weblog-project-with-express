(function ($) {
    "use strict";
    
      google.charts.load('current', {'packages':['corechart']});
    
    
    /*Example Google Chart Line*/
    google.charts.setOnLoadCallback(googleChartLine);
    function googleChartLine() {
        var data = google.visualization.arrayToDataTable([
            ['Year', 'Sales', 'Expenses'],
            ['2004',  1000,      400],
            ['2005',  1170,      460],
            ['2006',  660,       1120],
            ['2007',  1030,      540]
        ]);
        var options = {
            title: 'Company Performance',
            curveType: 'function',
            legend: { position: 'top' },
            backgroundColor: 'transparent',
            colors: ['#428bfa', '#fb7da4'],
            chartArea: {
                left: 50,
                right: 10,
                bottom: 25,
            },
            pointSize: 3,
        };
        var chart = new google.visualization.LineChart(document.getElementById('example-google-line'));
        chart.draw(data, options);
    }
    
    /*Example Google Chart Area*/
    google.charts.setOnLoadCallback(googleChartArea);
    function googleChartArea() {
        var data = google.visualization.arrayToDataTable([
            ['Year', 'Sales', 'Expenses'],
            ['2004',  1000,      400],
            ['2005',  1170,      460],
            ['2006',  660,       1120],
            ['2007',  1030,      540]
        ]);
        var options = {
            title: 'Company Performance',
            curveType: 'function',
            legend: { position: 'top' },
            backgroundColor: 'transparent',
            colors: ['#428bfa', '#fb7da4'],
            chartArea: {
                left: 50,
                right: 10,
                bottom: 25,
            },
            pointSize: 3,
        };
        var chart = new google.visualization.AreaChart(document.getElementById('example-google-area'));
        chart.draw(data, options);
    }
    
    /*Example Google Chart Stepped Area*/
    google.charts.setOnLoadCallback(googleChartSArea);
    function googleChartSArea() {
        var data = google.visualization.arrayToDataTable([
            ['Year', 'Sales', 'Expenses'],
            ['2004',  1000,      400],
            ['2005',  1170,      460],
            ['2006',  660,       1120],
            ['2007',  1030,      540]
        ]);
        var options = {
            title: 'Company Performance',
            curveType: 'function',
            legend: { position: 'top' },
            backgroundColor: 'transparent',
            colors: ['#428bfa', '#fb7da4'],
            chartArea: {
                left: 50,
                right: 10,
                bottom: 25,
            },
            pointSize: 3,
            isStacked: true
        };
        var chart = new google.visualization.SteppedAreaChart(document.getElementById('example-google-sArea'));
        chart.draw(data, options);
    }
    
    /*Example Google Chart Bar*/
    google.charts.setOnLoadCallback(googleChartBar);
    function googleChartBar() {
        var data = google.visualization.arrayToDataTable([
            ['Year', 'Sales', 'Expenses', 'Profit'],
            ['2004',  1000, 400, 600],
            ['2005',  1170, 460, 710],
            ['2006',  660, 1120, -460],
            ['2007',  1030, 540, 490]
        ]);
        var options = {
            title: 'Company Income',
            legend: { position: 'top' },
            bar: {groupWidth: "95%"},
            backgroundColor: 'transparent',
            chartArea: {
                left: 50,
                right: 40,
                bottom: 25,
            },
            orientation: 'horizontal',
            colors: ['#428bfa', '#fb7da4', '#17a2b8'],
        };
        var chart = new google.visualization.BarChart(document.getElementById('example-google-bar'));
        chart.draw(data, options);
    }
    
    /*Example Google Chart Pie*/
    google.charts.setOnLoadCallback(googleChartPie);
    function googleChartPie() {
        var data = google.visualization.arrayToDataTable([
            ['Task', 'Hours per Day'],
            ['Work',     11],
            ['Eat',      2],
            ['Commute',  2],
            ['Watch TV', 2],
            ['Sleep',    7]
        ]);
        var options = {
            title: 'My Daily Activities',
            backgroundColor: 'transparent',
            colors: ['#428bfa', '#fb7da4', '#17a2b8', '#ff9666', '#29db2d'],
            chartArea: {
                left: 30,
                right: 30,
                bottom: 25,
            },
        };
        var chart = new google.visualization.PieChart(document.getElementById('example-google-pie'));
        chart.draw(data, options);
    }
    
    /*Example Google Chart Donut*/
    google.charts.setOnLoadCallback(googleChartDonut);
    function googleChartDonut() {
        var data = google.visualization.arrayToDataTable([
            ['Task', 'Hours per Day'],
            ['Work',     11],
            ['Eat',      2],
            ['Commute',  2],
            ['Watch TV', 2],
            ['Sleep',    7]
        ]);
        var options = {
            title: 'My Daily Activities',
            backgroundColor: 'transparent',
            pieSliceText: 'none',
            pieHole: 0.5,
            colors: ['#428bfa', '#fb7da4', '#17a2b8', '#ff9666', '#29db2d'],
            chartArea: {
                left: 30,
                right: 30,
                bottom: 25,
            },
        };
        var chart = new google.visualization.PieChart(document.getElementById('example-google-donut'));
        chart.draw(data, options);
    }
    
    /*Example Google Chart Scatter*/
    google.charts.setOnLoadCallback(googleChartScatter);
    function googleChartScatter() {
        var data = google.visualization.arrayToDataTable([
            ['Age', 'Weight'],
            [ 8,      12],
            [ 4,      5.5],
            [ 11,     14],
            [ 5,      6],
            [ 3,      3.5],
            [ 6.5,    7]
        ]);
        var options = {
            title: 'Age vs. Weight comparison',
            hAxis: {title: 'Age', minValue: 0, maxValue: 15},
            vAxis: {title: 'Weight', minValue: 0, maxValue: 15},
            legend: 'none',
            backgroundColor: 'transparent',
            chartArea: {
                left: 50,
                right: 10,
                bottom: 25,
            },
        };
        var chart = new google.visualization.ScatterChart(document.getElementById('example-google-scatter'));
        chart.draw(data, options);
    }
    
    $(function () {
        // Chart Resize function
        function chartResize() {
            setTimeout(function() {
                google.charts.setOnLoadCallback(googleChartLine);
                google.charts.setOnLoadCallback(googleChartArea);
                google.charts.setOnLoadCallback(googleChartSArea);
                google.charts.setOnLoadCallback(googleChartBar);
                google.charts.setOnLoadCallback(googleChartPie);
                google.charts.setOnLoadCallback(googleChartDonut);
                google.charts.setOnLoadCallback(googleChartScatter);

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