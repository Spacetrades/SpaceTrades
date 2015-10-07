if (Meteor.isClient) {
	
	// TASK - If account exists login else redirect to register and do not open register prompt
	Template.register.events({
		'click .facebook': function(e) {
			fbLogin();
			getLocation();
			ipLocate();
			Session.set('loggedin', true);
		},
		'click .login': function(e) {
			fbLogin();
			Session.set('loggedin', true);
		},
		'click .instagram': function(e) {
			instLogin();
			Session.set('loggedin', true);
		}
	});

}