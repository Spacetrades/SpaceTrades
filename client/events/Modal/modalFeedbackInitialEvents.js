if (Meteor.isClient) {

  Template.ProfileHistoryFeedback.events({

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


      function validate() {
        var status = true;
        var keys = Object.keys(options);

        for (i = 0; i < keys.length; i++) {
          if (!options[keys[i]] || options[keys[i]] == "") {
            status = false;
            errorFields.push(keys[i]);
          }
        }

        if (!status) {
          sAlert.error("Review form");

          _.each(errorFields, function(f) {
            $("." + f).css("text-decoration", "underline");
          });

        }

        return status;
      }

      function successMessage() {

        sweetAlert({
          title: "Feedback Filed",
          type: "success",
          timer: 3000,
          showConfirmButton: false
        });

      }

      var options = {
        listingId: this._id,
        rater: Meteor.user().profile.name,
        rater_id: Meteor.userId(),
        friendly_rate: $(".friendlyRate").rateit('value'),
        efficiency_rate: $(".efficiencyRate").rateit('value'),
        negotiatiate_rate: $(".negotiateRate").rateit('value'),
        comment_title: $("#listtitlebox").val(),
        comment: $(".feedbackComment").val()
      }

      var price = Number(this.offerprice);
      options.price = price;

      var date = moment(this.date)
      var formatdate = date.format("dddd, MMM DD");
      console.log(formatdate);
      options.date = formatdate;

      var sellUniq = $(".describedRate").rateit('value');
      var buyUniq = $(".paymentRate").rateit('value');


      // IF described rate is object -- empty, set rating to alternative
      _.isObject(sellUniq) ? options.payment_rate = buyUniq : options.described_rate = sellUniq
      this.creator_id == Meteor.userId() ? options.rated_id = this.offer_creator : options.rated_id = this.creator_id;

      // username or offer_creator_name
      var selfName = Meteor.user().profile.name;

      var other;
      selfName == this.username ? other = this.offer_creator_name : other = this.username;
      console.log(this.username, this.offer_creator_name, options);

      options.rated = other;
      if (validate()) {

        successMessage()
        if (Meteor.user().name == this.username) {
          Meteor.call('sendFeedbackBuyer', options)
        } else {
          Meteor.call('sendFeedbackSeller', options)
        }

      }
    }

  });

}
