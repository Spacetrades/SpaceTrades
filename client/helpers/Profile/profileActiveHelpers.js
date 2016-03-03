if (Meteor.isClient){

	Template.ProfileActive.helpers({

		meetup: function () {
			var offerid = this.offerAccepted;
			var id = Meteor.userId();

      var query = Listing.find({ $or:[ { creator_id: Meteor.userId(), status: "Accepted" }, { offer_creator: Meteor.userId(), status: "Accepted" } ] });
			return query;
		},
		// Check to see if results exceeds 0
		defaultCheck: function () {
			var offerid = this.offerAccepted;

			var id = Meteor.userId();

      var result = Listing.find({ $or:[ { creator_id: Meteor.userId(), status: "Accepted" }, { offer_creator: Meteor.userId(), status: "Accepted" } ] });

			return Boolean(result.count());
		}
	});

}
