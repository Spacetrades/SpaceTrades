Meteor.publish('messageShow', function () {
	if (this.userId) {
		return Message.find({}, { sort: { timestamp: -1 } });
	}
	this.ready();
});