if (Meteor.isClient) {
	Template.registerHelper('usernameCurrent', function () {
		return Meteor.user().profile.name.split(" ")[0];
	});

	Template.registerHelper('picture', function () {
		return Meteor.user().profile.picturelrg;
	});

	Template.registerHelper('picturesmall', function () {
		return Meteor.user().profile.picturesm;
	});

	Template.registerHelper('pictureOther', function () {
		return 
	});

	Template.registerHelper('profile', function () {
		return Meteor.userId();
	});

	Template.registerHelper('listing', function () {
		return Listing.find({ _id: id });
	});

	Template.registerHelper('online', function () {
    		var status = Meteor.users.find( { _id: id } ).fetch()[0].status.online;
    		if (status == true) {
    			var color = "#24ec3d";
    			var innercolor = "#029402";
    			var text = "Online";
    		}
    		else {
    			var color = "#ff0000";
    			var innercolor = "#5858FD";
    			var text = "Offline";
    		}

    		return {
    			color: color,
    			innercolor: innercolor,
    			text: text
    		};
	});
	
	// The user that has created the listing that has permissions to edit and delete the listing
	// Check to see if the user of the item page matches the current user
	Template.registerHelper('KnightedUser', function () {
		if ( id == Meteor.userId() ) {
			return true;
		}
		return false;
	});
	
}