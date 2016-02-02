if (Meteor.isClient) {

  Template.ProfileActiveCard.events({
      'click .modSentOfferTrigger': function(){
        console.log("fuk");
        Session.set("activeSelected", this)
      }
  });

}
