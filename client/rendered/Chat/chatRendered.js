if (Meteor.isClient){
  Template.chatRight.onRendered(function(){
    keyPress.enter("chatText", "chatSendButton");

  });

}
