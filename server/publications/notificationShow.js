Meteor.publish('notificationShow', function(id) {

	if (this.userId) {
		return Notification.find({
		});
	}
	this.ready();

});