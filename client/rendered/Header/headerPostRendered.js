if (Meteor.isClient) {

    Template.headerpost.onRendered(function() {

        keyPress.nav("headerNavSearch");

        $.getScript("https://cdn.jsdelivr.net/gh/ngzhian/multi-step-modal/multi-step-modal.js"),
        function() {
            sendEvent = function() {
                $('#offerRequestModal').trigger('next.m.2');
            }
        }
    });

}
