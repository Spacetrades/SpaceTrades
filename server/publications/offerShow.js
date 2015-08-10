Meteor.publish('offerShow', function () {
	if (this.userId) {
		return Offer.find({}, { limit: 100 });
	}
	this.ready();
});