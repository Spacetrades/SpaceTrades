Meteor.publish('listingShow', function(listingShow) {

  return Listing.find({ status: "Pending"}, {
    limit: 100
  });
  this.ready();

});
