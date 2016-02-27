Meteor.publish('tempShow', function(tempShow) {

  return Temporary.find({}, {
    limit: 100
  });
  this.ready();

});
