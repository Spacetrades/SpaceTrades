if (Meteor.isClient) {

  Template.chatRight.events({
    'click .chatSendButton': function() {

try {
      // First Message Sets Seller and Buyer /////////////////////
      var query = Message.find({conversation: id_sell}, {sort: {createdAt: 1} }).fetch()[0];
      var seller = query.receiver;
      var buyer = query.sender;
      ////////////////////////////////////////////////////////////

}

catch(e){
  console.log("error");
}

      if (Meteor.userId() == seller){

  var options = {
        message: $(".chatText").val(),
        sender: Meteor.userId(),
        receiver: buyer,
        conversation: id_sell,
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
else {
  console.log("creator");
      var options = {
        message: $(".chatText").val(),
        sender: Meteor.userId(),
        receiver: id,
        conversation: id_sell,
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
  }
  });

}
