if (Meteor.isClient) {

Meteor.subscribe('addListing');
Meteor.subscribe('addOffer');
Meteor.subscribe('listingShow');
Meteor.subscribe('listingUser');
Meteor.subscribe('listingId');
Meteor.subscribe('imagesShow');
Meteor.subscribe('userStatus');

}