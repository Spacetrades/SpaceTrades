if (Meteor.isClient) {

  Template.ProfileActive.helpers({
    active: function() {
      return Session.get('activeSelected');
    },
    activeTicketOptions: function() {
      if (GoogleMaps.loaded()) {
        var lat = Listing.find({
          _id: Session.get('activeSelected')._id
        }).fetch()[0].offerlat;
        var lng = Listing.find({
          _id: Session.get('activeSelected')._id
        }).fetch()[0].offerlng;
        return {
          center: new google.maps.LatLng(lat, lng),
          zoom: 10
        };
      }
    }

  })

}
