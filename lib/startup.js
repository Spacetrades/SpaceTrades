if ( Meteor.isClient ) {
	Meteor.startup( function () {
		$.getScript("https://cdn.rawgit.com/ngzhian/multi-step-modal/master/multi-step-modal.js"), function () {
			sendEvent = function() {
				$('#offerRequestModal').trigger('next.m.2');
			}
			console.log("get overit");
		}
	});
}