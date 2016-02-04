if (Meteor.isClient) {

  Template.savedItems.helpers({
    saved: function() {
      var myId = Meteor.userId();
      var query = Saves.find(myId, {
        fields: {
          item_id: true
        }
      }).fetch()[0].item_id;
      return query
    },
    defaultCheck: function() {
      var offerid = this.offerAccepted;

      var myId = Meteor.userId();

      var results = Saves.find(myId, {
        fields: {
          item_id: true
        }
      });
      return Boolean(results.count());
    }
  });


}
