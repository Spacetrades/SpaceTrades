if (Meteor.isClient) {

Template.receivedOfferFullCard.events({
	'click #profileReceivedAccept': function(){
		sweetAlert({
					title: "Offer Accepted",
					html: "true",
					type: "success",
					timer: 2000,
					showConfirmButton: false
				});
		var id = Session.get('offerSelected')._id;
		var listing = Session.get('offerSelected').listingId;
		var options = {
			id: id,
			listingId: listing,
			destination: Session.get('offerSelected').creator_id
		}
		
		Meteor.call('acceptOffer', options);
		// Offerer gets message
		Meteor.call('pulseNotify', options);
	},
	'click #profileReceivedDecline': function(){
		sweetAlert({
					title: "Offer Declined",
					html: "true",
					type: "error",
					timer: 2000,
					showConfirmButton: false
				});

		var id = Session.get('offerSelected')._id;
		var listing = Session.get('offerSelected').listingId;
		var options = {
			id: id,
			listingId: listing
		}

		Meteor.call('declineOffer', options);
	}
});

}