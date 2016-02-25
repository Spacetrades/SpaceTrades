if (Meteor.isClient) {

	Template.ModalOfferRequest.helpers({
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
		},
    payment: function(payment){
      try {
var status = payment == Session.get("scope").payment;

      }
      catch(e){

      }
      var status = payment == Session.get("scope").payment;
      return status
    }
	});

}
