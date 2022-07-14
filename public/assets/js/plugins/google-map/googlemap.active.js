(function ($) {
    "use strict";
    

function initMap() {
  //Map location
  var mapLocation = {
    lat: -37.8173277,
    lng: 144.9537353
  };

  // Map Zooming
  var mapZoom = 14;


  // Basic Map
  if($("#google-map-simple").length) {
    var googleMapSimple = new google.maps.Map(document.getElementById('google-map-simple'), {
      zoom: mapZoom,
      center: mapLocation
    });
  }
    
  // Map With marker
  if($("#google-map-marker").length) {
    var googleMapMarker = new google.maps.Map(document.getElementById('google-map-marker'), {
      zoom: mapZoom,
      center: mapLocation
    });
    var marker_1 = new google.maps.Marker({
      position: mapLocation,
      map: googleMapMarker
    });
  }

  // Basic map with cutom marker
  if($("#google-map-custom-marker").length) {
    var googleMapCustomMarker = new google.maps.Map(document.getElementById('google-map-custom-marker'), {
      zoom: mapZoom,
      center: mapLocation
    });
    var marker_2 = new google.maps.Marker({
      position: mapLocation,
      map: googleMapCustomMarker,
      icon: 'assets/images/icons/location-pin.png',
    });
  }

  // Map Custom Theme
  if($("#google-map-custom-theme").length) {
    var customThemeMap = new google.maps.Map(document.getElementById('google-map-custom-theme'), {
      zoom: mapZoom,
      center: mapLocation,
      disableDefaultUI: true,
      styles: [
            {
                "featureType": "all",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "saturation": 36
                    },
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 40
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 16
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 17
                    },
                    {
                        "weight": 1.2
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 21
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 17
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 29
                    },
                    {
                        "weight": 0.2
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 18
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 16
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 19
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 17
                    }
                ]
            }
        ]
    });
    var marker_3 = new google.maps.Marker({
      position: mapLocation,
      map: customThemeMap
    });
  }

    
}
initMap();

})(jQuery);