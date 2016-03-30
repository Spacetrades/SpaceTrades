 if (Meteor.isClient) {

   Template.body.onRendered(function() {

       $.fn.extend({
      animateCss: function(animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $(this).addClass('animated ' + animationName).one(animationEnd, function() {
          $(this).removeClass('animated ' + animationName);
        });
      }
    });

    Tracker.autorun(function() {

      var count = Message.find({receiver: Meteor.userId()}).count();

      $(".material-icons").addClass('notificationHighlight');
      $(".material-icons").animateCss("bounce");

    });

    Tracker.autorun(function() {

      var count = Notification.find({destination: Meteor.userId()}).count();

      $(".fa-globe").addClass('notificationHighlight');
      $(".fa-globe").animateCss("bounce");

    });

  });

 }
