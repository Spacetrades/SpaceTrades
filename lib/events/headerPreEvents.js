if (Meteor.isClient) {

	fbLogin = function() {
		Meteor.loginWithFacebook({
			requestPermissions: ['public_profile', 'email', 'user_location']
		}, function(err) {
			if (err)
			// redirect to register if popup comes and user isn't on register
				Session.set('errorMessage', err.reason || 'Unknown Eror');
			console.log(Session.get('errorMessage'));
		});
	}

	Template.headerpre.events({
		'click .login': function(e) {
			fbLogin();
			Session.set('loggedin', true);
		}
	});

}