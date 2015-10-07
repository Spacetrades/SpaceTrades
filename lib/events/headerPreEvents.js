if (Meteor.isClient) {

	Template.headerpre.events({
		'click .login': function(e) {
			fbLogin();
			Session.set('loggedin', true);
		}
	});

}