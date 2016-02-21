 if (Meteor.isClient) {

 	Template.ModalListingManager.helpers({
 		listingSelected: function() {
 			return Listing.find({_id: Session.get('listingSelected')._id });
 		},
 		offers: function(){
 			return Offer.find({ listingId: Session.get('listingSelected')._id}).count();
 		}
 	});

 }
