(function ($) {
    "use strict";
    
    /*Default*/
    if( $('.data-table-default').length ) {
        $('.data-table-default').DataTable({
            responsive: true,
            language: {
                paginate: {
                    previous: '<i class="zmdi zmdi-chevron-left"></i>',
                    next:     '<i class="zmdi zmdi-chevron-right"></i>'
                }
            }
        });
    }
    
    /*Export Buttons*/
    if( $('.data-table-export').length ) {
        $('.data-table-export').DataTable({
            responsive: true,
            dom: 'Bfrtip',
            buttons: ['copy', 'csv', 'excel', 'pdf', 'print'],
            language: {
                paginate: {
                    previous: '<i class="zmdi zmdi-chevron-left"></i>',
                    next:     '<i class="zmdi zmdi-chevron-right"></i>'
                }
            }
        });
    }
    
})(jQuery);