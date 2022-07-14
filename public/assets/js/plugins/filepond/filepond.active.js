(function ($) {
    "use strict";
    
    /*File Pond*/
    if( $('.file-pond').length ) {
        FilePond.registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);
        const inputElement = document.querySelector('.file-pond');
        const pond = FilePond.create( inputElement, {
            imagePreviewHeight: 140,
        });
    }
    
})(jQuery);