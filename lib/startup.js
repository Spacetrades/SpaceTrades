if (Meteor.isClient) {

	Meteor.startup(function() {
		$.getScript("https://cdn.jsdelivr.net/gh/ngzhian/multi-step-modal/multi-step-modal.js"),
		function() {
			sendEvent = function() {
				$('#offerRequestModal').trigger('next.m.2');
			}
       TimeSync.loggingEnabled = false;
		}

		sAlert.config({
			effect: 'slide',
      beep: true
		});

    // Listing._ensureIndex({"listing_title": 1});
    // Meteor.users._ensureIndex({ "profile": 1});

		// process.env.MAIL_URL = 'smtp://postmaster%40meteorize.mailgun.org:YOURPASSWORD@smtp.mailgun.org:587'


	});
}
