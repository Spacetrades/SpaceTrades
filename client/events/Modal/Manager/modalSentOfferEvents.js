if (Meteor.isClient) {

    Template.ModalSentOffer.events({

    	'click #profileReceivedCancel': function(){

    		var options = {
    			id: Session.get("offerSelected")._id
    		}

    		Meteor.call('cancelOffer', options);
    	},
      'click .profileReceivedName': function(){
        $("#sentOfferModal").modal('hide');
      }
    });

}
