if (Meteor.isClient) {
	Template.registerHelper('usernameCurrent', function () {
		return Meteor.user().profile.name;
	});

	Template.registerHelper('online', function () {
		return Meteor.call('userStatus');
	});

	Template.registerHelper('picture', function () {
		return Meteor.user().profile.picture;
	});

	Template.registerHelper('profile', function () {
		return Meteor.userId()
	});
}