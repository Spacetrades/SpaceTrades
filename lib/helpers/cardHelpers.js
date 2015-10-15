if (Meteor.isClient) {

	Template.card.helpers({
		offers: function(e) {
			return Offer.find({
				listingId: this._id
			}).count();
		},
		usernameTransform: function() {
			var split = this.username.split(" ");
			var last = split[1].charAt();
			var merge = split[0] + " " + last
			return merge;
		}
		// TASK - First name last initial
	});

}