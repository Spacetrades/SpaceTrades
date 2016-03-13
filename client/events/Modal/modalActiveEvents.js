if (Meteor.isClient) {

  Template.ModalProfileActive.events({
    'click .modActiveCreator': function() {
      $("#ModalProfileActive").modal('hide');
    },
    'click .modProfileActiveBtn': function() {
      $("#ModalProfileActive").modal('hide')
    }
  });

}
