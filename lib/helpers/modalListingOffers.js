 if (Meteor.isClient) {
// IDEAL: Make a var for session.get
 	Template.ModalListingManager.helpers({
 		listingSelected: function() {
 			return Session.get('listingSelected');
 		},
 		offers: function(){
 			return Offer.find({ listingId: Session.get('listingSelected')._id}).count();
 		}
 	});

 }