  Meteor.publish('homeShowMore', function() {

      return Listing.find({}, {
          limit: 32
      });
      this.ready();

  });