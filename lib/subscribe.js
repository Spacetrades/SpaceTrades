if (Meteor.isClient) {

// IDEAL - Only subscribe when needed. Not all at once. Specify within events file or routing. The choice is yours

Meteor.subscribe('listingShow');
Meteor.subscribe('saveShow');
Meteor.subscribe('addReport');
Meteor.subscribe('offerShow');
Meteor.subscribe('messageShow');
Meteor.subscribe('listingUser');
Meteor.subscribe('listingId');
Meteor.subscribe('offerId');
Meteor.subscribe('imagesShow');
Meteor.subscribe('userShow');
Meteor.subscribe('notificationShow');

}
