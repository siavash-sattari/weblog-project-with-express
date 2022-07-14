(function ($) {
    "use strict";
    
    /*Ion Range Slider 1*/
    if( $('.ion-range-1').length ) {
        $('.ion-range-1').ionRangeSlider({
            skin: 'round',
            type: 'single',
            min: 0,
            max: 100,
            from: 50,
        });
    }
    
    /*Ion Range Slider 2*/
    if( $('.ion-range-2').length ) {
        $('.ion-range-2').ionRangeSlider({
            skin: 'round',
            type: 'double',
            min: 1000,
            max: 20000,
            from: 5000,
            to: 14000,
            step: 500,
        });
    }
    
    /*Ion Range Slider 3*/
    if( $('.ion-range-3').length ) {
        $('.ion-range-3').ionRangeSlider({
            skin: 'flat',
            type: 'single',
            min: 0,
            max: 100,
            from: 50,
        });
    }
        
    /*Ion Range Slider 4*/
    if( $('.ion-range-4').length ) {
        $('.ion-range-4').ionRangeSlider({
            skin: 'square',
            type: 'single',
            min: 0,
            max: 100,
            from: 50,
        });
    }
    
})(jQuery);