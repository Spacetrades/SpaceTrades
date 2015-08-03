Meteor.publish('userIdprof', function (id) {
	return Meteor.users.find( { _id: id } );
});
