if (Meteor.isClient) {

	Template.ProfileCenterNav.events({
		'click .helpitem': function(event) {
			$(".helpitem").removeClass("helpNavSelected");
			$(event.currentTarget).addClass("helpNavSelected");
		}
	});

}