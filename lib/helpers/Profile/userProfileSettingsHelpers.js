if (Meteor.isClient) {

	Template.UserProfileSettings.helpers({
		aboutText: function() {
			return Meteor.users.find({
				_id: id
			}).fetch()[0].profile.about;
		},
		email: function() {
			return Meteor.users.find({
				_id: id
			}).fetch()[0].profile.email;
		},
		location: function() {
			return Meteor.users.find({
				_id: id
			}).fetch()[0].profile.location;
		},
	});

}