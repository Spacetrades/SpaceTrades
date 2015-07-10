if (Meteor.isClient){
	Template.searchpage.helpers({
		getListings : function () {
			return ListingSearch.getData({
				transform: function (matchText, regExp) {
					console.log(matchText.replace(regExp, "<b>$&</b>"));
					return matchText.replace(regExp, "$&");
				},
				sort: { isoScore: -1 }
			});
		},
		search: function () {
			return ListingSearch.getCurrentQuery();
		}
	});

	Template.addlisting.helpers({
		lat: function () {
			return Geolocation.latLng().lat;
		},
		lng: function () {
			return Geolocation.latLng().lng;
		},
  		// The progress bar for file uploading
  		progress: function () {
  			return _.chain(uploads).invoke("progress").reduce( function (a,b) { return a + b }, 0).value();
  		}
	});

	Template.meetuprequest.helpers({
		offerMapOptions: function () {
			if ( GoogleMaps.loaded() ) {
				var lat = Listing.find( { _id: id } ).fetch()[0].lat;
				var lng = Listing.find( { _id: id } ).fetch()[0].lng;
				var map = new google.maps.LatLng(lat, lng);
				return {
					center: map,
        			// searchBox: new google.maps.places.SearchBox((input)),
        			zoom: 18
        		};
        	}
        }
    });


	Template.item.helpers({
		exampleMapOptions: function () {
    		// Make sure the maps API has loaded
    		if (GoogleMaps.loaded()) {
      			// Need to get the right latitude and longitude from id 
      			var lat = Listing.find({ _id: id }).fetch()[0].lat;
      			var lng = Listing.find({ _id: id }).fetch()[0].lng;
      			return {
      				center: new google.maps.LatLng(lat, lng),
      				zoom: 13
      			};
  			}
		},

		messenger: function () {
			return Meteor.user().profile.messenger
		},
		current: function () {
			return Router.current().url;
		}

  		// If User has possession of listing he should have the ability to edit the information after posting and Delete at will
  		// editListing : function () {
  		//   // Check to see if the user viewing owns the listing
  		// },
  		// removeListing : function () {
  		// }
	});

	Template.home.helpers({
		listing: function () {
			return Listing.find();
		}
	});

	Template.card.helpers({
		offers: function () {
			return Offer.find().count();
		}
	});

	Template.list_offer.helpers({ 
		listing: function () {
    		// id = this.params._id
    		return Listing.find({ _id: id });
		}
	});

	Template.list_item.helpers({ 
		listing: function () {
    		// id = this.params._id
    		return Listing.find({ _id: id });
		}
	});

	Template.LayoutDefault.helpers({
		allDocs: function () {
			return Session.get('allDocs');
		}
	});

}