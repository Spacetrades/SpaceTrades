if (Meteor.isClient) {

Meteor.subscribe('addListing');
Meteor.subscribe('addOffer');
Meteor.subscribe('listingShow');
Meteor.subscribe('offerShow');
Meteor.subscribe('messageShow');
Meteor.subscribe('listingUser');
Meteor.subscribe('listingId');
Meteor.subscribe('offerId');
Meteor.subscribe('imagesShow');
Meteor.subscribe('userStatus');
Meteor.subscribe('userShow');
Meteor.subscribe('place');
Meteor.subscribe('ipLocate');

}