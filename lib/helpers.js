if (Meteor.isClient){
	Template.searchpage.helpers({
		getListings : function () {
			return ListingSearch.getData({
				sort: { isoScore: -1 }
			});
		},
		search: function () {
			return ListingSearch.getCurrentQuery();
		}
	});

	Template.ChatMessages.helpers({
		messages: function () {
			return Message.find({
			}, {
				sort: {
					timestamp: -1
				},
				limit: 20
			});
		}
	});

	Template.addlisting.helpers({
		// lat: function () {
		// 	return Geolocation.latLng().lat;
		// },
		// lng: function () {
		// 	return Geolocation.latLng().lng;
		// },
		addListingMapOptions: function () {
			if ( GoogleMaps.loaded() ) {

				if ( Geolocation.error() ) {

					swal({   
					   title: "You may want to enable Geolocation",
					   text: "You will not be able to automatically geofocus without this enabled!. ",
					   type: "warning",
					   showCancelButton: true,
					   cancelButtonText: "Leave it disabled",
					   confirmButtonColor: "#DD6B55",   
					   confirmButtonText: "Ok, I'll enable it",
					   closeOnConfirm: true },
					   function () {
					   	
					   swal({
					   	title: "You can enable geolocation by selecting the compass icon"
					   });

					   });


					var lat = 40.712784
					var lng = -74.005941
					var map = new google.maps.LatLng(lat, lng);
				
					return {
						center: map,
        				zoom: 9
        			};
				}

				var lat = Geolocation.latLng().lat;
				var lng = Geolocation.latLng().lng;
				var map = new google.maps.LatLng(lat, lng);
				
				return {
					center: map,
        			zoom: 9
        		};
        	}
        }



 //  		// The progress bar for file uploading
 //  		progress: function () {
 //  			return _.chain(uploads).invoke("progress").reduce( function (a,b) { return a + b }, 0).value();
 //  		}
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
        			zoom: 13
        		};
        	}
        }
    });

    Template.UserProfile.helpers({
    	name: function () {
    		return Meteor.users.find( { _id: id } ).fetch()[0].profile.name;
    	},
    	profimg: function () {
    		return Meteor.users.find( { _id: id } ).fetch()[0].profile.picturelrg;
    	},
    	listing: function () {
    		return Listing.find( { creator_id: id } );
    	},
    	facebook: function () {
    		var fbid = Meteor.users.find( { _id: id } ).fetch()[0].services.facebook.id;
    		var fblink = "https://www.facebook.com/" + fbid;
    		return fblink
    	},
    	online: function () {
    		var status = Meteor.users.find( { _id: id } ).fetch()[0].status.online;
    		if (status == true) {
    			var color = "#24ec3d";
    			var innercolor = "#029402";
    			var text = "Online";
    		}
    		else {
    			var color = "#ff0000";
    			var innercolor = "#5858FD";
    			var text = "Offline";
    		}

    		return {
    			color: color,
    			innercolor: innercolor,
    			text: text
    		};
    	},
    	month: function () {
    		var monthNumber = new Date().getMonth();
			var monthNames = ["January", "February", "March", "April", "May", "June",
			  "July", "August", "September", "October", "November", "December"
			];
			var month = monthNames[monthNumber];
			return month;
    	}
    });

    Template.Manager.helpers({
    	offer: function () {
    		var id = Meteor.userId();
    		return Offer.find( { creator_id: id } );
    	},
    	listing: function () {
    		return Listing.find( { creator_id: Meteor.userId() } );
    	}
    });

    Template.ManagerCardListing.helpers({
    	offers: function () {
			return Offer.find({ listingId: this._id }).count();
    	}
    });

    Template.itemOffer.helpers({
    	listingOffers: function () {
    		return Offer.find({ _id: id});
    	},
    	options: function () {
    		return {
    			height: 650,
    			width: 200
    		};
    	},
    	ItemOfferOptions: function () {
			if ( GoogleMaps.loaded() ) {
				var lat = Offer.find({ _id: id }).fetch()[0].lat;
				var lng = Offer.find({ _id: id }).fetch()[0].lng;

				var map = new google.maps.LatLng(lat, lng);

				return {
					center: map,
        			zoom: 16
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
			// BREAK
			// Field creator_id is inacessable for whatever reason
			var creator_id = $(".hidden").text().trim();

			// console.log(creator_id);
			// Select the creator of the listing and find their profile.messenger
			return Meteor.users.find({_id: creator_id}).fetch()[0].profile;
		},
		current: function () {
			return Router.current().url;
		},
		offers: function () {
			return Offer.find({ listingId: this._id }).count();
		},
		creatorpic: function () {
			return Meteor.users.find({ _id: this.creator_id }).fetch()[0].profile.picturesm;
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
		offers: function (e) {
			return Offer.find({ listingId: this._id }).count();
		}
	});

	Template.LayoutDefault.helpers({
		allDocs: function () {
			return Session.get('allDocs');
		}
	});

}