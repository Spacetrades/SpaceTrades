Meteor.publish('messageShow', function () {
    return Message.find({}, { sort: { timestamp: -1 }, limit: 20 });
  });