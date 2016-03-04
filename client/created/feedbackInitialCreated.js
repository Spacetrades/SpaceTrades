if (Meteor.isClient) {

    Template.ModalFeedbackInitial.onCreated(function() {

        for (i = 2; i < 10; i++) {
            $(".step-" + i).hide()
        }
    });
}
