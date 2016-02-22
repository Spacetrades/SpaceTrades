if (Meteor.isClient) {

	// Meteor.startup(function() {
	// 	sAlert.config({
	// 		effect: 'slide'
	// 	});
	// });

// SyncedCron.config({
//     log: true,
//     logger: null,
//     collectioName: 'cronHistory',
//     utc: false,
//     collectionTTL: 172800
//   })
}

if (Meteor.isServer) {

	Meteor.startup(function() {
		// process.env.MAIL_URL = 'smtp://postmaster%40meteorize.mailgun.org:YOURPASSWORD@smtp.mailgun.org:587'
		// TASK - Include mail url for mailgun
		// Meteor.publish("listing", function() {
		// 	return Listing.find({});
		// });
	});

}
