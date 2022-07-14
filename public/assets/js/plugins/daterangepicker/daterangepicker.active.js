(function ($) {
    "use strict";
    
    /*Input Date*/
    if( $('.input-date').length ) {
        $('.input-date').daterangepicker({
            locale: {
                direction: 'rtl',
            }
        });
    }
    
    /*Input Date & Time*/
    if( $('.input-date-time').length ) {
        $('.input-date-time').daterangepicker({
            timePicker: true,
            locale: {
                direction: 'rtl',
            }
        });
    }
    
    /*Input Date Single*/
    if( $('.input-date-single').length ) {
        $('.input-date-single').daterangepicker({
            singleDatePicker: true,
            showDropdowns: true,
            locale: {
                direction: 'rtl',
            }
        });
    }
    
    /*Input Date Empty*/
    if( $('.input-date-empty').length ) {
        $('.input-date-empty').daterangepicker({
            autoUpdateInput: false,
            locale: {
                direction: 'rtl',
            }
        });
    }

    /*Input Date Predefined*/
    if( $('.input-date-predefined').length ) {
        var start = moment().subtract(29, 'days');
        var end = moment();
        function cb(start, end) {
            $('.input-date-predefined').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
        }
        $('.input-date-predefined').daterangepicker({
            startDate: start,
            endDate: end,
            ranges: {
               'Today': [moment(), moment()],
               'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
               'Last 7 Days': [moment().subtract(6, 'days'), moment()],
               'Last 30 Days': [moment().subtract(29, 'days'), moment()],
               'This Month': [moment().startOf('month'), moment().endOf('month')],
               'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
            },
            locale: {
                direction: 'rtl',
            }
        }, cb);
        cb(start, end);
    }
    
})(jQuery);