if (Meteor.isClient) {

  Template.ProfileHistoryFeedback.helpers({
    feedbackScope: function() {
      return Listing.find({
        _id: id
      }).fetch()[0];
    },
    nameOther: function() {

      var idSelf = Meteor.userId();
      var other = idSelf == this.creator_id ? this.offer_creator_name : this.username;
      return other

    },
    idOther: function() {
      var idSelf = Meteor.userId();
      var other = idSelf == this.creator_id ? this.offer_creator : this.creator_id;
      return other
    },
    dateFormatted: function() {
      var date = moment(this.date);
      date = date.format("dddd, MMM DD");
      return date;
    },
    isBuyer: function() {
      var seller = this.username;
      var state = seller == Meteor.user().profile.name ? state = false : state = true
      return state;
    }

  });

}
