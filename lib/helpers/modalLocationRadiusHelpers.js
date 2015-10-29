if (Meteor.isClient) {

	Template.ModalLocationRadius.helpers({
		'locationRadiusMapOptions': function() {
			if (GoogleMaps.loaded()) {
				// var lat = Session.get('lat');
				// var lng = Session.get('lng');

				var lat = 12312;
				var lng = 31242;

				return {
					center: new google.maps.LatLng(lat, lng),
					zoom: 10
				};
			}
		}
	});
}