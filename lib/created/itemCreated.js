if (Meteor.isClient) {

	Template.item.onCreated(function() {
		GoogleMaps.ready('listingImage', function(map) {
			var areaCircle = new google.maps.Circle({
				map: map.instance,
				center: map.options.center,
				zoom: 5,
				radius: 8093.4,
				strokeColor: "#f8504b",
				strokeOpacity: 0.8,
				strokeWeight: 2,
				fillColor: "#f8504b",
				fillOpacity: 0.4
			});
		});
	});

}