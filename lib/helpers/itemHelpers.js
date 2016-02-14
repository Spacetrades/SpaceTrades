if (Meteor.isClient) {

  Template.item.helpers({
    exampleMapOptions: function() {
      if (GoogleMaps.loaded()) {
        var lat = Listing.find({
          _id: id
        }).fetch()[0].lat;
        var lng = Listing.find({
          _id: id
        }).fetch()[0].lng;
        return {
          center: new google.maps.LatLng(lat, lng),
          zoom: 10
        };
      }
    },
    isSaved: function() {
      var myId = Meteor.userId();
      var query = Saves.find(myId, {
        fields: {
          item_id: true
        }
      }).fetch()[0].item_id;

      return _.contains(query, id);
    },
    isCreator: function(){
      if (this.creator_id == Meteor.userId()){
        console.log("true");
        return true;
      }
      else {
        console.log("false");
        return false;
      }
    },
    messenger: function() {

      var creator_id = $(".hidden").text().trim();

      return Meteor.users.find({
        _id: creator_id
      }).fetch()[0].profile;
    },
    tradeStatus: function() {
      if (this.trade == "Trades Allowed") {
        var color = "green";
      } else {
        var color = "red";
      }
      return color;
    },
    current: function() {
      return Router.current().url;
    },
    offers: function() {
      return Offer.find({
        listingId: this._id
      }).count();
    },
    dateFormatted: function() {
      var date = moment(this.date);
      date = date.format("dddd, MMM DD");
      return date;
    },
    paymentAmazon: function() {
      if (this.payment == "Amazon") {
        var out = true;
      } else {
        var out = false;
      }
      return out
    },
    paymentCash: function() {
      if (this.payment == "Cash") {
        var out = true;
      } else {
        var out = false;
      }
      return out
    },
    chatId: function() {
      var currentConversation = Message.find({
        receiver: this.creator_id
      }).fetch();
      var convoState = !_.isEmpty(currentConversation);

      if (convoState) {

        var convo_id = currentConversation[0].conversation;
        return convo_id;
      } else {

        var convo_id = Random.id(10);
        return convo_id
      }
    },
    paymentBoth: function() {
      if (this.payment == "Both") {
        var out = true;
      } else {
        var out = false;
      }
      return out
    }

    // If User has possession of listing he should have the ability to edit the information after posting and Delete at will
    // editListing : function () {
    //   // Check to see if the user viewing owns the listing
    // },
    // removeListing : function () {
    // }
  });

}
