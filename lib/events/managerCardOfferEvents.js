if (Meteor.isClient) {

	Template.ManagerCardOffer.events({

		'click .modSentOfferTrigger': function() {
			Session.set('offerSelected', this);
		}

	});
}