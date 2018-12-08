if (Meteor.isClient) {

	 Template.homeheaderpost.onRendered(function() {

        keyPress.home("search");
        // Unveil lazy loading
        $("img").unveil();

        $.getScript("https://cdn.jsdelivr.net/gh/ngzhian/multi-step-modal/multi-step-modal.js"),
        function() {
            sendEvent = function() {
                $('#offerRequestModal').trigger('next.m.2');
            }
        }
    });

}
