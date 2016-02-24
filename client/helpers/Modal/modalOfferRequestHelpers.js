if (Meteor.isClient) {

	Template.ModalOfferRequest.helpers({
		offerMapOptions: function() {
			if (GoogleMaps.loaded()) {

				// var lat = Listing.find({
				// 	_id: this.id
				// }).fetch()[0].lat;
				// var lng = Listing.find({
				// 	_id: id
				// }).fetch()[0].lng;

				var map = new google.maps.LatLng(this.lat, this.lng);
				return {
					center: map,
					zoom: 10
				};
			}
		}
	});

}
