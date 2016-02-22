Meteor.publish('listingShow', function(listingShow) {

  return Listing.find({}, {
    limit: 100
  });
  this.ready();

});
