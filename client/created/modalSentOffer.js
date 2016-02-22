if (Meteor.isClient) {

	Template.ModalSentOffer.onCreated(function() {
		GoogleMaps.ready('itemoffermap', function(map) {
			// var marker = new google.maps.Marker({
			//   map: map.instance,
			//   icon: image,
			//   title: place.name,
			//   position: place.geometry.location,
			//   animation: google.maps.Animation.DROP
			// });
			var areaCircle = new google.maps.Circle({
				map: map.instance,
				center: map.options.center,
				zoom: 10,
				radius: 1000,
				strokeColor: "#f8504b",
				strokeOpacity: 0.8,
				strokeWeight: 2,
				fillColor: "#f8504b",
				fillOpacity: 0.4
			});
		});
	});

}