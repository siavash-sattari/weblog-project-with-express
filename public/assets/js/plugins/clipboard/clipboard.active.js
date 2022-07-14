(function ($) {
    "use strict";
    
    /*Clipboard*/
    if ($('.button-clipboard').length) {
        var clipboard = new ClipboardJS('.button-clipboard');
    }


    //This Below Activation code is for only Copying icon font names form Icon Pages.
    //You can remove them they are not needed for your end product.
    var $clipboardBtn = $('.icon-list-wrap a');
    $clipboardBtn.on('click', function (e) {
        e.preventDefault();
    });
    var $clipboard = new ClipboardJS('.icon-list-wrap a');
    $clipboard.on('success', function(e) {
        $(e.trigger).append("<span class='badge badge-success'>copied</span>");
        setTimeout(function() {
            $clipboardBtn.children('.badge').remove();
        }, 3000);
    });
    $clipboard.on('error', function(e) {
        $(e.trigger).append("<span class='badge badge-danger'>Error</span>");
        setTimeout(function() {
            $clipboardBtn.children('.badge').remove();
        }, 3000);
    });
    
})(jQuery);