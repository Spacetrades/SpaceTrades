  Meteor.publish('listingShow', function (listingShow) {
    // console.log(listingShow);

    // if (listingShow) {
    return Listing.find({}, { limit: 16 });
  // }
  // else {
  //   return this.stop();
  // }
  });