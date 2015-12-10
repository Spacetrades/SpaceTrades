if (Meteor.isClient){

	Template.receivedOfferCard.events({
		'click .profileReceivedOffersHover': function () {
			Session.set('offerSelected', this);
		}
	});
	
}