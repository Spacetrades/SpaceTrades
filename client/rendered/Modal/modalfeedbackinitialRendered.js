if (Meteor.isClient) {

  Template.ModalFeedbackInitial.onRendered(function() {

for (i = 2; i < 8; i++) {
      $(".step-" + i).hide()
    }


  })

}
