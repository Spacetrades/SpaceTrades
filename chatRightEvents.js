if (Meteor.isClient) {

	Template.chatRight.events({
		'click .chatSendButton': function() {

			var options = {
				message: $(".chatText").val(),
				sender: Meteor.userId(),
				receiver: id,
				// Conversation key will be generated dynamically and used for all conversation messages
				conversation: "rename",
        createdAt: new Date()
			};

      // FORMAT time
      var time = moment(options.createdAt);
      time = time.format("dddd MMM, DD");
      options.createdAt = time;


			Meteor.call('sendMessage', options)

			// Clears message input
			$(".chatText").val('');
		}
	});

}
