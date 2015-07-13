if (Meteor.isClient) {
	Template.registerHelper('usernameCurrent', function () {
		return Meteor.user().profile.name.split(" ")[0];
	});

	Template.registerHelper('online', function () {
		return Meteor.call('userStatus');
	});

	Template.registerHelper('picture', function () {
		return Meteor.user().profile.picturelrg;
	});

	Template.registerHelper('picturesmall', function () {
		return Meteor.user().profile.picturesm;
	});

	Template.registerHelper('profile', function () {
		return Meteor.userId()
	});

	Template.registerHelper('listing', function () {
		return Listing.find({ _id: id });
	});

	// The user that has created the listing that has permissions to edit and delete the listing
	// Check to see if the user of the item page matches the current user
	Template.registerHelper('correctUser', function () {
		return
	});

	// Template.registerHelper('name', function () {
	// 	return Meteor.users.find({_id: })
	// });
}