if (Meteor.isClient) {

// TASK - Only subscribe when needed. Not all at once. Specify within events file or routing. The choice is yours

// Meteor.subscribe('addListing');
// Meteor.subscribe('addOffer');
Meteor.subscribe('listingShow');
// Meteor.subscribe("homeShowMore")
Meteor.subscribe('offerShow');
Meteor.subscribe('messageShow');
Meteor.subscribe('listingUser');
Meteor.subscribe('listingId');
Meteor.subscribe('offerId');
Meteor.subscribe('imagesShow');
// Meteor.subscribe('userStatus');
Meteor.subscribe('userShow');
// Meteor.subscribe('place');
// Meteor.subscribe('ipLocate');

}