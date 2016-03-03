if (Meteor.isClient) {

  Template.ModalFeedbackInitial.events({

    'click .step1 .yes': function() {
      $('.step-1').hide();
      $('.step-3').show();
    },
    'click .step1 .no': function() {
      $('.step-1').hide();
      $('.step-2').show();
    },
    'click .success': function() {
      $('.step-3').hide();
      $('.step-3').show();
    },
    'click .nosuccess': function() {
      $('.step-3').hide();
      $('.step-6').show();

    },
    'click .notNext': function() {
      $('.step-2').hide();
      $('.step-5').show();

    }

  });

}
