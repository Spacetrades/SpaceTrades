if (Meteor.isClient) {

  Template.Notification.helpers({
    type: function () {
      return this.notifyType;
    }
  });
}
