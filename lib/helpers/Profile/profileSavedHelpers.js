if (Meteor.isClient) {

  Template.savedItems.helpers({
    saved: function() {
      var myId = Meteor.userId();
      var query = Saves.find({user: myId}).fetch();
      console.log(query);
      return query
    },
    defaultCheck: function() {
      var offerid = this.offerAccepted;

      var myId = Meteor.userId();

       var query = Saves.find({user: myId});
      return Boolean(query.count());
    }
  });


}
