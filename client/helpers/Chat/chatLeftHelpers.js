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
        sample = Message.find({
          conversation: x
        }).fetch()[0]

        var sender = sample.sender;
        var receiver = sample.receiver;
        var you = Meteor.userId();

        var other = you == sender ? receiver : sender;
        console.log(other);

      });
      return other

    }
  })
};

