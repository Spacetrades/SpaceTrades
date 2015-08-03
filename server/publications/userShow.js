  Meteor.publish('userShow', function () {
    return Meteor.users.find({}, { limit: 100 });
  });