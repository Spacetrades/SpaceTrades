if (Meteor.isClient) {

	Template.profileManagerListings.helpers({
		offer: function() {
			var id = Meteor.userId();
			return Offer.find({
				creator_id: id
			});
		},
		listing: function() {
			return Listing.find({
				creator_id: Meteor.userId(),
				status: "Pending"
			});
		},
		defaultCheck: function(){
			var results = Listing.find({
				creator_id: Meteor.userId(),
				status: "Pending"
			});

			return Boolean(results.count());
		}
	});

}