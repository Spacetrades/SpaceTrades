if (Meteor.isClient) {

Meteor.subscribe('addListing');
Meteor.subscribe('addOffer');
Meteor.subscribe('listingShow');
Meteor.subscribe('offerShow');
// Meteor.subscribe('offerNum');
Meteor.subscribe('listingUser');
Meteor.subscribe('listingId');
Meteor.subscribe('imagesShow');
Meteor.subscribe('userStatus');
Meteor.subscribe('userShow');

}