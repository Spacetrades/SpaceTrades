if (Meteor.isClient) {

	Template.ManagerCardListing.events({

		'click .modSentOfferTrigger': function () {
			Session.set("listingSelected", this);

		}

	});
	
}