if (Meteor.isClient) {

  Template.ModalProfileActive.helpers({
    scope: function(){
      return Session.get('activeSelected');
    }
  });

}
