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
		messenger: function() {
			// BREAK
			// Field creator_id is inacessable for whatever reason
			var creator_id = $(".hidden").text().trim();

			// console.log(creator_id);
			// Select the creator of the listing and find their profile.messenger
			return Meteor.users.find({
				_id: creator_id
			}).fetch()[0].profile;
		},
		tradeStatus: function() {
			if (this.trade == "Trades Allowed") {
				console.log(this.trade);
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
		creatorpic: function() {
			return Meteor.users.find({
				_id: this.creator_id
			}).fetch()[0].profile.picturesm;
		}

		// If User has possession of listing he should have the ability to edit the information after posting and Delete at will
		// editListing : function () {
		//   // Check to see if the user viewing owns the listing
		// },
		// removeListing : function () {
		// }
	});

}