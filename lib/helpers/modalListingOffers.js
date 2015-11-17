 if (Meteor.isClient) {

 	Template.ModalListingManager.helpers({
 		listingSelected: function() {
 			return Session.get('listingSelected');
 		}
 	});

 }