if (Meteor.isClient) {

	Template.ModalLocationRadius.helpers({
		locationRadiusMapOptions: function() {
			if (GoogleMaps.loaded()) {
				
				if ( Meteor.user().profile.lat ) {

				var lat = Meteor.user().profile.lat;
				var lng = Meteor.user().profile.lng;

				}

				else {
					var lat = 40.7127;
					var lng = 74.0059;
				}

				
				var map = new google.maps.LatLng(lat, lng);

				return {
					center: map,
					zoom: 10
				};
			}
		}
	});
}