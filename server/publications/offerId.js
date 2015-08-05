Meteor.publish('offerId', function (id) {
	if (this.userId) {
    	return Offer.find({ _id: id});
	}
	this.ready();
});