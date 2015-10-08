if (Meteor.isClient) {

	Template.ManagerCardListing.helpers({
		offers: function() {
			return Offer.find({
				listingId: this._id
			}).count();
		}
	});

}