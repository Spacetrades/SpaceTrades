if (Meteor.isClient) {

Template.ModalReceivedDecline.events({

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
		Meteor.call('pulseNotify', options);

}});

}