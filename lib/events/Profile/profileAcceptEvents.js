if (Meteor.isClient) {

Template.ModalReceivedAccept.events({
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
			destination: [Session.get('offerSelected').creator_id, Meteor.userId()]
		}
		
		Meteor.call('acceptOffer', options);

		// Both parties get a message
		Meteor.call('pulseNotify', options);

		// Send feedback at 4:00 on the day of the meetup
		// Calculate the delay between the day and send on the day

		//var userA = Listing.find({_id: this.listingId}).fetch()[0].creator_id;

		function sendFeedback() {

			options = {
				recipients: [ userA, Session.get('offerSelected').creator_id]
			}

			Meteor.call('pulseNotify', options);
		}

		// send feedback to all included parties of the meetup

		var dateStart = new Date();
		var dateStop = new Date(this.date);

		var timeDifference = (dateStart - dateStop)/1000;

		Meteor.setTimeout( sendFeedback(), timeDifference)
	}})
}