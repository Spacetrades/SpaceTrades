if (Meteor.isClient) {

	Template.homeheaderpre.events({
		'click .login': function(e) {
			fbLogin();
			Session.set('loggedin', true);
		},
		'click .catShirts': function() {
			catChoice("catShirts");
		},
		'click .catHoodies': function() {
			catChoice("catHoodies");
		},
		'click .catPants': function() {
			catChoice("catPants");
		},
		'click .catJacket': function() {
			catChoice("catJacket");
		},
		'click .catJeans': function() {
			catChoice("catJeans");
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