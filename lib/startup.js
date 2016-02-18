if (Meteor.isClient) {

	Meteor.startup(function() {
		$.getScript("https://cdn.rawgit.com/ngzhian/multi-step-modal/master/multi-step-modal.js"),
		function() {
			sendEvent = function() {
				$('#offerRequestModal').trigger('next.m.2');
			}
		}

		sAlert.config({
			effect: 'slide'
		});

    // Listing._createIndex(_id: Meteor.userId());

		// process.env.MAIL_URL = 'smtp://postmaster%40meteorize.mailgun.org:YOURPASSWORD@smtp.mailgun.org:587'
		// TASK - Include mail url for mailgun
		// Meteor.publish("listing", function() {
		// 	return Listing.find({});
		// });

	});
}
