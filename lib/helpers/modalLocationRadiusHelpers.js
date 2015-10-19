if (Meteor.isClient) {

	Template.ModalLocationRadius.helpers({
		'locationRadiusMapOptions': function() {
			var lat = Geolocation.latLng().lat;
			var lng = Geolocation.latLng().lng;

			// var lat = 12312;
			// var lng = 31242;

			return {
				center: new google.maps.LatLng(lat, lng),
				zoom: 10
			};
		}
	});

}