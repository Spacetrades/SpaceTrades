if (Meteor.isClient) {

  Template.ProfileActiveCard.events({
    'click .modSentOfferTrigger': function() {
      Session.set("activeSelected", this);

      var buyer = Session.get("activeSelected").creator_id;
      var seller = Session.get("activeSelected").offer_creator;

      // IF user is seller
      if (Meteor.userId() == buyer) {
        var seller = Session.get("activeSelected").offer_creator;
        Session.set("otherId", seller);
      }
      // ELSE user is buyer
      else {
        Session.set("otherId", buyer);
      }
    }
  });

}
