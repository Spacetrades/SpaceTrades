if (Meteor.isClient) {

	Template.chatRight.helpers({
		// id is the conversation id
		messages: function() {
			return Message.find({
				conversation: id_sell
			});
		},
		username: function() {
			return Meteor.users.find({
				_id: id
			}).fetch()[0].profile.name;
		},
		online: function() {
			var status = Meteor.users.find({
				_id: id
			}).fetch()[0].status.online;
			if (status == true) {
				var color = "#24ec3d";
				var innercolor = "#029402";
				var text = "Online";
			} else {
				var color = "#ff0000";
				var innercolor = "#5858FD";
				var text = "Offline";
			}

			return {
				color: color,
				innercolor: innercolor,
				text: text
			};
		}
	});

}
