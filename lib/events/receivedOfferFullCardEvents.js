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
	},
	'click #profileReceivedDecline': function(){
		sweetAlert({
					title: "Offer Declined",
					html: "true",
					type: "error",
					timer: 2000,
					showConfirmButton: false
				});
	}
});

}