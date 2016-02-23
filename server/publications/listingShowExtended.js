Meteor.publish('listingShowExtended', function(listingShow) {

  return Listing.find({}, {
    limit: 100
  });
  this.ready();

});
