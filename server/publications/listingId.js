  Meteor.publish('listingId', function (id) {
  	if (this.userId) { 
  		return Listing.find({ _id: id });
  	}
  	this.ready();
  });