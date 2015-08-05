 Meteor.publish('userShow', function () {
 	if (this.userId) {
 		return Meteor.users.find({}, { limit: 100 });
 	}
 	this.ready();
 });