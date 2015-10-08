if ( Meteor.isClient) {

	Template.chatLeft.helpers({
		yourMessages: function() {
			return Message.find({
				receiver: Meteor.userId()
			}, {
				sort: {
					timestamp: -1
				},
				limit: 20
			});
		},
		username: function() {
			return Meteor.users.find({
				_id: id
			}).fetch()[0].profile.name;
		},
		image: function() {
			return Meteor.users.find({
				_id: id
			}).fetch()[0].picturesm;
		},

		conversations: function() {
			var conversationUnique = _.uniq(Message.find({}, {
				sort: {
					timestamp: 1
				},
				fields: {
					username: true
				}
			}).fetch().map(function(x) {
				return x.username
			}), true);
			console.log(conversationUnique);
			return conversationUnique;

		}
	});

}