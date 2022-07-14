(function ($) {
    "use strict";
    
    var pin = '<div class="vmap-pin"><div class="pin"></div><div class="signal"></div><div class="signal2"></div></div>'
    
    /*World*/
    if ($('#vmap-world').length) {
        $('#vmap-world').vectorMap({
            map: 'world_en',
            backgroundColor: 'transparent',
            color: '#428bfa',
            hoverColor: '#136ef8',
            borderColor: '#ffffff',
            enableZoom: false,
            values: sample_data,
            scaleColors: ['#428bfa'],
        });
    }
    
    if ($('#vmap-world-2').length) {
        $('#vmap-world-2').vectorMap({
            map: 'world_en',
            backgroundColor: 'transparent',
            color: '#428bfa',
            hoverColor: '#136ef8',
            borderColor: '#ffffff',
            enableZoom: false,
            values: sample_data,
            scaleColors: ['#428bfa', '#f1f1f1'],
            pins: {
                "pk" : pin,
                "us" : pin,
                "ru" : pin,
                "au" : pin,
                "ca" : pin,
                "ci" : pin,
                "bd" : pin,
            },
            pinMode: 'content'
        });
    }
    
    /*Usa*/
    if ($('#vmap-usa').length) {
        $('#vmap-usa').vectorMap({
            map: 'usa_en',
            backgroundColor: 'transparent',
            color: '#428bfa',
            hoverColor: '#136ef8',
            borderColor: '#ffffff',
            enableZoom: false,
        });
    }
    
    /*Asia*/
    if ($('#vmap-asia').length) {
        $('#vmap-asia').vectorMap({
            map: 'asia_en',
            backgroundColor: 'transparent',
            color: '#428bfa',
            hoverColor: '#136ef8',
            borderColor: '#ffffff',
            enableZoom: false,
        });
    }
    
    /*Australia*/
    if ($('#vmap-australia').length) {
        $('#vmap-australia').vectorMap({
            map: 'australia_en',
            backgroundColor: 'transparent',
            color: '#428bfa',
            hoverColor: '#136ef8',
            borderColor: '#ffffff',
            enableZoom: false,
        });
    }
    
    /*Europe*/
    if ($('#vmap-europe').length) {
        $('#vmap-europe').vectorMap({
            map: 'europe_en',
            backgroundColor: 'transparent',
            color: '#428bfa',
            hoverColor: '#136ef8',
            borderColor: '#ffffff',
            enableZoom: false,
        });
    }
    
    /*Africa*/
    if ($('#vmap-africa').length) {
        $('#vmap-africa').vectorMap({
            map: 'africa_en',
            backgroundColor: 'transparent',
            color: '#428bfa',
            hoverColor: '#136ef8',
            borderColor: '#ffffff',
            enableZoom: false,
        });
    }

})(jQuery);