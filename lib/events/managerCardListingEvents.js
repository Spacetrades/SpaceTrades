if (Meteor.isClient) {

	Template.ManagerCardListing.events({

		'click .modReceivedOfferTrigger': function () {
			Session.set("listingSelected", this);

			// HACK :C : Clicks again after set to fix double click issue
			// $(".modReceivedOfferTrigger").click();
			// $(".modReceivedOfferTrigger").click();
		}

	});
	
}