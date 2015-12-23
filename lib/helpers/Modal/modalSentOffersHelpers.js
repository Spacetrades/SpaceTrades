if (Meteor.isClient) {

	Template.ModalSentOffer.helpers({

		listingOffers: function() {
			return Session.get('offerSelected');
		},
		offerStatus: {
			pending: this.status,
			accepted: this.status
		},
		options: function() {
			return {
				height: 650,
				width: 200
			};
		},
		dateFormatted: function(){
			var date = moment(this.date);
			date = date.format("dddd, MMM DD");
			return date;
		},
		// ItemOfferOptions: function() {
		// 	if (GoogleMaps.loaded()) {
		// 		var lat = Offer.find({
		// 			_id: id
		// 		}).fetch()[0].lat;
		// 		var lng = Offer.find({
		// 			_id: id
		// 		}).fetch()[0].lng;
		// 		var map = new google.maps.LatLng(lat, lng);
		// 		return {
		// 			center: map,
		// 			zoom: 10
		// 		};
		// 	}
		// },

		creator: function() {
			return Meteor.users.find({
				_id: this.creator_id
			}).fetch()[0].profile.name;
		}
	});

}