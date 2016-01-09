Meteor.publish('listingShow', function(listingShow) {

    return Listing.find({}, 
    {limit: 20}
        );
    this.ready();

});