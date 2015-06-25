if (Meteor.isClient) {
  // counter starts at 0
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
    Meteor.publish("listing", function () {
      return Listing.find({});
    });
  });
}