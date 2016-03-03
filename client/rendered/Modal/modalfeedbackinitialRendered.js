if (Meteor.isClient) {

  Template.ModalFeedbackInitial.onRendered(function() {

    for (i = 2; i < 7; i++) {
      $(".step-" + i).hide()
    }



  })

}
