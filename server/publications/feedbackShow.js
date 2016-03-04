Meteor.publish('feedbackShow', function() {

  return Feedback.find({});
  this.ready();

  });
