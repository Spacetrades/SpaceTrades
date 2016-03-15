 if (Meteor.isClient) {

   Template.headerpost.onCreated(function() {

Tracker.autorun(function() {

      var count = Message.find().count();

    $(".fa-globe").addClass('notificationHighlight');
    console.log(count);
    });
});

}
