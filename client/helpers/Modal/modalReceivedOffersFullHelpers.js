if (Meteor.isClient) {
	Template.ModalReceivedOffersFull.helpers({
		offerSelected: function() {
			return Session.get('offerSelected');
		},
		door: function() {
			if (Session.get('offerSelected')) {
				return Offer.find({
					_id: Session.get('offerSelected')._id
				}).fetch();
			}
		}
	});
}
