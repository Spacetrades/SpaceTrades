if (Meteor.isClient) {

  Template.ModalFeedbackInitial.events({

    'click .step-1 .yes': function() {
      console.log("yes");
      $('.step-1').hide();
      $('.step-3').show();
    },
    'click .step-1 .no': function() {
      $('.step-1').hide();
      $('.step-2').show();
    },
    'click .step-3 .success': function() {
      $('.step-3').hide();
      $('.step-8').show();
    },
    'click .nosuccess': function() {
      $('.step-3').hide();
      $('.step-6').show();
    },
    'click .step-6 .modalNext': function(){
       $('.step-6').hide();
      $('.step-5').show();
    },
    'click .step-6 .modalBack': function(){
      $('.step-6').hide();
      $('.step-2').show();
    },
    'click .step-2 .notNext': function() {
      $('.step-2').hide();
      $('.step-5').show();
    },
    'click .sendFeedback': function(){

    }

  });

}
