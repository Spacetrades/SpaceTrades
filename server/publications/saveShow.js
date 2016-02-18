Meteor.publish('saveShow', function(id) {
  return Saves.find({
    user: this.userId
  });

  this.ready();
});
