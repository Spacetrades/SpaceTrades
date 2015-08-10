Meteor.publish('userIdprof', function (id) {
	if (this.userId) {
		return Meteor.users.find( { _id: id } );
	}
	this.ready();
});
