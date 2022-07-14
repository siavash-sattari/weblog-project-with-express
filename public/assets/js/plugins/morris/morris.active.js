(function ($) {
    "use strict";

    /*Example Morris Line*/
    var exampleMorrisLine = new Morris.Line({
        element: 'example-morris-line',
        data: [
            { year: '2008', value: 20 },
            { year: '2009', value: 10 },
            { year: '2010', value: 5 },
            { year: '2011', value: 5 },
            { year: '2012', value: 20 }
        ],
        xkey: 'year',
        ykeys: ['value'],
        labels: ['Value'],
    });

    /*Example Morris Bar*/
    var exampleMorrisBar = new Morris.Bar({
        element: 'example-morris-bar',
        data: [
            { y: '2006', a: 100, b: 90 },
            { y: '2007', a: 75,  b: 65 },
            { y: '2008', a: 50,  b: 40 },
            { y: '2009', a: 75,  b: 65 },
            { y: '2010', a: 50,  b: 40 },
            { y: '2011', a: 75,  b: 65 },
            { y: '2012', a: 100, b: 90 }
        ],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Series A', 'Series B']
    });

    /*Example Morris Area*/
    var exampleMorrisArea = new Morris.Area({
        element: 'example-morris-area',
        data: [
            { y: '2006', a: 100, b: 90 },
            { y: '2007', a: 75,  b: 65 },
            { y: '2008', a: 50,  b: 40 },
            { y: '2009', a: 75,  b: 65 },
            { y: '2010', a: 50,  b: 40 },
            { y: '2011', a: 75,  b: 65 },
            { y: '2012', a: 100, b: 90 }
        ],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Series A', 'Series B']
    });

    /*Example Morris Donuts*/
    var exampleMorrisDonuts = new Morris.Donut({
        element: 'example-morris-donuts',
        data: [
            {label: "Download Sales", value: 12},
            {label: "In-Store Sales", value: 30},
            {label: "Mail-Order Sales", value: 20}
        ]
    });


    $(function () {
        // Chart Resize function
        function chartResize() {
            setTimeout(function() {
                
                exampleMorrisLine.redraw();
                exampleMorrisBar.redraw();
                exampleMorrisArea.redraw();
                exampleMorrisDonuts.redraw();
                
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