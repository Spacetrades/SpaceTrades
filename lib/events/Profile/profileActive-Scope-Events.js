if (Meteor.isClient) {

  Template.profileActiveCard.events({
      'click .modSentOfferTrigger': function(event){
        Session.set('activeSelected', this)
      }
  });

}
