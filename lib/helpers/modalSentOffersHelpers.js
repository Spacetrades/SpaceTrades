if (Meteor.isClient) {

	Template.ModalSentOffer.helpers({
		listingOffers: function() {
			return Offer.find({
				_id: id
			});
		},
		options: function() {
			return {
				height: 650,
				width: 200
			};
		},
		ItemOfferOptions: function() {
			if (GoogleMaps.loaded()) {
				var lat = Offer.find({
					_id: id
				}).fetch()[0].lat;
				var lng = Offer.find({
					_id: id
				}).fetch()[0].lng;
				var map = new google.maps.LatLng(lat, lng);
				return {
					center: map,
					zoom: 10
				};
			}
		},
		creator: function() {
			return Meteor.users.find({
				_id: this.creator_id
			}).fetch()[0].profile.name;
		}
	});

}