if (Meteor.isClient){

  Template.ProfileActiveCard.helpers({
    nameOther: function () {
      if ( Meteor.userId() == this.creator_id ){
        return this.offer_creator_name;
      }
      else {
        return this.username;
      }
    }
  });

}
