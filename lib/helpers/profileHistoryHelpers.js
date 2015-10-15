if (Meteor.isClient) {

	Template.ProfileHistory.helpers({
		history: function() {
			// History is any item for both seller and buyer part of a meetup that has expired
			Listing.find();
		}
	});

}