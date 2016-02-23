if (Meteor.isClient) {


// L0
	Template.registerHelper('mapRadius', function () {
		// Check if user is logged in
		if (Meteor.userId()){
			return Meteor.user().profile.mapRadius;
		}
		else {
			var lookup = "";
			// How do you return a string
			//
			return lookup
		}
	});

  Template.registerHelper('current', function(){
    return Router.current().path;
  });

  Template.registerHelper('timestamp', function(){
  var time = this.createdAt;
  var now = moment();

  var diff = now.diff(time);
  diff = diff / 60 / 1000;
  diff = Math.round(diff);

  var min = diff + " minutes ago"

  return min
  });

  Template.registerHelper('timeLeft', function(){

  });

  Template.registerHelper('nameLookup', function (idParam){
    var param = idParam.hash.idParam;
    return Meteor.users.find({_id: param}).fetch()[0].profile.name;
  });

	Template.registerHelper('listing', function () {
		return Listing.find({ _id: id });
	});

  Template.registerHelper('pictureLookup', function (idParam){
    var param = idParam.hash.idParam;
    return Meteor.users.find({ id: param}).fetch()[0].profile.picturesm;
  });

// L1
  if (Meteor.userId()){


  // Template.registerHelper('nameLookup', function(id) {
  //  return Meteor.users.find({_id: id}).fetch()[0].profile.name;
  // });
_
	Template.registerHelper('usernameCurrent', function () {
		return Meteor.user().profile.name.split(" ")[0];
	});

	Template.registerHelper('picture', function () {
		return Meteor.user().profile.picturelrg;
	});

	Template.registerHelper('picturesmall', function () {
		return Meteor.user().profile.picturesm;
	});


	Template.registerHelper('profile', function () {
		return Meteor.userId();
	});

	Template.registerHelper('locationFull', function () {
		var city = Meteor.user().profile.city;
		var state = Meteor.user().profile.state;

		return [city, state];
	});

	Template.registerHelper('Notification', function () {
		return Notification.find({destination: Meteor.userId()});
	});

Template.registerHelper('chatCountUnread', function () {
  // From each user, if messages oustanding are unread, +1 for every DIFFERENT user
    return Message.find({receiver: Meteor.userId()}).count();
  });

	if (Session.get('offerSelected')){

	 Template.registerHelper('nameOfferer', function () {
	 	return Meteor.users.find({_id: Session.get('offerSelected').creator_id}).fetch()[0].profile.name;
	 });

	}

	// The user that has created the listing that has permissions to edit and delete the listing
	// Check to see if the user of the item page matches the current user
	Template.registerHelper('KnightedUser', function () {
		if ( id == Meteor.userId() ) {
			return true;
		}
		return false;
	});

	}
}
