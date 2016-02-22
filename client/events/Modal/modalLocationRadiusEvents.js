if (Meteor.isClient) {

  Template.mapPage.events({
    'click .offerRequestBtn': function() {

      var place = Session.get('locationFull');
      var options = {
        lat: Session.get('userlat'),
        lng: Session.get('userlng'),
        neighborhood: place[0],
        city: place[1],
        state: place[2],
        country: place[3],
        locationString: place.toString(),
        mapRadius: $(".mapRadius").val()
      }

      function geolocate() {
        if (navigator.geolocation) {
          browserSupportFlag = true;
          navigator.geolocation.getCurrentPosition(function(position) {
            initialLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            map.setCenter(initialLocation);
          }, function() {
            handleNoGeolocation(browserSupportFlag);
          });
        }
      }

      function validationCheck() {

        for (i = 0; i < options.length; i++) {
          if (options[i] == "") {
            sAlert("Location sent incorrectly");
            return false
          }
        }
        return true
      }

      if (validationCheck()) {

        Meteor.call('setLocation', options);
        sAlert.success("Location set");

      }

    },
    'click .currentLocationBtn': function() {
      // GoogleMaps.ready('locationRadiusMap', function(map) {

        navigator.geolocation.getCurrentPosition(function(position) {
          lat = position.coords.latitude
          lng = position.coords.longitude;
          // Session.set('geo', initialLocation);
          var instance = GoogleMaps.maps.locationRadiusMap.instance;
          instance.setCenter(new google.maps.LatLng(lat, lng));
          console.log()

          // var marker = new google.maps.Marker({
          //   map: map.instance,
          //   draggable: true,
          //   position: new google.maps.LatLng(lat, lng),
          //   animation: google.maps.Animation.DROP
          // });

          // marker.setMap(null);


        });

        if (navigator.geolocation) {
          browserSupportFlag = true;
          navigator.geolocation.getCurrentPosition(function(position) {
            initialLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
          }, function() {
            handleNoGeolocation(browserSupportFlag);
          });
        }
      // })
    }

  });

}
