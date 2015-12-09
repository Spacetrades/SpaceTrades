Meteor.publish('offerShow', function () {
		return Offer.find({}, { limit: 100 });
	this.ready();
});