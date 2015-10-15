if (Meteor.isClient) {

	Template.home.helpers({
		listing: function() {
			return Listing.find();
		}
	});

}