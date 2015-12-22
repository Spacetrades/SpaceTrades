Meteor.publish('listingShow', function(listingShow) {

	return Listing.find({}, {
		limit: 16
	});
	this.ready();
	
});