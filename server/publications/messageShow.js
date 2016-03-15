Meteor.publish('messageShow', function (id) {

	if (this.userId) {
		return Message.find({ $or:[ {sender: this.userId},{receiver: this.userId } ]});
	}
	this.ready();

});
