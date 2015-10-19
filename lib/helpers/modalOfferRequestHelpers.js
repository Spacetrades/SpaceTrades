if (Meteor.isClient) {

	Template.ModalOfferRequest.helpers({
		offerMapOptions: function() {
			if (GoogleMaps.loaded()) {
				var lat = Listing.find({
					_id: id
				}).fetch()[0].lat;
				var lng = Listing.find({
					_id: id
				}).fetch()[0].lng;
				var map = new google.maps.LatLng(lat, lng);

				return {
					center: map,
					zoom: 10
				};
			}
		}
	});

}