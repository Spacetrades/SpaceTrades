if (Meteor.isClient) {

	function catChoice(elem) {
		var search = $("." + elem).text();
		console.log(search);
		ListingSearch.search(search);
	}

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

	Template.homeheaderpre.events({
		'click .login': function(e) {
			fbLogin();
			Session.set('loggedin', true);
		},
		'click .headerDropDownNav': function(){
			console.log(this);
		},
		'click .catPre': function(event) {
      var catClicked = $(event.target);
			catChoice(catClicked);
		},
	});

}
