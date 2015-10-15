if (Meteor.isClient) {

	Template.ModalAddListing.helpers({
		// lat: function () {
		// 	return Geolocation.latLng().lat;
		// },
		// lng: function () {
		// 	return Geolocation.latLng().lng;
		// },
		addListingMapOptions: function() {
			if (GoogleMaps.loaded()) {

				if (Geolocation.error()) {

					swal({
							title: "You may want to enable Geolocation",
							text: "You will not be able to automatically geofocus without this enabled!. ",
							type: "warning",
							showCancelButton: true,
							cancelButtonText: "Leave it disabled",
							confirmButtonColor: "#DD6B55",
							confirmButtonText: "Ok, I'll enable it",
							closeOnConfirm: true
						},
						function() {

							swal({
								title: "You can enable geolocation by selecting the compass icon"
							});

						});


					var lat = 40.712784
					var lng = -74.005941
					var map = new google.maps.LatLng(lat, lng);

					return {
						center: map,
						zoom: 10
					};
				}

				var lat = Geolocation.latLng().lat;
				var lng = Geolocation.latLng().lng;
				var map = new google.maps.LatLng(lat, lng);

				return {
					center: map,
					zoom: 10
				};
			}
		}



		//  		// The progress bar for file uploading
		//  		progress: function () {
		//  			return _.chain(uploads).invoke("progress").reduce( function (a,b) { return a + b }, 0).value();
		//  		}
	});

}