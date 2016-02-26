if (Meteor.isClient) {

  Template.ModalHistoryDetails.helpers({
    scope: function() {
      return Session.get('meetupSelected');
    },
    nameOther: function() {
      var idSelf = Meteor.userId();
      var other = idSelf == this.creator_id ? this.offer_creator_name : this.username;
    return other
    },
    idOther: function() {
      var idSelf = Meteor.userId();
      var other  = idSelf == this.creator_id ? this.offer_creator_name : this.creator_id;
      return other
    }
  });
}

