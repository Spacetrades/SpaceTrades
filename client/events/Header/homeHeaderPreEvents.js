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
		'click .catBags': function() {
			catChoice("catBags");
		},
		'click .catHoodies': function() {
			catChoice("catHoodies");
		},
		'click .catPants': function() {
			catChoice("catPants");
		},
		'click .catJacket': function() {
			catChoice("catJackets");
		},
		'click .catJeans': function() {
			catChoice("catJeans");
		},
    'click .catTees': function() {
      catChoice("catTees");
    },
		'click .catShorts': function() {
			catChoice("catShorts");
		},

		'click .catPhones': function() {
			catChoice("catPhones");
		},
		'click .catTablets': function() {
			catChoice("catTablets");
		},
		'click .catComputers': function() {
			catChoice("catComputers");
		},
		'click .catTvs': function() {
			catChoice("catTvs");
		},
		'click .catHeadphones': function() {
			catChoice("catHeadphones");
		},

		'click .catShoes': function() {
			catChoice("catShoes");
		},
		'click .catAsics': function() {
			catChoice("catAsics");
		},
		'click .catAddidas': function() {
			catChoice("catAddidas");
		},
		'click .catConverse': function() {
			catChoice("catConverse");
		},
		'click .catNike': function() {
			catChoice("catNike");
		},
		'click .catJordan': function() {
			catChoice("catJordan");
		}
	});

}
