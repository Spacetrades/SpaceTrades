if (Meteor.isClient) {

	Template.meetuprequest.onCreated( function () {
		GoogleMaps.ready('offerImage', function (map) {
			var input = $("#pac-input")[0];
			var searchBox = new google.maps.places.SearchBox((input));
			var instance = GoogleMaps.maps.offerImage.instance;
			instance.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
    // var autocomplete = google.maps.places.Autocomplete(input);
    // console.log(autocomplete);

    // google.maps.event.addListener(autocomplete, 'place_changed', function () {
    //   var places = searchBox.getPlaces();
    //   console.log("I don't answer to these busters");
    //   if (places.length == 0) {
    //     return;
    //   } 
    //   for ( var i = 0, marker; marker = markers[i]; i++ ) {
    //     marker.setMap(null);
    //   } 
    // });
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