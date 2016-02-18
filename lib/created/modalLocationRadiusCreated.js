if (Meteor.isClient) {

  Template.ModalLocationRadius.onCreated(function() {
    GoogleMaps.ready('locationRadiusMap', function(map) {

      GoogleMaps.ready();

      var markers = [];
      var inputControl = $("#pac-input")[0];
      var saveControl = $(".locationRadiusSave")[0];
      var geolocateControl = $(".currentLocation")[0];
      var radiusControl = $(".mapRadius")[0];
      var searchBox = new google.maps.places.SearchBox(inputControl);
      var instance = GoogleMaps.maps.locationRadiusMap.instance;
      var geocoder = new google.maps.Geocoder();
      var browserSupportFlag = new Boolean();


      var autocomplete = new google.maps.places.Autocomplete(inputControl);

      console.log(map)
      console.log(map.instance)
        console.log(instance)


      // Positioning
      instance.controls[google.maps.ControlPosition.TOP_LEFT].push(inputControl);
      instance.controls[google.maps.ControlPosition.BOTTOM_RIGHT].push(saveControl);
      instance.controls[google.maps.ControlPosition.TOP_RIGHT].push(radiusControl);
      instance.controls[google.maps.ControlPosition.BOTTOM_LEFT].push(geolocateControl);


      function geoLocateUser() {
        if (navigator.geolocation) {
          var positionOptions = {
            enableHighAccuracy: true,
            timeout: 10 * 1000
          }
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            }
          });
        }
      }
      geoLocateUser();


      google.maps.event.addListener(instance, 'click', function() {
        console.log("gross");
        google.maps.event.trigger(map, 'resize');
      });

       google.maps.event.addListener(map.instance, 'click', function() {
        console.log("gross");
        google.maps.event.trigger(map, 'resize');
      });



      // Search box value changes
      google.maps.event.addListener(searchBox, 'places_changed', function(m) {

        function geocodeLatLng(geocoder, map, information) {
          var geocoder = new google.maps.Geocoder();
          console.log(google.maps.GeocoderStatus.OK);

          var userlat = Session.get('userlat');
          var userlng = Session.get('userlng');
          var latLng = userlat.toString() + ", " + userlng.toString();

          var latLngStr = latLng.split(",", 2);
          var latLngLocate = {
            lat: parseFloat(latLngStr[0]),
            lng: parseFloat(latLngStr[1])
          };

          geocoder.geocode({
            'location': latLngLocate
          }, function(results, status) {
            if (status === google.maps.GeocoderStatus.OK) {
              if (results[1]) {
                console.log(results[1].formatted_address);
                var locate = results[1].formatted_address;
                locate = locate.split(",");

                Session.set('locationFull', locate);
              }
            } else {
              window.alert('No results found');
            }

          });
        }

        var places = searchBox.getPlaces();
        if (places.length == 0) {
          return;
        }

        markers.forEach(function(marker) {
          marker.setMap(null);
          // areaCircle.setMap(null);
        });

        markers = [];

        places.forEach(function(place) {
          var image = {
            url: place.icon,
            size: new google.maps.Size(71, 71),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(17, 34),
            scaledSize: new google.maps.Size(25, 25)
          };

          var areaCircle = new google.maps.Circle({
            map: map.instance,
            center: place.geometry.location,
            zoom: 7,
            // IDEAL - Radius should be dependent on radius set
            radius: 8093.4,
            strokeColor: "#f8504b",
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: "#f8504b",
            fillOpacity: 0.4
          });

          var marker = new google.maps.Marker({
            map: map.instance,
            icon: image,
            title: place.name,
            draggable: true,
            position: place.geometry.location,
            animation: google.maps.Animation.DROP
          });

          // Create a marker for each place.

          markers.push(marker);
          console.log(marker);


          var userlat = marker.getPosition().lat();
          var userlng = marker.getPosition().lng();

          var locate = marker.getPosition();
          console.log(locate);


          Session.set("userlat", userlat);
          Session.set("userlng", userlng);

          console.log(userlat, userlng);
          var latLng = userlat.toString() + ", " + userlng.toString();

          geocodeLatLng(geocoder, map);

          var mape = map.instance;
          mape.setCenter(marker.getPosition());


        });


      });


    });
  });
}
