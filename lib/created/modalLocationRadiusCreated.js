if (Meteor.isClient) {

    Template.ModalLocationRadius.onCreated(function() {
            GoogleMaps.ready('locationRadiusMap', function(map) {

                    var markers = [];
                    var input = $("#pac-input")[0];
                    var searchBox = new google.maps.places.SearchBox(input);
                    var instance = GoogleMaps.maps.locationRadiusMap.instance;

                    var autocomplete = new google.maps.places.Autocomplete(input);
                    // instance.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

                    google.maps.event.addListener(searchBox, 'places_changed', function(m) {

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

                                    var mape = map.instance;
                                    mape.setCenter(marker.getPosition());

                                });

                        //     google.maps.event.addListener(marker, 'dragend', function(a) {
                        //     console.log(a);
                        // });


                    });
            });
    });
}