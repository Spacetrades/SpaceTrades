Meteor.publish('listingShow', function (listingShow) {
 	if (this.userId) {
    return Listing.find({}, { limit: 16 });
	}	
  // }
  // else {
  //   return this.stop();
  // }
  this.ready();
});