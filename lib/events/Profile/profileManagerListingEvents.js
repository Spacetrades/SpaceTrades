if (Meteor.isClient) {

	Template.profileManagerListings.events({
		'click .no-js': function() {
			if ($('.click-nav .js ul').is(':visible')) {
				$('.click-nav .js ul', this).slideUp();
				$('.clicker').removeClass('active');
			}
		}

	});
}