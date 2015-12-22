  Meteor.publish('listingId', function(id) {

  	return Listing.find({
  		_id: id
  	});
  	this.ready();

  });