if (Meteor.isClient) {

	  Template.headerpost.onRendered(function() {
        keyPress.nav("headerNavSearch");

        $.getScript("https://cdn.rawgit.com/ngzhian/multi-step-modal/master/multi-step-modal.js"),
        function() {
            sendEvent = function() {
                $('#offerRequestModal').trigger('next.m.2');
            }
        }
    });
	
}