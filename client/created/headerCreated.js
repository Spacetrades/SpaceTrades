 if (Meteor.isClient) {

   Template.body.onRendered(function() {

    Tracker.autorun(function() {

      var count = Message.find({receiver: Meteor.userId()}).count();

      $(".material-icons").addClass('notificationHighlight');
      console.log(count);
    });

    Tracker.autorun(function() {

      var count = Notification.find({destination: Meteor.userId()}).count();

      $(".fa-globe").addClass('notificationHighlight');
      console.log(count);
    });

  });

 }
