if (Meteor.isClient) {

  Template.ProfileActiveCard.helpers({
    nameOther: function() {

      var idSelf = Meteor.userId();
      var other = idSelf == this.creator_id ? this.offer_creator_name : this.username;
      return other

    },
      dateFormatted: function() {
      var date = moment(this.date);
      date = date.format("dddd, MMM DD");
      return date;
    },
  });

}
