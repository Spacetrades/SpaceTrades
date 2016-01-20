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