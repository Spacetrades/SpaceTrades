if (Meteor.isClient){
	Template.ProfileActive.helpers({
		// TODO: Select Accepted listings that are of the users own id or have the acceptedOffer of the users offer
		meetup: function () {
			var id = Meteor.userId();
			return Listing.find({ creator_id: Meteor.userId(), status: "Accepted" });
		}
	});
}