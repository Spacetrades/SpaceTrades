if (Meteor.isClient) {

  Template.chatLeft.helpers({
    yourMessages: function() {
      return Message.find({
        receiver: Meteor.userId()
      }, {
        sort: {
          timestamp: -1
        },
        limit: 100
      });
    },
    image: function() {
      return Meteor.users.find({
        _id: id
      }).fetch()[0].picturesm;
    },

    conversations: function() {
      var funk = [];
      var frog = Message.find({}, {
        fields: {
          conversation: 1
        }
      }).fetch().map(function(x) {
        funk.push(x.conversation)
      });
      convos = _.uniq(funk);
      console.log(convos);
      return convos

    },
    username: function() {

      _.map(convos, function(x) {
        person = Message.find({
          conversation: convos[0]
        }, {
          sort: {
            createdAt: 1
          }
        }).fetch()[0].sender;
      });
      return person

    }
  })
};
