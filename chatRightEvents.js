if (Meteor.isClient) {

	Template.chatRight.events({
		'click .chatSendButton': function() {

			var options = {
				message: $(".chatText").val(),
				sender: Meteor.userId(),
				receiver: id,
				// Conversation key will be generated dynamically and used for all conversation messages
				conversation: Random.id(7),
        createdAt: new Date()
			};

      // FORMAT time
      var time = moment(options.createdAt);
      time = time.format("h:mm, dddd MMM, DD");
      options.createdAt = time;


			Meteor.call('sendMessage', options);

// IF message is a divider - new message after other person talking or just new from the start
      // if ();

			// Clears message input
			$(".chatText").val('');
		}
	});

}
