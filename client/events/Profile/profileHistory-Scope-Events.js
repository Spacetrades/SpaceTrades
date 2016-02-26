if (Meteor.isClient) {

  Template.profileHistoryCard.events({

    'click .modSentOfferTrigger': function () {
      Session.set("meetupSelected", this);

    }

  });

}
