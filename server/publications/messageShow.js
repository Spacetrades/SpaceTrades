Meteor.publish('messageShow', function (id) {

	if (this.userId) {
		return Message.find({}, { sort: { timestamp: -1 } });
	}
	this.ready();

});