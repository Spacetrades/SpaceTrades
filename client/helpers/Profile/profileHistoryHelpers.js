if (Meteor.isClient) {

	Template.ProfileHistory.helpers({
		history: function() {
			return Listing.find({status: "Completed"});
		},
    // Check to see if results exceeds 0
    defaultCheck: function () {
      var offerid = this.offerAccepted;

      var id = Meteor.userId();

      var result = Listing.find({ $or:[ { creator_id: Meteor.userId(), status: "Completed" }, { offer_creator: Meteor.userId(), status: "Completed" } ] });

      return Boolean(result.count());
    }
	});

}
