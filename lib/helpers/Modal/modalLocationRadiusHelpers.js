if (Meteor.isClient) {

	Template.ModalLocationRadius.helpers({
		locationRadiusMapOptions: function() {
			if (GoogleMaps.loaded()) {

				var lat = 44.105619;
				var lng = -72.43260099999999;
				var map = new google.maps.LatLng(lat, lng);

				return {
					center: map,
					zoom: 10
				};
			}
		}
	});
}