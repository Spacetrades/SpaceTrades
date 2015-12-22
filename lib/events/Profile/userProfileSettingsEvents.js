if (Meteor.isClient) {

	Template.UserProfileSettings.events({
		'click .profileSettingsSubmit': function() {

			var options = {
				photo: "PL",
				about: $(".profileSettingsAboutInput").val(),
				email: $(".profileSettingsEmailInput").val(),
				location: $(".profileSettingsLocationInput").val(),
				link: "PL"
			}

			Meteor.call("addProfileInfo", options);
			sAlert.success("Saved");
		}
	});

}