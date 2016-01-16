if (Meteor.isClient){
	Template.ProfileActive.helpers({
		// TODO: Select Accepted listings that are of the users own id or have the acceptedOffer of the users offer
		
		meetup: function () {
			var offerid = this.offerAccepted;

			var id = Meteor.userId();
			return Listing.find({ $and:[ { creator_id: Meteor.userId(), status: "Accepted" }, { offerAccepted: Offer.find({_id: this.offerAccepted})  } ] });
		},
		// Check to see if results exceeds 0
		defaultCheck: function () {
			var offerid = this.offerAccepted;

			var id = Meteor.userId();
			var results = Listing.find({ $and:[ { creator_id: Meteor.userId(), status: "Accepted" }, { offerAccepted: Offer.find({_id: this.offerAccepted})  } ] });
			return Boolean(results.count());
		}
	});
}