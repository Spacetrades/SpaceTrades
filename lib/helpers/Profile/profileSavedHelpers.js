if (Meteor.isClient) {

  Template.savedItems.helpers({
    saved: function() {
      var myId = Meteor.userId();
      var query = Saves.find(myId).fetch()[0];
      return query
    },
    defaultCheck: function() {
      var offerid = this.offerAccepted;

      var myId = Meteor.userId();

      var query = Saves.find(myId);
      return Boolean(query.count());
    }
  });


}
