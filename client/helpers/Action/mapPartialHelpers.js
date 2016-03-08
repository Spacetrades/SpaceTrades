
if (Meteor.isClient) {

  Template.mapModal.helpers({
    offerMapOptions: function() {
      if (GoogleMaps.loaded()) {

        var lat = Session.get("scope").lat;
        var lng = Session.get("scope").lng

        var map = new google.maps.LatLng(lat, lng);
        return {
          center: map,
          zoom: 10
        };
      }
    }
  });

}