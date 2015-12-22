if (Meteor.isClient) {

	Template.profileManagerOffers.helpers({
		offer: function() {
			var id = Meteor.userId();
			return Offer.find({
				creator_id: id
			});
		},
		listing: function() {
			return Listing.find({
				creator_id: Meteor.userId()
			});
		},
		dateFormatted: function() {
			return this.date
		}
	});

}