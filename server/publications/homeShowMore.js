  Meteor.publish('homeShowMore', function () {
  	if (this.userId) {
    	return Listing.find({}, {limit: 32  });
	}
    this.ready();
  });
