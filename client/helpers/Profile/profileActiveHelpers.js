if (Meteor.isClient){
	Template.ProfileActive.helpers({
		// TODO: Select Accepted listings that are of the users own id or have the acceptedOffer of the users offer

		meetup: function () {
			var offerid = this.offerAccepted;
			var id = Meteor.userId();

      var query = Listing.find({ $or:[ { creator_id: Meteor.userId(), status: "Accepted" }, { offer_creator: Meteor.userId() } ] });
			return query;
		},
		// Check to see if results exceeds 0
		defaultCheck: function () {
			var offerid = this.offerAccepted;

			var id = Meteor.userId();

			var resultA = Listing.find({ creator_id: Meteor.userId(), status: "Accepted"});
      var resultB = Offer.find({status: "Accepted", creator_id: Meteor.userId()});

      var result = Listing.find({ $or:[ { creator_id: Meteor.userId(), status: "Accepted" }, { offer_creator: Meteor.userId() } ] });

			return Boolean(result.count());
		}
	});
}
