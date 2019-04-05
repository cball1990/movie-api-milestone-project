var map;
var service;
var infowindow;

function initialize() {
  var stevenage = new google.maps.LatLng(51.90224,-0.20256);
  
      
        map = new google.maps.Map(document.getElementById('map'), {
          center: stevenage,
          zoom: 13
        });
        
        var request = {
          location: stevenage,
          radius: '500',
          query: 'restaurant',
  };
  
  service = new google.maps.places.PlacesService(map);
  service.textSearch(request, callback);
  
      }

  function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      var place = results[i];
      createMarker(results[i]);
      }
      
    }
  }
  

      
      