if (Meteor.isClient) {

	Template.ModalLocationRadius.helpers({
		locationRadiusMapOptions: function() {
			if (GoogleMaps.loaded()) {

				var lat = Meteor.user().profile.lat;
				var lng = Meteor.user().profile.lng;
				
				var map = new google.maps.LatLng(lat, lng);

				return {
					center: map,
					zoom: 10
				};
			}
		}
	});
}