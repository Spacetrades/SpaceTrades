if (Meteor.isClient) {

  Template.ModalOfferRequest.onRendered(function() {

    // GLOBAL: set options
    options = {};

    var keyPress = {

      // Only allow integers
      int: function(elem) {
        $("." + elem).keypress(function(key) {
          if (key.charCode < 48 || key.charCode > 57) return false;
        });
      }

    }

    $(".paymentRadio li input[type='radio']").change(function(event) {
      var valPayment = $(this).val();
      options.payment = valPayment;
    });

    // Set time period
    $(".timeRadio li input[type='radio']").change(function() {
      var valTime = $(this).val();
      options.timePeriod = valTime;
    });

    // Get the time difference from now to the day and time

    // Set Hourly time

    switch (options.timePeriod) {
      case 'Morning':
        options.hourTime = 14;
      case 'Afternoon':
        options.hourTime = 19;
      case 'Night':
        options.hourTime = 24;
        break;
    }
    // SET Abstract meetup time
    var meetupTime = moment(options.timePeriod).hours(options.hourTime);

    options.meetupTime = meetupTime;
    // SET Concrete difference delay
    var delayTime = meetupTime.diff(moment());
    options.delayTime = delayTime;


    offerRequestJump1 = function() {
      $('#offerRequestModal').trigger('next.m.1');
    }
    offerRequestJump2 = function() {
      $('#offerRequestModal').trigger('next.m.2');
    }
    offerRequestJump3 = function() {
      $('#offerRequestModal').trigger('next.m.3');
    }


    var picker = new Pikaday({
      field: $('#datepicker')[0]
    });

    keyPress.int("listprice");

  });

}
