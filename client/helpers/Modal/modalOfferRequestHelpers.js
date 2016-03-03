if (Meteor.isClient) {

	Template.ModalOfferRequest.helpers({
    payment: function(payment){
      try {
var status = payment == Session.get("scope").payment;

      }
      catch(e){

      }
      var status = payment == Session.get("scope").payment;
      return status
    }
	});

}
