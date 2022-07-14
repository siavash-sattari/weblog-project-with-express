(function ($) {
    "use strict";
    
    /*Quill Editor*/
    if( $('.quill').length ) {
        var quill = new Quill('.quill', {
            theme: 'snow'
        });
    }
    
})(jQuery);