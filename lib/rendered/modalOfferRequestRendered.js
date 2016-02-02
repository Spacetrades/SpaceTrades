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
