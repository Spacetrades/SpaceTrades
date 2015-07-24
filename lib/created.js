if (Meteor.isClient) {

	Template.meetuprequest.onCreated( function () {
		GoogleMaps.ready('offerImage', function (map) {
      var markers = [];
      var input = $("#pac-input")[0];
      // var autocomplete = new google.maps.places.Autocomplete(input);
      // autocomplete.bindTo('bounds', map);
      var searchBox = new google.maps.places.SearchBox((input));
      var instance = GoogleMaps.maps.offerImage.instance;
      instance.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

      google.maps.event.addListener(searchBox, 'places_changed', function(m) {
        // var place = autocomplete.getPlace();
        // if (!place.geometry) {
        //   window.alert("Autocomplete's returned place contains no geometry");
        //   return;
        // }

    // If the place has a geometry, then present it on a map.
  //   if (place.geometry.viewport) {
  //     map.fitBounds(place.geometry.viewport);
  //   } else {
  //     map.setCenter(place.geometry.location);
  //     map.setZoom(17);  // Why 17? Because it looks good.
  //   }
  //   marker.setIcon(/** @type {google.maps.Icon} */({
  //     url: place.icon,
  //     size: new google.maps.Size(71, 71),
  //     origin: new google.maps.Point(0, 0),
  //     anchor: new google.maps.Point(17, 34),
  //     scaledSize: new google.maps.Size(35, 35)
  //   }));
  //   marker.setPosition(place.geometry.location);
  //   marker.setVisible(true);

  //   var address = '';
  //   if (place.address_components) {
  //     address = [
  //     (place.address_components[0] && place.address_components[0].short_name || ''),
  //     (place.address_components[1] && place.address_components[1].short_name || ''),
  //     (place.address_components[2] && place.address_components[2].short_name || '')
  //     ].join(' ');
  //   }

  //   infowindow.open(map, marker);
  // });
  //       console.log(searchBox);
        var places = searchBox.getPlaces();
        console.log(places);
        if (places.length == 0) {
          return;
        } 
        for ( var i = 0, marker; marker = markers[i]; i++ ) {
          marker.setMap(null);
        }

    // For each place, get the icon, place name, and location.
    markers = [];
    // var bounds = new google.maps.LatLngBounds();
    for (var i = 0, place; place = places[i]; i++) {
      var image = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25)
      };

      // Create a marker for each place.
      var marker = new google.maps.Marker({
        map: map.instance,
        icon: image,
        title: place.name,
        position: place.geometry.location
      });

      markers.push(marker);
      console.log(marker.getPosition());
      var mape = map.instance
     mape.setCenter( marker.getPosition() );

      // bounds.extend(place.geometry.location);
    }

    // map.fitBounds(bounds);
  });

});
});

	Template.item.onCreated( function () {
    GoogleMaps.ready('listingImage', function (map) {
      var areaCircle = new google.maps.Circle({
        map: map.instance,
        center: map.options.center,
        zoom: 10,
        radius:1000,
        strokeColor:"#f8504b",
        strokeOpacity:0.8,
        strokeWeight:2,
        fillColor:"#f8504b",
        fillOpacity:0.4
      });
    });
  });

}