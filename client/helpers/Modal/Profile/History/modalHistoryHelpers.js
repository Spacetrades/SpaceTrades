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
      var other  = idSelf == this.creator_id ? this.offer_creator : this.creator_id;
      return other
    },
    notFiled: function(){
      var user = Meteor.userId() == this.creator_id ? user = "seller" : user = "buyer";

      if (user == "buyer"){
        if (this.feedback_filed_buyer ==  "Completed"){
          return false
        }
        else {
          return true
        }
      }
      else if(user == "seller") {
           if (this.feedback_filed_seller == "Completed"){
          return false
        }
        else {
          return true
        }
      }
    }
  });
}

