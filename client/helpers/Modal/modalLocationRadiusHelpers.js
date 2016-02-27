if (Meteor.isClient) {

	Template.mapPage.helpers({
		locationRadiusMapOptions: function() {
			if (GoogleMaps.loaded()) {

				if ( Meteor.userId() ) {

				var lat = Meteor.user().profile.lat;
				var lng = Meteor.user().profile.lng;

				}

				else {
				   var lat = Geolocation.latLng().lat;
           var lng = Geolocation.latLng().lng;

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
