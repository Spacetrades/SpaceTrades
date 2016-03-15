if (Meteor.isClient){

	Template.modalreceivedOfferCard.events({
		'click .profileReceivedOffersHover': function () {
			Session.set('offerSelected', this);
      $("#receivedOffersModal").modal('hide');
		}
	});

}
