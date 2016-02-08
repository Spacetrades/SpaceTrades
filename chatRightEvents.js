if (Meteor.isClient) {

  Template.chatRight.events({
    'click .chatSendButton': function() {

      var options = {
        message: $(".chatText").val(),
        sender: Meteor.userId(),
        receiver: id,
        createdAt: new Date()
      };

      // FORMAT time
      var time = moment(options.createdAt);
      time = time.format("h:mm, dddd MMM, DD");
      options.createdAt = time;

      // Conversation key will be generated dynamically and used for all conversation messages
      var query = Message.find({
        sender: options.sender,
        receiver: id
      }).fetch()[0]

      if (Boolean(query)) {
        options.conversation = query.conversation;
      } else {
        options.conversation = Random.id(10);
      }

      Meteor.call('sendMessage', options);

      // IF message is a divider - new message after other person talking or just new from the start
      // if ();

      // Clears message input
      $(".chatText").val('');
    }
  });

}
