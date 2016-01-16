if (Meteor.isClient) {

	Template.ModalLocationRadius.events({
		'click .offerRequestBtn': function() {

			var place = Session.get('locationFull');
			var options = {
				lat: Session.get('userlat'),
				lng: Session.get('userlng'),
				neighborhood: place[0],
				city: place[1],
				state: place[2],
				country: place[3],
				locationString: place.toString(),
				mapRadius: $(".mapRadius").val()
			}

			function geolocate() {
				if (navigator.geolocation) {
					browserSupportFlag = true;
					navigator.geolocation.getCurrentPosition(function(position) {
						initialLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
						map.setCenter(initialLocation);
					}, function() {
						handleNoGeolocation(browserSupportFlag);
					});
				}
			}

			function validationCheck() {

				for (i = 0; i < options.length; i++) {
					if (options[i] == "") {
						sAlert("Location sent incorrectly");
						return false
					}
				}
				return true
			}

			if (validationCheck()) {

				Meteor.call('setLocation', options);
				sAlert.success("Location set");

			}

		},
		'click .currentLocationBtn': function() {

			navigator.geolocation.getCurrentPosition(function(position){
				console.log(position);
			});

			if (navigator.geolocation) {
				browserSupportFlag = true;
				navigator.geolocation.getCurrentPosition(function(position) {
					initialLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
					map.setCenter(initialLocation);
				}, function() {
					handleNoGeolocation(browserSupportFlag);
				});
			}
		}
	});

}