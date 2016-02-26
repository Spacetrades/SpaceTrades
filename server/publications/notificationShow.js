Meteor.publish('notificationShow', function(id) {

  if (this.userId) {
    Notification.find({
      destination: Meteor.userId()
    }, {
      sort: {
        createdAt: -1
      }
    })
  }
  this.ready();

});
