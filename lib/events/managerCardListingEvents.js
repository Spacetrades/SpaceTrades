if (Meteor.isClient) {
	Template.ManagerCardListing.events({
		'click .modReceivedOfferTrigger': function () {
			Session.set("listingSelected", this)
		}
	});
}