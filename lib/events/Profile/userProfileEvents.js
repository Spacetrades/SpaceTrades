if (Meteor.isClient) {

	Template.UserProfile.events({
		'load .profileUserImg': function(event) {
			$(".spin").hide();
		},
		'click .click-nav .js': function(e) {
			$('.click-nav .js ul').slideToggle(200);
			$('.clicker').toggleClass('active');
			e.stopPropagation();
		}
	});

}