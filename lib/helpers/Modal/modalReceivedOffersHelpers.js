if (Meteor.isClient) {
	Template.ModalReceivedOffers.helpers({
		listingSelected: function() {
			return Session.get('listingSelected');
		},
		offers: function() {
			if (Session.get('listingSelected')) {
				return Offer.find({
					listingId: Session.get('listingSelected')._id
				}).fetch();
			}
		},
		userpic: function() {
			return this.creator_id;
		},
		timeSinceCreation: function() {
			// TODO: hours ago, when > 24 hours, days ago
			var datePast = this.createdAt;

			var dateCurrent = new Date();

			var duration = moment.duration(end.diff(datePast));

			return duration;
		}
	});
}