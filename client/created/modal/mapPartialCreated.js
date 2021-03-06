if (Meteor.isClient) {

    Template.mapModal.onCreated(function() {
        GoogleMaps.ready('offerImage', function(map) {
            var markers = [];
            var input = $("#pac-input")[0];
            var submit = $("#offerRequestModalSubmit")[0];
            var searchBox = new google.maps.places.SearchBox((input));
            // var instance = GoogleMaps.maps.offerImage.instance;
            // instance.controls[google.maps.ControlPosition.BOTTOM_CENTER].push(submit);

            // var areaCircle = new google.maps.Circle({
            //     map: map.instance,
            //     center: map.options.center,
            //     zoom: 10,
            //     radius: 1000,
            //     strokeColor: "#f8504b",
            //     strokeOpacity: 0.8,
            //     strokeWeight: 2,
            //     fillColor: "#f8504b",
            //     fillOpacity: 0.4
            // });



        google.maps.event.addDomListener(window, "resize", function() {
            google.maps.event.trigger(map, "resize");

        });

            google.maps.event.addListener(searchBox, 'places_changed', function(m) {
                var places = searchBox.getPlaces();
                if (places.length == 0) {
                    return;
                }
                for (var i = 0, marker; marker = markers[i]; i++) {
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
                        position: place.geometry.location,
                        animation: google.maps.Animation.DROP
                    });

                    markers.push(marker);

                    var offerlat = marker.position.lat();
                    var offerlng = marker.position.lng();

                    Session.set("offerlat", offerlat);
                    Session.set("offerlng", offerlng);

                    var mape = map.instance
                    mape.setCenter(marker.getPosition());

                    // bounds.extend(place.geometry.location);
                }

                // map.fitBounds(bounds);
            });

        });
    });
}