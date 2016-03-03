Meteor.publish('notificationShow', function(id) {

  if (this.userId) {
    return Notification.find({
      destination: this.userId
    }, {
      sort: {
        createdAt: -1
      }
    })
  }
  this.ready();

});
