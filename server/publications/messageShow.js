Meteor.publish('messageShow', function () {
	if (this.userId) {
		return Message.find({}, { sort: { timestamp: -1 }, limit: 20 });
	}
	this.ready();
});