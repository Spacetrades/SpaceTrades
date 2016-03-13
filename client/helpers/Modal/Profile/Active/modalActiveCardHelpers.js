if (Meteor.isClient) {

  Template.ModalProfileActive.helpers({
    scope: function() {
      return Session.get('activeSelected');
    },
    nameOther: function() {
      var idSelf = Meteor.userId();
      var other = idSelf == this.creator_id ? this.offer_creator_name : this.username;
    return other
    },
    idOther: function() {
      var idSelf = Meteor.userId();
      var other  = idSelf == this.creator_id ? this.offer_creator : this.creator_id;
      return other
    },
    timeUntil: function() {

      return Session.get('timeString');

    },
    chatId: function() {
      var currentConversation = Message.find({
        receiver: Session.get('otherId')
      }).fetch();
      var convoState = !_.isEmpty(currentConversation);

      if (convoState) {

        var convo_id = currentConversation[0].conversation;
        return convo_id;
      } else {

        var convo_id = Random.id(10);
        return convo_id
      }
    },
  });

}
