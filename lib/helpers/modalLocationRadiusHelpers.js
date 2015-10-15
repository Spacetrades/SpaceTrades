if (Meteor.isClient) {

	Template.ModalLocationRadius.helpers({
		'locationRadiusMapOptions': function() {
			var lat = Geolocation.latLng().lat;
			var lng = Geolocation.latLng().lng;
			var map = new google.maps.LatLng(lat, lng);

			return {
				center: map,
				zoom: 10
			};
		}
	});

}