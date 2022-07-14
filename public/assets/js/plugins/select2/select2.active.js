(function ($) {
    "use strict";
    
    /*Select2*/
    if( $('.select2').length ) {
        $('.select2').select2();
    }
    
    /*Select2 Tags*/
    if( $('.select2-tags').length ) {
        $('.select2-tags').select2({
            tags: true
        });
    }
    
})(jQuery);