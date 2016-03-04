if (Meteor.isClient) {

  Template.ModalFeedbackInitial.events({

    'click .step-1 .yes': function() {
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
    'click .step-6 .modalNext': function() {
      $('.step-6').hide();
      $('.step-5').show();
    },
    'click .step-6 .modalBack': function() {
      $('.step-6').hide();
      $('.step-3').show();
    },
    'click .step-2 .notNext': function() {
      $('.step-2').hide();
      $('.step-5').show();
    },
    'click .step-8 .modalNext': function() {
      $('.step-8').hide();
      $('.step-9').show();
    },
    'click .step-2 .modalBack': function() {
      $('.step-2').hide();
      $('.step-1').show();
    },
    'click .step-9 .modalBack': function() {
      $('.step-9').hide();
      $('.step-8').show();
    },
    'click .sendFeedback': function() {

      var options = {
        rater: Meteor.user().profile.name,
        friendly_rate: $(".friendlyRate").rateit('value'),
        efficiency_rate: $(".efficiencyRate").rateit('value'),
        negotiatiate_rate: $(".negotiateRate").rateit('value'),
        comment_title: $("#listtitlebox").val(),
        comment: $(".feedbackComment").val()
      }

      var sellUniq = $(".describedRate").rateit('value');
      var buyUniq = $(".paymentRate").rateit('value');


      // IF described rate is object -- empty, set rating to alternative
      _.isObject(sellUniq) ? options.payment_rate = buyUniq : options.described_rate = sellUniq

      // username or offer_creator_name
      var selfName = Meteor.user().profile.name;

      var other;
      selfName == this.username ? other = this.offer_creator_name : other = this.username;
      console.log(this.username, this.offer_creator_name, options);

      options.rated = other;

      if (Meteor.user().name == this.username) {
        Meteor.call('sendFeedbackBuyer', options)
      } else {
        Meteor.call('sendFeedbackSeller', options)
      }

    }

  });

}
