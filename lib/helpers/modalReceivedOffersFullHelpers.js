if (Meteor.isClient){
	Template.ModalReceivedOffers.helpers({
		offerSelected: function() {
 			return Session.get('offerSelected');
 		},
		offer: function () {
			return Offer.find({ listingId: Session.get('offerSelected')._id}).fetch();
		},
		timeSinceCreation: function(){
			// TODO: hours ago, when > 24 hours, days ago
			var datePast = this.createdAt;

			var dateCurrent = new Date();

			var duration = moment.duration(end.diff(datePast));

			return duration;
		}
	});
}