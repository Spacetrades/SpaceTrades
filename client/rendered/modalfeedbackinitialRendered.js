if (Meteor.isClient) {

  Template.ModalFeedbackInitialBuyer.onRendered(function() {

    feedbackInitialBuyerJump1 = function() {
      $('#feedbackBuyerInitialModal').trigger('next.m.1');
    }
    feedbackInitialBuyerJump2 = function() {
      $('#feedbackBuyerInitialModal').trigger('next.m.2');
    }
    feedbackInitialBuyerJump3 = function() {
      $('#feedbackBuyerInitialModal').trigger('next.m.3');
    }
    feedbackInitialBuyerJump4 = function() {
      $('#feedbackBuyerInitialModal').trigger('next.m.4');
    }
    feedbackInitialBuyerJump5 = function() {
      $('#feedbackBuyerInitialModal').trigger('next.m.5');
    }
    feedbackInitialBuyerJump6 = function() {
      $('#feedbackBuyerInitialModal').trigger('next.m.6');
    }
    feedbackInitialBuyerJump7 = function() {
      $('#feedbackBuyerInitialModal').trigger('next.m.7');
    }


  })

}
