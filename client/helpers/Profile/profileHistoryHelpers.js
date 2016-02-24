if (Meteor.isClient) {

	Template.ProfileHistory.helpers({
		history: function() {
			return Listing.find({status: "Completed"});
		}
	});

}
